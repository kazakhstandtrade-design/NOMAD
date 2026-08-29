/* ==========================================================================
   Qauipsiz Sailau — site scripts
   Разделы: навигация, FAQ-аккордеон, scroll-reveal, имитация регистрации
   по email (без бэкенда — код показывается прямо в интерфейсе) и 3D-эмблема.
========================================================================== */

/* ---------- mobile nav ---------- */
(function () {
  const toggle = document.getElementById('navToggle');
  const nav = document.getElementById('mainNav');
  if (!toggle || !nav) return;
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('mobile-open');
    toggle.setAttribute('aria-expanded', String(isOpen));
    nav.style.display = isOpen ? 'flex' : '';
    if (isOpen) {
      nav.style.position = 'absolute';
      nav.style.top = '74px';
      nav.style.left = '0';
      nav.style.right = '0';
      nav.style.flexDirection = 'column';
      nav.style.background = '#0a2438';
      nav.style.padding = '18px 24px';
      nav.style.gap = '14px';
      nav.style.borderBottom = '1px solid #1d3a4f';
    }
  });
  nav.querySelectorAll('a').forEach((a) =>
    a.addEventListener('click', () => {
      nav.classList.remove('mobile-open');
      nav.removeAttribute('style');
      toggle.setAttribute('aria-expanded', 'false');
    })
  );
})();

/* ---------- scroll reveal ---------- */
(function () {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || items.length === 0) {
    items.forEach((el) => el.classList.add('in-view'));
    return;
  }
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );
  items.forEach((el) => observer.observe(el));
})();

/* ---------- FAQ accordion ---------- */
(function () {
  document.querySelectorAll('.faq-item').forEach((item) => {
    const btn = item.querySelector('.faq-question');
    btn.addEventListener('click', () => {
      const wasOpen = item.classList.contains('open');
      item.parentElement.querySelectorAll('.faq-item.open').forEach((other) => {
        if (other !== item) other.classList.remove('open');
      });
      item.classList.toggle('open', !wasOpen);
    });
  });
})();

/* ---------- registration modal (simulated email verification) ----------
   В отсутствие бэкенда реальная отправка письма невозможна — поэтому
   демонстрационный код генерируется на клиенте и показывается прямо в
   интерфейсе с явной пометкой "демо-режим". В боевой версии это место
   заменяется вызовом API, отправляющим письмо через почтовый сервис.
============================================================================ */
(function () {
  const overlay = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');
  const stepEmail = document.getElementById('modalStepEmail');
  const stepCode = document.getElementById('modalStepCode');
  const stepDone = document.getElementById('modalStepDone');

  const emailInput = document.getElementById('emailInput');
  const emailError = document.getElementById('emailError');
  const sendCodeBtn = document.getElementById('sendCodeBtn');

  const codeEmailLabel = document.getElementById('codeEmailLabel');
  const demoCodeDisplay = document.getElementById('demoCodeDisplay');
  const codeInput = document.getElementById('codeInput');
  const codeError = document.getElementById('codeError');
  const verifyCodeBtn = document.getElementById('verifyCodeBtn');

  const doneEmailLabel = document.getElementById('doneEmailLabel');
  const modalDoneBtn = document.getElementById('modalDoneBtn');

  let generatedCode = '';
  let currentEmail = '';

  function showStep(step) {
    [stepEmail, stepCode, stepDone].forEach((s) => (s.hidden = true));
    step.hidden = false;
  }

  function resetModal() {
    showStep(stepEmail);
    emailInput.value = '';
    emailError.textContent = '';
    codeInput.value = '';
    codeError.textContent = '';
    generatedCode = '';
    currentEmail = '';
  }

  function openModal() {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    setTimeout(() => emailInput.focus(), 100);
  }

  function closeModal() {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
    setTimeout(resetModal, 200);
  }

  ['registerBtn', 'heroRegisterBtn', 'ctaRegisterBtn', 'loginBtn', 'howHelpBtn'].forEach((id) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      if (id === 'howHelpBtn') {
        document.getElementById('help').scrollIntoView({ behavior: 'smooth' });
        return;
      }
      openModal();
    });
  });

  closeBtn.addEventListener('click', closeModal);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeModal();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && overlay.classList.contains('open')) closeModal();
  });

  function isValidEmail(value) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  }

  sendCodeBtn.addEventListener('click', () => {
    const value = emailInput.value.trim();
    emailError.textContent = '';
    if (!isValidEmail(value)) {
      emailError.textContent = 'Введите корректный адрес электронной почты.';
      return;
    }
    currentEmail = value;
    generatedCode = String(Math.floor(100000 + Math.random() * 900000));
    codeEmailLabel.textContent = currentEmail;
    demoCodeDisplay.textContent = generatedCode;
    showStep(stepCode);
    setTimeout(() => codeInput.focus(), 100);
  });

  verifyCodeBtn.addEventListener('click', () => {
    codeError.textContent = '';
    if (codeInput.value.trim() !== generatedCode) {
      codeError.textContent = 'Неверный код. Проверьте и попробуйте снова.';
      return;
    }
    doneEmailLabel.textContent = currentEmail;
    showStep(stepDone);
  });

  modalDoneBtn.addEventListener('click', closeModal);
})();

