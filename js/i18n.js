/**
 * Selector de idioma EN / ES del portafolio (JavaScript puro, sin librerías).
 *
 * - El HTML está escrito en inglés, que es el idioma por defecto: sin
 *   JavaScript, o en la primera visita, el sitio se ve en inglés.
 * - Los textos en español están en el objeto ES de este archivo. Las claves
 *   coinciden con los atributos data-i18n* del HTML.
 * - La elección se guarda en localStorage y se aplica en todas las páginas.
 * - Los textos se asignan con textContent y setAttribute, nunca con
 *   innerHTML, para no interpretar HTML.
 */
(function () {
  'use strict';

  var STORAGE_KEY = 'portfolio-lang';
  var DEFAULT_LANG = 'en';
  var SUPPORTED = ['en', 'es'];

  var ES = {
    'meta.home.title': 'Andrés Morales | Desarrollador Full Stack',
    'meta.home.description':
      'Andrés Morales, desarrollador Full Stack: React, Next.js, NestJS, Node.js y Flutter. Aplicaciones web y móviles en producción.',
    'meta.about.title': 'Sobre mí | Andrés Morales',
    'meta.about.description':
      'Conoce a Andrés Morales, ingeniero en Ciencias de la Computación y desarrollador Full Stack de aplicaciones web y móviles.',
    'meta.resume.title': 'Currículum | Andrés Morales',
    'meta.resume.description':
      'Currículum de Andrés Morales: experiencia como desarrollador Full Stack, estudios, certificaciones y habilidades técnicas.',

    'nav.label': 'Navegación principal',
    'nav.home': 'Inicio',
    'nav.about': 'Sobre mí',
    'nav.resume': 'Currículum',
    'nav.language': 'Idioma',

    'photo.alt': 'Foto de Andrés Morales',
    'footer.credits': 'Desarrollado por Andrés Morales',

    'home.title': 'Impulsa tus proyectos digitales',
    'home.titleHighlight': 'con soluciones Full Stack eficientes y modernas',
    'home.intro':
      'Soy Andrés Morales, desarrollador Full Stack especializado en React, Next.js, NestJS y Node.js. Creo aplicaciones web y móviles modernas, accesibles y funcionales que impulsan resultados reales.',
    'home.social': 'Accede a mis redes',

    'about.title': 'Sobre mí',
    'about.p1':
      'Soy Andrés Morales, ingeniero en Ciencias de la Computación y desarrollador Full Stack con experiencia en tecnologías como React, Next.js, NestJS, Node.js, Flutter, Java y Python. Me apasiona crear aplicaciones web funcionales, accesibles y bien estructuradas, combinando una buena experiencia de usuario con un backend sólido.',
    'about.p2':
      'Desde septiembre de 2025 trabajo como desarrollador Full Stack en una empresa de software, construyendo aplicaciones web y móviles en producción: backends con autenticación y tiempo real, integraciones con pagos y e-commerce, y mejoras de rendimiento que redujeron a la mitad el tiempo de carga de una aplicación.',
    'about.p3':
      'He trabajado en proyectos institucionales, educativos y de impacto social, aplicando metodologías ágiles y buenas prácticas de desarrollo. Disfruto aprender de forma autónoma y explorar nuevas tecnologías como la inteligencia artificial y blockchain.',
    'about.p4':
      'Mi enfoque siempre está en resolver problemas reales a través del código, colaborando con equipos multidisciplinarios y adaptándome a nuevos desafíos con responsabilidad y compromiso.',

    'resume.title': 'Currículum',
    'resume.summary':
      'Desarrollador Full Stack con experiencia en React, Next.js, NestJS, Node.js, Flutter y Python. Apasionado por crear soluciones web accesibles, funcionales y bien estructuradas. Me destaco por el aprendizaje autónomo, el uso de herramientas modernas y la aplicación de buenas prácticas de desarrollo en cada proyecto.',
    'resume.experience': 'Experiencia',
    'resume.job1.title': 'Desarrollador Full Stack - Empresa de software, Guayaquil (2025 - actualidad)',
    'resume.job1.description':
      'Desarrollo de backends con NestJS y Node.js (autenticación JWT, control de acceso por roles, verificación de identidad y tiempo real con SSE), interfaces web con React, Next.js y Three.js, y apps móviles con Flutter con geolocalización en tiempo real. Integraciones con Shopify, pasarela de pagos Nuvei y servicios de mapas.',
    'resume.job1.results':
      'Reduje a la mitad el tiempo de carga inicial de una aplicación, logré que el inicio de sesión cargue unas 3 veces más rápido y bajé el peso de las imágenes de más de 20 MB a menos de 5 MB migrando de PNG a WebP.',
    'resume.job2.title': 'Proyecto institucional - ESPOL / Ministerio de Telecomunicaciones (2022)',
    'resume.job2.description':
      'Aplicación web para autodiagnóstico de competencias digitales con diseño accesible.',
    'resume.job3.title': 'Prácticas profesionales - ESPOL (2021)',
    'resume.job3.description':
      'Desarrollo de prototipos UX/UI para sitio educativo infantil, priorizando accesibilidad y usabilidad.',
    'resume.education': 'Estudios y certificaciones',
    'resume.edu1.title': 'Oracle Next Education (ONE) – Oracle y Alura Latam (2025 - en curso)',
    'resume.edu1.description':
      'Ruta formativa enfocada en el desarrollo web, diseño front-end, Git/GitHub y técnicas de IA generativa.',
    'resume.edu2.description': 'Certificación oficial en fundamentos de la nube de Oracle (OCI).',
    'resume.edu3.title': 'Full Stack Open - Universidad de Helsinki (2024)',
    'resume.edu3.description':
      'Curso en línea de desarrollo web con React, Node.js, pruebas automatizadas y despliegue.',
    'resume.edu4.title': 'Ingeniería en Ciencias de la Computación - ESPOL (2022)',
    'resume.edu4.description':
      'Carrera universitaria enfocada en desarrollo de software, algoritmos y estructuras de datos.',
    'resume.skills': 'Habilidades técnicas',
    'resume.skills.frontend':
      'React.js, Next.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Zustand, Three.js, diseño responsive',
    'resume.skills.backend':
      'Node.js, NestJS, Express, Python, Java, Spring, C#, APIs REST, GraphQL, SSE, autenticación JWT',
    'resume.skills.databases': 'Bases de datos',
    'resume.skills.mobile': 'Móvil',
    'resume.skills.tools': 'Herramientas',
    'resume.skills.methodologies': 'Metodologías',
    'resume.skills.other': 'Otros',
    'resume.skills.otherList':
      'Docker, AWS, Oracle Cloud Infrastructure (OCI), IA generativa, análisis de requerimientos',
  };

  // Atributo del HTML → cómo se aplica la traducción
  var BINDINGS = [
    { attr: 'data-i18n', apply: function (el, text) { el.textContent = text; }, read: function (el) { return el.textContent.replace(/\s+/g, ' ').trim(); } },
    { attr: 'data-i18n-alt', apply: function (el, text) { el.setAttribute('alt', text); }, read: function (el) { return el.getAttribute('alt'); } },
    { attr: 'data-i18n-content', apply: function (el, text) { el.setAttribute('content', text); }, read: function (el) { return el.getAttribute('content'); } },
    { attr: 'data-i18n-aria-label', apply: function (el, text) { el.setAttribute('aria-label', text); }, read: function (el) { return el.getAttribute('aria-label'); } },
  ];

  // Textos originales en inglés, tomados del HTML para poder volver a ellos
  var EN = {};

  function collectEnglish() {
    BINDINGS.forEach(function (binding) {
      document.querySelectorAll('[' + binding.attr + ']').forEach(function (el) {
        EN[el.getAttribute(binding.attr)] = binding.read(el);
      });
    });
  }

  function readStoredLang() {
    try {
      var stored = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED.indexOf(stored) !== -1 ? stored : DEFAULT_LANG;
    } catch (e) {
      return DEFAULT_LANG; // almacenamiento no disponible
    }
  }

  function storeLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // Sin almacenamiento: el idioma solo dura esta página
    }
  }

  function applyLang(lang) {
    var dictionary = lang === 'es' ? ES : EN;

    BINDINGS.forEach(function (binding) {
      document.querySelectorAll('[' + binding.attr + ']').forEach(function (el) {
        var text = dictionary[el.getAttribute(binding.attr)];
        if (typeof text === 'string') binding.apply(el, text);
      });
    });

    document.documentElement.lang = lang;
    document.querySelectorAll('.lang-switcher__option').forEach(function (button) {
      var active = button.getAttribute('data-lang') === lang;
      button.setAttribute('aria-pressed', String(active));
      button.classList.toggle('lang-switcher__option--active', active);
    });
  }

  function init() {
    collectEnglish();
    applyLang(readStoredLang());

    document.querySelectorAll('.lang-switcher__option').forEach(function (button) {
      button.addEventListener('click', function () {
        var lang = button.getAttribute('data-lang');
        if (SUPPORTED.indexOf(lang) === -1) return;
        storeLang(lang);
        applyLang(lang);
      });
    });
  }

  init(); // El script se carga con "defer", así que el HTML ya está listo
})();
