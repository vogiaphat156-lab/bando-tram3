
const masonry = document.getElementById('masonry');
const filters = [...document.querySelectorAll('.filter')];
const countLabel = document.getElementById('gallery-count');
const lightbox = document.getElementById('lightbox');

let artworks = [];
let activeFilter = 'all';
let lastFocusedElement = null;
let revealObserver = null;

const prefersReducedMotion = window.matchMedia(
  '(prefers-reduced-motion: reduce)'
).matches;

// BẬT HIỆU ỨNG CUỘN
if (!prefersReducedMotion) {
  document.documentElement.classList.add('has-motion');
}

// ĐƯỜNG DẪN ẢNH
function assetUrl(path) {
  return new URL(path, document.baseURI).href;
}

// QUAN SÁT NỘI DUNG KHI CUỘN
function observeElements(elements) {
  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    elements.forEach(element => element.classList.add('is-visible'));
    return;
  }

  if (!revealObserver) {
    revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px 0px 100px 0px',
      threshold: 0.05
    });
  }

  elements.forEach(element => revealObserver.observe(element));
}

// KÍCH HOẠT HIỆU ỨNG CÁC KHU VỰC
function initializeReveal() {
  observeElements([
    ...document.querySelectorAll('[data-reveal]')
  ]);
}

// TẢI DANH SÁCH TÁC PHẨM
async function loadArtworks() {
  try {
    const response = await fetch(
      assetUrl('images.json'),
      { cache: 'no-cache' }
    );

    if (!response.ok) {
      throw new Error(
        `Danh sách ảnh không tải được (HTTP ${response.status}).`
      );
    }

    const data = await response.json();

    if (!Array.isArray(data)) {
      throw new Error('images.json cần chứa một danh sách tác phẩm.');
    }

    artworks = data.filter(
      item => item && item.src && item.title
    );

    renderGallery();

  } catch (error) {
    masonry.replaceChildren();

    const message = document.createElement('p');
    message.className = 'notice';
    message.textContent =
      `Không thể hiển thị bộ sưu tập. ${error.message}`;

    masonry.append(message);
    countLabel.textContent = '';

  } finally {
    masonry.setAttribute('aria-busy', 'false');
  }
}

// TẠO THẺ TÁC PHẨM
function createArtworkCard(item, index) {
  const card = document.createElement('button');

  card.type = 'button';
  card.className = 'art-card';

  card.setAttribute(
    'aria-label',
    `Xem tác phẩm: ${item.title}`
  );

  const image = document.createElement('img');

  image.className = 'art-image';
  image.src = assetUrl(item.src);
  image.alt = item.alt || item.title;
  image.loading = 'lazy';
  image.decoding = 'async';
  image.width = 800;

  if (item.ratio === 'tall') {
    image.height = 1100;
  } else if (item.ratio === 'wide') {
    image.height = 600;
  } else {
    image.height = 850;
  }

  const copy = document.createElement('span');
  copy.className = 'card-copy';

  const group = document.createElement('span');
  group.className = 'card-meta';
  group.textContent = item.group || 'Tác phẩm từ gạo';

  const title = document.createElement('span');
  title.className = 'card-title';
  title.textContent = item.title;

  const caption = document.createElement('span');
  caption.className = 'card-caption';
  caption.textContent = item.caption || '';

  copy.append(group, title);

  if (item.caption) {
    copy.append(caption);
  }

  card.append(image, copy);

  card.style.setProperty(
    '--reveal-delay',
    `${(index % 3) * 70}ms`
  );

  card.addEventListener('click', () => {
    openLightbox(item, card);
  });

  return card;
}

// HIỂN THỊ BỘ SƯU TẬP
function renderGallery() {
  const shown = activeFilter === 'all'
    ? artworks
    : artworks.filter(item => item.group === activeFilter);

  // Ngừng theo dõi các thẻ cũ
  if (revealObserver) {
    revealObserver.disconnect();
  }

  masonry.replaceChildren();

  const fragment = document.createDocumentFragment();

  shown.forEach((item, index) => {
    fragment.append(
      createArtworkCard(item, index)
    );
  });

  masonry.append(fragment);

  countLabel.textContent = `${shown.length} tác phẩm`;

  masonry.setAttribute('aria-busy', 'false');

  // Kích hoạt hiệu ứng cho ảnh mới
  observeElements([
    ...masonry.querySelectorAll('.art-card')
  ]);
}

// BỘ LỌC
filters.forEach(button => {
  button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;

    filters.forEach(filter => {
      const selected = filter === button;

      filter.classList.toggle('is-active', selected);

      filter.setAttribute(
        'aria-pressed',
        String(selected)
      );
    });

    renderGallery();
  });
});

// MỞ ẢNH
function openLightbox(item, trigger) {
  lastFocusedElement = trigger;

  const image = document.getElementById('lightbox-image');

  image.src = assetUrl(item.src);
  image.alt = item.alt || item.title;

  document.getElementById('lightbox-title').textContent =
    item.title;

  document.getElementById('lightbox-description').textContent =
    item.description || item.caption || '';

  document.getElementById('lightbox-group').textContent =
    item.group || 'Tác phẩm từ gạo';

  lightbox.hidden = false;
  document.body.style.overflow = 'hidden';

  lightbox.querySelector('.lightbox-close').focus();
}

// ĐÓNG ẢNH
function closeLightbox() {
  if (lightbox.hidden) return;

  lightbox.hidden = true;
  document.body.style.overflow = '';

  document.getElementById('lightbox-image').removeAttribute('src');

  if (lastFocusedElement) {
    lastFocusedElement.focus();
  }
}

// NÚT ĐÓNG
lightbox.querySelector('.lightbox-close')
  .addEventListener('click', closeLightbox);

// NHẤN RA NGOÀI ĐỂ ĐÓNG
lightbox.addEventListener('click', event => {
  if (event.target === lightbox) {
    closeLightbox();
  }
});

// PHÍM ESC VÀ GIỮ FOCUS TRONG LIGHTBOX
document.addEventListener('keydown', event => {
  if (lightbox.hidden) return;

  if (event.key === 'Escape') {
    closeLightbox();
    return;
  }

  if (event.key === 'Tab') {
    const closeButton = lightbox.querySelector('.lightbox-close');

    event.preventDefault();
    closeButton.focus();
  }
});

// KHỞI ĐỘNG WEBSITE
initializeReveal();
loadArtworks();