/* ---------- 3D emblem (Three.js) ----------
   Стилизованная золотая эмблема (солнечные лучи + кольцо-шанырак),
   отсылающая к государственной символике. Статична, если у пользователя
   включена настройка "меньше анимации".
============================================================================ */
(function () {
  const canvas = document.getElementById('emblemCanvas');
  const wrap = canvas ? canvas.parentElement : null;
  if (!canvas || !wrap || typeof THREE === 'undefined') return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0.4, 6.2);

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));

  const goldMat = new THREE.MeshStandardMaterial({ color: 0xd7a83a, metalness: 0.55, roughness: 0.32, emissive: 0x3a2606, emissiveIntensity: 0.4 });
  const azureMat = new THREE.MeshStandardMaterial({ color: 0x00aecb, metalness: 0.3, roughness: 0.4, emissive: 0x012028, emissiveIntensity: 0.5 });

  const group = new THREE.Group();
  scene.add(group);

  // Кольцо — стилизованный шанырак (купол юрты)
  const ring = new THREE.Mesh(new THREE.TorusGeometry(1.9, 0.09, 24, 96), goldMat);
  group.add(ring);

  const ringInner = new THREE.Mesh(new THREE.TorusGeometry(1.35, 0.05, 20, 96), azureMat);
  group.add(ringInner);

  // Центральное солнце
  const sun = new THREE.Mesh(new THREE.SphereGeometry(0.62, 32, 32), goldMat);
  group.add(sun);

  // Лучи солнца
  const rayCount = 12;
  for (let i = 0; i < rayCount; i++) {
    const ray = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 0.85, 8), goldMat);
    const angle = (i / rayCount) * Math.PI * 2;
    const radius = 1.05;
    ray.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
    ray.rotation.z = angle + Math.PI / 2;
    group.add(ray);
  }

  // Спицы кольца (крестовина, напоминающая перекрытие шанырака)
  for (let i = 0; i < 4; i++) {
    const spoke = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, 3.6, 8), azureMat);
    spoke.rotation.z = (i / 4) * Math.PI;
    group.add(spoke);
  }

  scene.add(new THREE.AmbientLight(0xffffff, 0.55));
  const key = new THREE.PointLight(0xf0c65a, 1.4, 20);
  key.position.set(4, 3, 5);
  scene.add(key);
  const fill = new THREE.PointLight(0x00aecb, 0.9, 20);
  fill.position.set(-4, -2, 3);
  scene.add(fill);

  function resize() {
    const size = wrap.clientWidth;
    if (!size) return;
    renderer.setSize(size, size, false);
    camera.aspect = 1;
    camera.updateProjectionMatrix();
  }
  window.addEventListener('resize', resize);
  resize();

  group.rotation.x = 0.35;

  function renderStatic() {
    renderer.render(scene, camera);
  }

  if (reduceMotion) {
    renderStatic();
    return;
  }

  function animate() {
    group.rotation.z += 0.0035;
    group.rotation.y += 0.0016;
    renderer.render(scene, camera);
    requestAnimationFrame(animate);
  }
  animate();
})();
