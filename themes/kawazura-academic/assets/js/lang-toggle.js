// Section-preserving language switcher
// Hugo renders the correct hrefs via range .Site.Languages in the template,
// so this JS just handles the active state and smooth navigation.

(function () {
  'use strict';

  // Mark active nav link based on current path
  function setActiveNav() {
    var currentPath = window.location.pathname;
    var navLinks = document.querySelectorAll('.sidebar__nav a');
    navLinks.forEach(function (link) {
      var href = link.getAttribute('href');
      if (href === '/' || href === '/ja/') {
        // Home links: exact match or just the root
        if (currentPath === href) {
          link.classList.add('active');
        }
      } else {
        // Section links: match if current path starts with href
        if (href && currentPath.indexOf(href) === 0) {
          link.classList.add('active');
        }
      }
    });
  }

  // Mark active language button
  function setActiveLang() {
    var currentPath = window.location.pathname;
    var langBtns = document.querySelectorAll('.lang-btn');
    var isJa = currentPath.indexOf('/ja') === 0;
    langBtns.forEach(function (btn) {
      var lang = btn.getAttribute('data-lang');
      if ((lang === 'ja' && isJa) || (lang === 'en' && !isJa)) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    setActiveLang();
  });
})();
