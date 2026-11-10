/* alexfuchs.github.io – shared i18n, navigation, lightbox deck, reveal */
(function(){
  var d = document;

  var I18N = {
    de: {
      'nav-it': 'IT', 'nav-ai': 'AI', 'nav-eth': 'ETH', 'nav-brasil': 'Brasil',
      'nav-health': 'Health', 'nav-politik': 'Politik', 'nav-haeuser': 'Häuser', 'nav-saved': 'Lesezeichen',
      'title-home': 'Alex Fuchs · Naturwissenschafter ETH & IT Engineer',
      'title-it': 'Alex Fuchs · IT', 'title-ai': 'Alex Fuchs · AI',
      'title-eth': 'Alex Fuchs · Academic ETH', 'title-brasil': 'Alex Fuchs · Brasil',
      'title-health': 'Alex Fuchs · Health', 'title-politik': 'Alex Fuchs · Politik',
      'title-haeuser': 'Alex Fuchs · Häuser',
      'hero-sub': 'Naturwissenschafter ETH · IT Engineer · Zürich',
      'col1a': 'Naturwissenschaftliche Ausbildung mit', 'col1b': 'Schwerpunkt auf Analyse und Methode',
      'col1c': '– das Fundament für einen analytischen Blick auf Technologie, Daten und Systeme.',
      'col2a': 'Technische Kundenberatung,', 'col2b': 'Proof-of-Concepts und Produktpräsentationen',
      'col2c': 'zur Unterstützung des Verkaufs bei komplexen IT-Infrastrukturprojekten.',
      'col3a': 'Konzeption, Entwicklung und Betrieb von', 'col3b': 'Webapplikationen im E-Banking',
      'col3c': 'sowie Webservices für sämtliche Bankapplikationen. Verantwortung für Architektur, Sicherheit und Weiterentwicklung der Webengineering-Plattform.',
      'quote1': '«In den Bergen findet der Kopf zurück, was der Bildschirm ihm nimmt: Weite, Klarheit und Perspektive.»',
      'cite1': 'Ausgleich für Geist und Gesundheit',
      'quote2': '«Säntis und Alpstein – die Bergwelt vor der Haustür.»',
      'cite2': 'Alpstein · Appenzell',
      'foot-kicker': 'Kontakt',
      'copyright': 'COPYRIGHT © 2026 ALEX FUCHS · ALL RIGHTS RESERVED  |  FOTOS: WIKIMEDIA COMMONS – GILES LAURENT, JEAN SCHMITT, OLI, ARNE MÜSELER, ANK KUMAR, BENGT-RE, LEONHARD LENZ, NOIRLAB/NSF/AURA/T. SLOVINSKÝ (CC BY-SA / CC BY / CC0)',
      'p-it': 'IT',
      'it-lead': '25 Jahre zwischen Architektur, Entwicklung und Betrieb.',
      'it-s1h': 'DevOps & System Engineering',
      'it-s1p': 'DevOps, System Engineering und Webengineering gehören für mich zusammen: Konzeption, Entwicklung und Betrieb aus einer Hand – von der Idee bis zur stabilen Plattform.',
      'it-s2h': 'Sun Microsystems · 1998–2005',
      'it-s2p': 'Presales Engineer für Hardware- und Softwarelösungen: technische Kundenberatung, Proof-of-Concepts und Produktpräsentationen bei komplexen IT-Infrastrukturprojekten.',
      'it-s3h': 'ZKB · 2005–2025',
      'it-s3p': 'Senior System Engineer Webengineering: Konzeption, Entwicklung und Betrieb von Webapplikationen im E-Banking sowie Webservices für sämtliche Bankapplikationen – Verantwortung für Architektur, Sicherheit und Weiterentwicklung der Webengineering-Plattform.',
      'p-ai': 'AI',
      'ai-lead': 'Künstliche Intelligenz als Werkzeug von morgen.',
      'ai-s1h': 'Modelle & Automatisierung',
      'ai-s1p': 'Sprachmodelle, Automatisierung und datengetriebene Entscheidungen: Ich setze KI praktisch ein – vom Prompt bis zur Pipeline.',
      'ai-s2h': 'Eigenversuch statt Hype',
      'ai-s2p': 'Modelle selbst betreiben, Grenzen ausloten, Werkzeuge kritisch prüfen: Was hilft, bleibt. Was nur glänzt, geht.',
      'ai-s3h': 'Verantwortung',
      'ai-s3p': 'Datenschutz, Transparenz und Verantwortung gehören für mich zur KI dazu – Technologie muss dem Menschen dienen.',
      'p-eth': 'Academic ETH',
      'eth-lead': 'Naturwissenschafter, ETH Zürich.',
      'eth-s1h': 'Master of Science, 1997',
      'eth-s1p': 'Naturwissenschaftliche Ausbildung an der ETH Zürich: Analyse, Methode und Präzision als Fundament jeder Aufgabe.',
      'eth-s2h': 'Analytischer Blick',
      'eth-s2p': 'Das naturwissenschaftliche Denken prägt bis heute, wie ich Technologie, Daten und Systeme betrachte: genau, methodisch, offen.',
      'p-brasil': 'Brasil',
      'br-lead': 'Eine herzliche Verbindung zwischen Zürich und Südamerika.',
      'br-s1h': 'Musik & Kultur',
      'br-s1p': 'Brasilianische Musik und Kultur sind Teil meines Lebens: Rhythmus, Lebensfreude und Warmherzigkeit.',
      'br-s2h': 'Sprache',
      'br-s2p': 'Portugiesisch verbindet: Sprache öffnet Türen, Herzen und Horizonte.',
      'p-health': 'Health',
      'he-lead': 'Gesundheit ist Kapital.',
      'he-s1h': 'Ausdauer & Bewegung',
      'he-s1p': 'Ausdauer, bewusste Ernährung und Bewegung im Alltag halten Kopf und Körper im Gleichgewicht.',
      'he-s2h': 'Berge als Ausgleich',
      'he-s2p': 'Die Alpen sind mein natürliches Gegenstück zum Bildschirm: Weite, Klarheit und Perspektive.',
      'p-politik': 'Politik',
      'po-lead': 'Engagement für das Gemeinwesen.',
      'po-s1h': 'Informiert & kritisch',
      'po-s1p': 'Ich verfolge Gesellschaft und Politik informiert, kritisch und konstruktiv – mit einem offenen Blick für das Gemeinwesen.',
      'po-s2h': 'Gestalten',
      'po-s2p': 'Politik beginnt im Alltag: zuhören, mitdenken, mitgestalten.',
      'p-haeuser': 'Häuser',
      'p-saved': 'Lesezeichen', 'p-saved-lead': 'Gespeicherte Beiträge aus Reddit – kuratiert nach Themen.',
      'houses-lead': 'Drei Liegenschaften – gepflegt, vermietet und mit Liebe zum Detail. Bild anklicken: mit den Pfeilen ← → durch die ganze Bilderserie blättern.',
      'house-1': 'Haus 1',
      'loc-ff21': '32 Bilder',
      'house-2': 'Haus 2',
      'loc-ff23': '25 Bilder',
      'house-3': 'Haus 3',
      'loc-ww': '8 Bilder'
    },
    en: {
      'nav-it': 'IT', 'nav-ai': 'AI', 'nav-eth': 'ETH', 'nav-brasil': 'Brasil',
      'nav-health': 'Health', 'nav-politik': 'Politics', 'nav-haeuser': 'Houses', 'nav-saved': 'Saved',
      'title-home': 'Alex Fuchs · Natural Scientist ETH & IT Engineer',
      'title-it': 'Alex Fuchs · IT', 'title-ai': 'Alex Fuchs · AI',
      'title-eth': 'Alex Fuchs · Academic ETH', 'title-brasil': 'Alex Fuchs · Brasil',
      'title-health': 'Alex Fuchs · Health', 'title-politik': 'Alex Fuchs · Politics',
      'title-haeuser': 'Alex Fuchs · Houses',
      'hero-sub': 'Natural Scientist ETH · IT Engineer · Zurich',
      'col1a': 'A natural-scientific education with', 'col1b': 'a focus on analysis and method',
      'col1c': '– the foundation for an analytical view of technology, data and systems.',
      'col2a': 'Technical customer consulting,', 'col2b': 'proofs-of-concept and product presentations',
      'col2c': 'supporting sales in complex IT infrastructure projects.',
      'col3a': 'Design, development and operation of', 'col3b': 'e-banking web applications',
      'col3c': 'and web services for all banking applications. Responsible for architecture, security and the ongoing development of the web engineering platform.',
      'quote1': '«In the mountains, the mind recovers what the screen takes from it: space, clarity and perspective.»',
      'cite1': 'Balance for mind and health',
      'quote2': '«Säntis and the Alpstein – the alpine world on your doorstep.»',
      'cite2': 'Alpstein · Appenzell',
      'foot-kicker': 'Contact',
      'copyright': 'COPYRIGHT © 2026 ALEX FUCHS · ALL RIGHTS RESERVED  |  PHOTOS: WIKIMEDIA COMMONS – GILES LAURENT, JEAN SCHMITT, OLI, ARNE MÜSELER, ANK KUMAR, BENGT-RE, LEONHARD LENZ, NOIRLAB/NSF/AURA/T. SLOVINSKÝ (CC BY-SA / CC BY / CC0)',
      'p-it': 'IT',
      'it-lead': '25 years between architecture, development and operations.',
      'it-s1h': 'DevOps & System Engineering',
      'it-s1p': 'DevOps, system engineering and web engineering belong together for me: design, development and operations from a single source – from the idea to a stable platform.',
      'it-s2h': 'Sun Microsystems · 1998–2005',
      'it-s2p': 'Presales engineer for hardware and software solutions: technical customer consulting, proofs-of-concept and product presentations in complex IT infrastructure projects.',
      'it-s3h': 'ZKB · 2005–2025',
      'it-s3p': 'Senior system engineer web engineering: design, development and operation of e-banking web applications and web services for all banking applications – responsible for architecture, security and the ongoing development of the web engineering platform.',
      'p-ai': 'AI',
      'ai-lead': 'Artificial intelligence as the tool of tomorrow.',
      'ai-s1h': 'Models & automation',
      'ai-s1p': 'Language models, automation and data-driven decisions: I use AI in practice – from prompt to pipeline.',
      'ai-s2h': 'Hands-on instead of hype',
      'ai-s2p': 'Running models yourself, probing limits, examining tools critically: what helps, stays. What merely shines, goes.',
      'ai-s3h': 'Responsibility',
      'ai-s3p': 'Privacy, transparency and responsibility are part of AI for me – technology must serve people.',
      'p-eth': 'Academic ETH',
      'eth-lead': 'Natural scientist, ETH Zurich.',
      'eth-s1h': 'Master of Science, 1997',
      'eth-s1p': 'A natural-scientific education at ETH Zurich: analysis, method and precision as the foundation of every task.',
      'eth-s2h': 'An analytical view',
      'eth-s2p': 'Scientific thinking still shapes how I look at technology, data and systems today: precise, methodical, open.',
      'p-brasil': 'Brasil',
      'br-lead': 'A warm connection between Zurich and South America.',
      'br-s1h': 'Music & culture',
      'br-s1p': 'Brazilian music and culture are part of my life: rhythm, joy and warmth.',
      'br-s2h': 'Language',
      'br-s2p': 'Portuguese connects: language opens doors, hearts and horizons.',
      'p-health': 'Health',
      'he-lead': 'Health is capital.',
      'he-s1h': 'Endurance & movement',
      'he-s1p': 'Endurance, mindful nutrition and everyday movement keep mind and body in balance.',
      'he-s2h': 'Mountains as a counterweight',
      'he-s2p': 'The Alps are my natural counterpart to the screen: space, clarity and perspective.',
      'p-politik': 'Politics',
      'po-lead': 'Commitment to the common good.',
      'po-s1h': 'Informed & critical',
      'po-s1p': 'I follow society and politics informed, critical and constructive – with an open mind for the community.',
      'po-s2h': 'Shaping things',
      'po-s2p': 'Politics starts in everyday life: listening, thinking along, helping shape.',
      'p-haeuser': 'Houses',
      'p-saved': 'Saved', 'p-saved-lead': 'Saved posts from Reddit – curated by topic.',
      'houses-lead': 'Three properties – well kept, rented and maintained with attention to detail. Click a photo: use the ← → arrows to browse the whole series.',
      'house-1': 'House 1',
      'loc-ff21': '32 photos',
      'house-2': 'House 2',
      'loc-ff23': '25 photos',
      'house-3': 'House 3',
      'loc-ww': '8 photos'
    },
    pt: {
      'nav-it': 'TI', 'nav-ai': 'IA', 'nav-eth': 'ETH', 'nav-brasil': 'Brasil',
      'nav-health': 'Saúde', 'nav-politik': 'Política', 'nav-haeuser': 'Casas', 'nav-saved': 'Salvos',
      'title-home': 'Alex Fuchs · Cientista Natural ETH & Engenheiro de TI',
      'title-it': 'Alex Fuchs · TI', 'title-ai': 'Alex Fuchs · IA',
      'title-eth': 'Alex Fuchs · ETH Acadêmica', 'title-brasil': 'Alex Fuchs · Brasil',
      'title-health': 'Alex Fuchs · Saúde', 'title-politik': 'Alex Fuchs · Política',
      'title-haeuser': 'Alex Fuchs · Casas',
      'hero-sub': 'Cientista Natural ETH · Engenheiro de TI · Zurique',
      'col1a': 'Formação em ciências naturais com', 'col1b': 'foco em análise e método',
      'col1c': '– a base para um olhar analítico sobre tecnologia, dados e sistemas.',
      'col2a': 'Consultoria técnica ao cliente,', 'col2b': 'provas de conceito e apresentações de produtos',
      'col2c': 'apoiando as vendas em projetos complexos de infraestrutura de TI.',
      'col3a': 'Conceção, desenvolvimento e operação de', 'col3b': 'aplicações web de e-banking',
      'col3c': 'e webservices para todas as aplicações do banco. Responsável pela arquitetura, segurança e evolução da plataforma de web engineering.',
      'quote1': '«Nas montanhas, a mente recupera o que a tela lhe tira: amplitude, clareza e perspectiva.»',
      'cite1': 'Equilíbrio para mente e saúde',
      'quote2': '«Säntis e o Alpstein – o mundo alpino à porta de casa.»',
      'cite2': 'Alpstein · Appenzell',
      'foot-kicker': 'Contato',
      'copyright': 'COPYRIGHT © 2026 ALEX FUCHS · TODOS OS DIREITOS RESERVADOS  |  FOTOS: WIKIMEDIA COMMONS – GILES LAURENT, JEAN SCHMITT, OLI, ARNE MÜSELER, ANK KUMAR, BENGT-RE, LEONHARD LENZ, NOIRLAB/NSF/AURA/T. SLOVINSKÝ (CC BY-SA / CC BY / CC0)',
      'p-it': 'TI',
      'it-lead': '25 anos entre arquitetura, desenvolvimento e operação.',
      'it-s1h': 'DevOps & Engenharia de Sistemas',
      'it-s1p': 'DevOps, engenharia de sistemas e engenharia web formam um conjunto: conceção, desenvolvimento e operação numa só mão – da ideia à plataforma estável.',
      'it-s2h': 'Sun Microsystems · 1998–2005',
      'it-s2p': 'Presales engineer para soluções de hardware e software: consultoria técnica, provas de conceito e apresentações de produtos em projetos complexos de infraestrutura de TI.',
      'it-s3h': 'ZKB · 2005–2025',
      'it-s3p': 'Engenheiro de sistemas sénior de web engineering: conceção, desenvolvimento e operação de aplicações web de e-banking e webservices para todas as aplicações do banco – responsável pela arquitetura, segurança e evolução da plataforma.',
      'p-ai': 'IA',
      'ai-lead': 'Inteligência artificial como a ferramenta do futuro.',
      'ai-s1h': 'Modelos & automação',
      'ai-s1p': 'Modelos de linguagem, automação e decisões baseadas em dados: uso a IA na prática – do prompt ao pipeline.',
      'ai-s2h': 'Experiência própria em vez de hype',
      'ai-s2p': 'Operar modelos, testar limites, avaliar ferramentas com espírito crítico: o que ajuda fica. O que só brilha, vai embora.',
      'ai-s3h': 'Responsabilidade',
      'ai-s3p': 'Privacidade, transparência e responsabilidade fazem parte da IA – a tecnologia deve servir as pessoas.',
      'p-eth': 'ETH Acadêmica',
      'eth-lead': 'Cientista natural, ETH Zurique.',
      'eth-s1h': 'Master of Science, 1997',
      'eth-s1p': 'Formação em ciências naturais na ETH Zurique: análise, método e precisão como base de cada tarefa.',
      'eth-s2h': 'Olhar analítico',
      'eth-s2p': 'O pensamento científico molda até hoje meu olhar sobre tecnologia, dados e sistemas: preciso, metódico, aberto.',
      'p-brasil': 'Brasil',
      'br-lead': 'Um vínculo caloroso entre Zurique e a América do Sul.',
      'br-s1h': 'Música & cultura',
      'br-s1p': 'A música e a cultura brasileiras fazem parte da minha vida: ritmo, alegria de viver e calor humano.',
      'br-s2h': 'Idioma',
      'br-s2p': 'O português conecta: o idioma abre portas, corações e horizontes.',
      'p-health': 'Saúde',
      'he-lead': 'Saúde é capital.',
      'he-s1h': 'Resistência & movimento',
      'he-s1p': 'Resistência, alimentação consciente e movimento no dia a dia mantêm mente e corpo em equilíbrio.',
      'he-s2h': 'As montanhas como contrapeso',
      'he-s2p': 'Os Alpes são o meu contraponto natural à tela: amplitude, clareza e perspectiva.',
      'p-politik': 'Política',
      'po-lead': 'Engajamento pelo bem comum.',
      'po-s1h': 'Informado & crítico',
      'po-s1p': 'Acompanho a sociedade e a política de forma informada, crítica e construtiva – com um olhar aberto para o bem comum.',
      'po-s2h': 'Construir',
      'po-s2p': 'A política começa no dia a dia: ouvir, pensar junto, participar.',
      'p-haeuser': 'Casas',
      'p-saved': 'Salvos', 'p-saved-lead': 'Posts salvos do Reddit – organizados por tema.',
      'houses-lead': 'Três imóveis – bem cuidados, alugados e com atenção ao detalhe. Clique numa foto: use as setas ← → para navegar por toda a série.',
      'house-1': 'Casa 1',
      'loc-ff21': '32 fotos',
      'house-2': 'Casa 2',
      'loc-ff23': '25 fotos',
      'house-3': 'Casa 3',
      'loc-ww': '8 fotos'
    }
  };

  function setLang(l){
    if (!I18N[l]) l = 'de';
    d.documentElement.lang = l;
    d.querySelectorAll('[data-i18n]').forEach(function(el){
      var t = I18N[l][el.getAttribute('data-i18n')];
      if (t != null) el.textContent = t;
    });
    d.querySelectorAll('.lang').forEach(function(b){
      b.classList.toggle('on', b.getAttribute('data-lang') === l);
    });
    try { localStorage.setItem('af-lang', l); } catch (e) {}
  }
  d.querySelectorAll('.lang').forEach(function(b){
    b.addEventListener('click', function(){ setLang(b.getAttribute('data-lang')); });
  });
  var saved = 'de';
  try { saved = localStorage.getItem('af-lang') || 'de'; } catch (e) {}
  setLang(saved);

  // Menü
  var head = d.querySelector('.site-head'), btn = d.querySelector('.menu-btn');
  if (btn) {
    btn.addEventListener('click', function(){
      var open = head.classList.toggle('menu-open');
      btn.setAttribute('aria-expanded', open);
    });
    d.querySelectorAll('.nav a').forEach(function(a){
      a.addEventListener('click', function(){ head.classList.remove('menu-open'); btn.setAttribute('aria-expanded', false); });
    });
  }

  // Lightbox mit Slide-Deck (nur Häuser-Seite)
  var lb = d.querySelector('.lightbox');
  if (lb) {
    var lbImg = lb.querySelector('img'), lbCount = lb.querySelector('.lb-count'),
        lbPrev = lb.querySelector('.lb-prev'), lbNext = lb.querySelector('.lb-next'),
        deck = [], deckIdx = 0, deckBase = '';
    function show(i){
      deckIdx = (i + deck.length) % deck.length;
      lbImg.src = deckBase + deck[deckIdx];
      lbCount.textContent = (deckIdx + 1) + ' / ' + deck.length;
      [ (deckIdx+1) % deck.length, (deckIdx-1+deck.length) % deck.length ]
        .forEach(function(j){ var p = new Image(); p.src = deckBase + deck[j]; });
    }
    function openDeck(house, startFile){
      var h = d.querySelector('.house[data-house="' + house + '"]');
      deck = h.getAttribute('data-files').split(',');
      deckBase = 'assets/img/houses/' + house + '/';
      var at = deck.indexOf(startFile); if (at < 0) at = 0;
      show(at);
      lb.hidden = false;
    }
    d.querySelectorAll('.gi').forEach(function(a){
      a.addEventListener('click', function(e){
        e.preventDefault();
        openDeck(a.closest('.house').getAttribute('data-house'), a.getAttribute('data-file'));
      });
    });
    lbPrev.addEventListener('click', function(e){ e.stopPropagation(); show(deckIdx - 1); });
    lbNext.addEventListener('click', function(e){ e.stopPropagation(); show(deckIdx + 1); });
    lbImg.addEventListener('click', function(e){ e.stopPropagation(); show(deckIdx + 1); });
    function close(){ lb.hidden = true; lbImg.removeAttribute('src'); deck = []; }
    lb.addEventListener('click', close);
    d.addEventListener('keydown', function(e){
      if (lb.hidden) return;
      if (e.key === 'Escape') close();
      else if (e.key === 'ArrowLeft') show(deckIdx - 1);
      else if (e.key === 'ArrowRight') show(deckIdx + 1);
    });
  }

  // Reveal
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(en){ if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); } });
    }, {threshold:.15});
    d.querySelectorAll('.reveal').forEach(function(el){ io.observe(el); });
  } else {
    d.querySelectorAll('.reveal').forEach(function(el){ el.classList.add('in'); });
  }
})();
