/* Eingang: sammelt Text, URLs und Fotos lokal im Browser (IndexedDB). Export als JSON für das nächste Update. */
(function(){
  var d = document, $ = function(s){ return d.querySelector(s); };
  var CAT = {it:'IT', ai:'AI', eth:'ETH', brasil:'Brasil', health:'Health', politik:'Politik', haeuser:'Häuser'};
  var db = null, mem = [], pending = [];          // pending = Fotos der aktuellen Eingabe
  var ta = $('#txt'), fileIn = $('#file'), thumbs = $('#thumbs'), msg = $('#msg'), list = $('#queue'), expBtn = $('#export'), clrBtn = $('#clear');

  function say(t, err){ msg.textContent = t || ''; msg.className = 'msg' + (err ? ' err' : ''); }

  /* ---- Speicher ---- */
  function openDb(cb){
    try {
      var rq = indexedDB.open('af-inbox', 1);
      rq.onupgradeneeded = function(){ rq.result.createObjectStore('items', {keyPath:'id'}); };
      rq.onsuccess = function(){ db = rq.result; cb(); };
      rq.onerror = function(){ cb(); };
    } catch (e) { cb(); }
  }
  function all(cb){
    if (!db) return cb(mem.slice());
    var out = [], tx = db.transaction('items'), c = tx.objectStore('items').openCursor();
    c.onsuccess = function(){ var cur = c.result; if (cur) { out.push(cur.value); cur.continue(); } else cb(out.sort(function(a,b){ return a.ts - b.ts; })); };
    c.onerror = function(){ cb([]); };
  }
  function put(it, cb){
    if (!db) { mem.push(it); return cb(); }
    var tx = db.transaction('items', 'readwrite'); tx.objectStore('items').put(it);
    tx.oncomplete = cb; tx.onerror = function(){ say('Speichern im Browser nicht möglich.', true); };
  }
  function del(id, cb){
    if (!db) { mem = mem.filter(function(x){ return x.id !== id; }); return cb(); }
    var tx = db.transaction('items', 'readwrite'); tx.objectStore('items').delete(id); tx.oncomplete = cb;
  }
  function wipe(cb){
    if (!db) { mem = []; return cb(); }
    var tx = db.transaction('items', 'readwrite'); tx.objectStore('items').clear(); tx.oncomplete = cb;
  }

  /* ---- Fotos verkleinern ---- */
  function shrink(file){
    return new Promise(function(res, rej){
      var url = URL.createObjectURL(file), img = new Image();
      img.onload = function(){
        var max = 1600, k = Math.min(1, max / Math.max(img.width, img.height));
        var c = d.createElement('canvas'); c.width = Math.round(img.width * k); c.height = Math.round(img.height * k);
        c.getContext('2d').drawImage(img, 0, 0, c.width, c.height);
        URL.revokeObjectURL(url);
        res({name: file.name, data: c.toDataURL('image/jpeg', .85)});
      };
      img.onerror = function(){ URL.revokeObjectURL(url); rej(new Error('Bild nicht lesbar: ' + file.name)); };
      img.src = url;
    });
  }
  function drawThumbs(){
    thumbs.textContent = '';
    pending.forEach(function(p, i){
      var w = d.createElement('div'); w.className = 'thumb';
      var im = new Image(); im.alt = p.name; im.src = p.data;
      var b = d.createElement('button'); b.type = 'button'; b.setAttribute('aria-label', 'Foto entfernen'); b.textContent = '×';
      b.onclick = function(){ pending.splice(i, 1); drawThumbs(); };
      w.appendChild(im); w.appendChild(b); thumbs.appendChild(w);
    });
  }
  fileIn.addEventListener('change', function(){
    var files = Array.prototype.slice.call(fileIn.files || []);
    say('Fotos werden vorbereitet …');
    Promise.all(files.map(shrink)).then(function(r){ pending = pending.concat(r); drawThumbs(); say(''); fileIn.value = ''; })
      .catch(function(e){ say(e.message, true); });
  });

  /* ---- Eintrag speichern ---- */
  function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
  $('#form').addEventListener('submit', function(e){
    e.preventDefault();
    var cat = ($('input[name=cat]:checked') || {}).value, text = ta.value.trim();
    if (!text && !pending.length) return say('Bitte Text, URL oder Foto angeben.', true);
    if (!cat) return say('Bitte eine Kategorie wählen.', true);
    var made = [], ts = Date.now();
    if (text) {
      var isUrl = /^https?:\/\/\S+$/i.test(text);
      made.push({id: uid(), ts: ts, category: cat, kind: isUrl ? 'url' : 'text', text: text});
    }
    pending.forEach(function(p, i){ made.push({id: uid(), ts: ts + i + 1, category: cat, kind: 'photo', name: p.name, data: p.data}); });
    var n = made.length;
    (function next(i){
      if (i >= made.length) { ta.value = ''; pending = []; drawThumbs(); say(n + (n === 1 ? ' Eintrag' : ' Einträge') + ' gespeichert (' + CAT[cat] + ').'); return render(); }
      put(made[i], function(){ next(i + 1); });
    })(0);
  });

  /* ---- Liste ---- */
  function render(){
    all(function(items){
      list.textContent = '';
      $('#empty').hidden = items.length > 0;
      expBtn.disabled = clrBtn.disabled = !items.length;
      items.forEach(function(it){
        var li = d.createElement('li'); li.className = 'item';
        var tag = d.createElement('span'); tag.className = 'tag'; tag.textContent = CAT[it.category] || it.category;
        var what = d.createElement('div'); what.className = 'what';
        if (it.kind === 'photo') { var im = new Image(); im.alt = ''; im.src = it.data; what.appendChild(im); what.appendChild(d.createTextNode(it.name || 'Foto')); }
        else { what.textContent = it.text.length > 220 ? it.text.slice(0, 220) + ' …' : it.text; var s = d.createElement('small'); s.textContent = it.kind === 'url' ? 'URL' : 'Text'; what.appendChild(s); }
        var b = d.createElement('button'); b.type = 'button'; b.className = 'del'; b.textContent = 'Löschen';
        b.onclick = function(){ del(it.id, render); };
        li.appendChild(tag); li.appendChild(what); li.appendChild(b); list.appendChild(li);
      });
    });
  }

  /* ---- Export ---- */
  expBtn.addEventListener('click', function(){
    all(function(items){
      var pad = function(n){ return (n < 10 ? '0' : '') + n; }, t = new Date();
      var name = 'eingang-' + t.getFullYear() + pad(t.getMonth()+1) + pad(t.getDate()) + '-' + pad(t.getHours()) + pad(t.getMinutes()) + '.json';
      var blob = new Blob([JSON.stringify({version: 1, exported: t.toISOString(), items: items}, null, 1)], {type: 'application/json'});
      var a = d.createElement('a'); a.href = URL.createObjectURL(blob); a.download = name; d.body.appendChild(a); a.click(); a.remove();
      setTimeout(function(){ URL.revokeObjectURL(a.href); }, 4000);
      say('Exportiert: ' + name + ' – bitte im Eingangs-Ordner ablegen. Danach kann die Liste geleert werden.');
    });
  });
  clrBtn.addEventListener('click', function(){
    if (confirm('Alle gespeicherten Einträge in diesem Browser löschen?')) wipe(function(){ say('Liste geleert.'); render(); });
  });

  openDb(render);
})();
