(function () {
  'use strict';
  var d = document, b = d.body;

  /* Sticky header shadow */
  var header = d.querySelector('.site-header');
  if (header) {
    var stuck = false;
    var onScroll = function () {
      var s = window.scrollY > 8;
      if (s !== stuck) { stuck = s; header.classList.toggle('is-stuck', s); }
    };
    addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* Mobile drawer */
  var burger = d.querySelector('.burger');
  if (burger) {
    burger.addEventListener('click', function () {
      var open = b.classList.toggle('nav-open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
    d.querySelectorAll('.drawer a').forEach(function (a) {
      a.addEventListener('click', function () {
        b.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
      });
    });
    addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && b.classList.contains('nav-open')) {
        b.classList.remove('nav-open');
        burger.setAttribute('aria-expanded', 'false');
        burger.focus();
      }
    });
  }

  /* Drawer sub-menus */
  d.querySelectorAll('.drawer__toggle').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      var panel = d.getElementById(btn.getAttribute('aria-controls'));
      if (panel) panel.classList.toggle('is-open', !open);
    });
  });

  /* Accordion */
  d.querySelectorAll('.acc-btn').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var open = btn.getAttribute('aria-expanded') === 'true';
      var panel = d.getElementById(btn.getAttribute('aria-controls'));
      btn.setAttribute('aria-expanded', open ? 'false' : 'true');
      if (panel) panel.classList.toggle('is-open', !open);
    });
  });

  /* Hero slideshow */
  var slides = d.querySelectorAll('.hero__bg img');
  if (slides.length > 1 && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var i = 0;
    setInterval(function () {
      slides[i].classList.remove('is-active');
      i = (i + 1) % slides.length;
      slides[i].classList.add('is-active');
    }, 6000);
  }

  /* Scroll reveal + counters */
  var reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  var reveals = [].slice.call(d.querySelectorAll('[data-reveal]'));

  function revealAll() {
    reveals.forEach(function (el) { el.classList.remove('will-reveal'); });
  }

  // Only elements that start below the fold are hidden, and only once we know
  // the observer exists to bring them back. Everything else is already visible.
  if (!reduce && d.visibilityState === 'visible' && 'IntersectionObserver' in window) {
    var pending = reveals.filter(function (el) {
      return el.getBoundingClientRect().top > innerHeight * 0.9;
    });
    pending.forEach(function (el) { el.classList.add('will-reveal'); });

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        en.target.classList.add('is-in');
        io.unobserve(en.target);
      });
    }, { rootMargin: '0px 0px -6% 0px', threshold: 0.02 });
    pending.forEach(function (el) { io.observe(el); });

    // If the tab goes away mid-scroll the observer stops firing, so drop the
    // animation entirely rather than risk a blank section on return.
    d.addEventListener('visibilitychange', function () {
      if (d.visibilityState !== 'visible') revealAll();
    });
  }

  /* Counters. The final value already sits in the HTML, so it is correct with
     JS off and in throttled background tabs. We only count up when visible. */
  if ('IntersectionObserver' in window) {
    var co = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        var el = en.target, to = parseFloat(el.dataset.count) || 0;
        co.unobserve(el);
        if (reduce || d.visibilityState !== 'visible') return;
        var t0 = null, dur = 1500;
        var step = function (ts) {
          if (!t0) t0 = ts;
          var p = Math.min((ts - t0) / dur, 1);
          var e = 1 - Math.pow(1 - p, 3);
          el.textContent = Math.round(to * e).toLocaleString();
          if (p < 1 && d.visibilityState === 'visible') requestAnimationFrame(step);
          else el.textContent = to.toLocaleString();
        };
        el.textContent = '0';
        requestAnimationFrame(step);
      });
    }, { threshold: 0.4 });
    d.querySelectorAll('[data-count]').forEach(function (el) { co.observe(el); });
  }

  /* Mobile action bar reveal */
  var bar = d.querySelector('.actionbar');
  if (bar) {
    var last = 0;
    addEventListener('scroll', function () {
      var y = window.scrollY;
      bar.classList.toggle('is-visible', y > 260 && y < last + 4);
      last = y;
    }, { passive: true });
  }

  /* Contact form -> pre-composed email (no backend, always works) */
  d.querySelectorAll('form[data-mailto]').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var f = new FormData(form);
      var name = ((f.get('first') || '') + ' ' + (f.get('last') || '')).trim();
      var lines = [
        'Name: ' + name,
        'Email: ' + (f.get('email') || ''),
        'Phone: ' + (f.get('phone') || ''),
        f.get('subject') ? 'Enquiry: ' + f.get('subject') : '',
        '',
        (f.get('message') || '')
      ].filter(Boolean);
      var subject = 'Website enquiry' + (name ? ' from ' + name : '');
      location.href = 'mailto:' + form.dataset.mailto +
        '?subject=' + encodeURIComponent(subject) +
        '&body=' + encodeURIComponent(lines.join('\n'));
      var note = form.querySelector('.form__status');
      if (note) note.textContent = 'Opening your email app… If nothing happens, write to sales@richmotor.com or message us on WhatsApp.';
    });
  });

  /* Current year */
  d.querySelectorAll('[data-year]').forEach(function (el) { el.textContent = new Date().getFullYear(); });
})();
