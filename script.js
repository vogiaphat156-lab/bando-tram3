
@import url('https://fonts.googleapis.com/css2?family=Be+Vietnam+Pro:wght@400;500;600;700&family=Playfair+Display:wght@500;600;700&display=swap');

:root {
  --cream: #f6f4ee;
  --paper: #fbfaf7;
  --ink: #25291f;
  --muted: #77776c;
  --sage: #78866b;
  --sage-dark: #4d5c43;
  --beige: #e8e2d4;
  --line: #d9d4c8;
  --serif: 'Playfair Display', Georgia, serif;
  --sans: 'Be Vietnam Pro', Arial, sans-serif;
  --page-pad: clamp(22px, 7vw, 108px);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  scroll-padding-top: 24px;
}

body {
  margin: 0;
  background: var(--cream);
  color: var(--ink);
  font-family: var(--sans);
  -webkit-font-smoothing: antialiased;
}

a {
  color: inherit;
}

button {
  font: inherit;
}

/* HIỆU ỨNG XUẤT HIỆN KHI CUỘN */

[data-reveal] {
  opacity: 1;
  transform: none;
}

.has-motion [data-reveal] {
  opacity: 0;
  transform: translateY(35px);
  transition:
    opacity .8s ease,
    transform .8s cubic-bezier(.2,.65,.3,1);
}

.has-motion [data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* HERO */

.hero {
  position: relative;
  min-height: 790px;
  height: min(100vh, 980px);
  overflow: hidden;
  background: var(--cream);
  padding: 0 var(--page-pad);
}

.site-nav {
  height: 94px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  z-index: 2;
  border-bottom: 1px solid rgba(37,41,31,.13);
}

.wordmark {
  display: flex;
  gap: 12px;
  align-items: center;
  text-decoration: none;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1.6px;
}

.wordmark small {
  display: block;
  color: var(--muted);
  font-size: 9px;
  font-weight: 400;
  letter-spacing: 1.2px;
  margin-top: 3px;
}

.wordmark-mark {
  width: 37px;
  height: 37px;
  border: 1px solid var(--sage);
  border-radius: 50%;
  display: grid;
  place-items: center;
  color: var(--sage-dark);
  font-family: var(--serif);
  font-size: 13px;
}

.nav-visit {
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  font-size: 10px;
  font-weight: 600;
}

.nav-visit span {
  color: var(--sage);
  font-size: 17px;
  margin-left: 10px;
}

.hero-content {
  position: relative;
  z-index: 1;
  width: min(760px, 68%);
  padding-top: clamp(100px, 15vh, 175px);
}

.eyebrow {
  font-size: 9px;
  letter-spacing: 2.4px;
  font-weight: 600;
  color: var(--sage-dark);
  margin: 0;
}

.hero .eyebrow {
  display: flex;
  align-items: center;
  gap: 11px;
}

.hero .eyebrow span {
  width: 23px;
  height: 1px;
  background: var(--sage);
}

h1, h2, p {
  margin-top: 0;
}

.hero h1 {
  font-family: var(--serif);
  font-size: clamp(64px, 9vw, 126px);
  font-weight: 500;
  line-height: .98;
  letter-spacing: -4px;
  margin: 29px 0 32px;
}

.hero h1 em,
.gallery-intro h2 em {
  font-weight: 500;
  color: var(--sage);
  font-style: italic;
}

.hero-bottom {
  display: flex;
  align-items: center;
  gap: 54px;
}

.hero-bottom > p {
  max-width: 385px;
  color: #68695f;
  font-size: 13px;
  line-height: 1.9;
  margin: 0;
}

.round-link {
  width: 104px;
  height: 104px;
  border: 1px solid #b9bcae;
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 6px;
  text-decoration: none;
  font-size: 8px;
  line-height: 1.6;
  letter-spacing: 1px;
  text-align: center;
  transition: .3s;
  flex: 0 0 auto;
}

.round-link:hover {
  background: var(--sage-dark);
  border-color: var(--sage-dark);
  color: white;
}

.round-link b {
  font-size: 17px;
  font-weight: 400;
}

.hero-art {
  position: absolute;
  width: 37%;
  height: 68%;
  right: var(--page-pad);
  top: 20%;
  overflow: hidden;
  background: #d9d8c6;
}

.hero-art::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(
    180deg,
    transparent 58%,
    rgba(34,39,29,.28)
  );
  pointer-events: none;
}

.hero-art img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.art-label {
  position: absolute;
  z-index: 1;
  right: 17px;
  bottom: 17px;
  color: white;
  font-size: 8px;
  letter-spacing: 1.5px;
}

.hero-index {
  position: absolute;
  right: var(--page-pad);
  bottom: 33px;
  color: #98988b;
  font-size: 9px;
  letter-spacing: 2px;
}

/* GALLERY */

.gallery-section {
  max-width: 1600px;
  margin: 0 auto;
  padding: 135px var(--page-pad) 150px;
}

.gallery-intro {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
  margin-bottom: 65px;
}

.gallery-intro h2 {
  font-family: var(--serif);
  font-weight: 500;
  font-size: clamp(44px, 6.6vw, 82px);
  letter-spacing: -2px;
  line-height: 1.08;
  margin: 18px 0 0;
}

.gallery-intro h2 em {
  color: var(--sage);
}

.gallery-note {
  max-width: 355px;
  color: var(--muted);
  font-size: 12px;
  line-height: 1.9;
  margin: 0 0 7px;
}

.gallery-toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  margin-bottom: 28px;
  padding-bottom: 15px;
  border-bottom: 1px solid var(--line);
}

.filters {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 7px;
}

.filter {
  border: 1px solid transparent;
  border-radius: 30px;
  background: transparent;
  color: #727267;
  padding: 9px 14px;
  font-size: 10px;
  cursor: pointer;
  transition: .2s;
}

.filter:hover {
  border-color: #c9c8b9;
  color: var(--ink);
}

.filter.is-active {
  background: var(--sage-dark);
  color: white;
}

.gallery-count {
  font-size: 9px;
  color: var(--muted);
  white-space: nowrap;
  margin: 0;
}

.masonry {
  columns: 3 250px;
  column-gap: 22px;
  min-height: 150px;
}

.art-card {
  display: block;
  width: 100%;
  break-inside: avoid;
  margin: 0 0 22px;
  padding: 0;
  border: 0;
  background: var(--paper);
  text-align: left;
  color: var(--ink);
  cursor: zoom-in;
  overflow: hidden;
  opacity: 1;
  transform: none;
  box-shadow: 0 1px 1px rgba(37,41,31,.035);
}

.has-motion .art-card {
  opacity: 0;
  transform: translateY(22px);
  transition:
    opacity .65s ease,
    transform .65s cubic-bezier(.2,.65,.3,1);
  transition-delay: var(--reveal-delay, 0ms);
}

.has-motion .art-card.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.art-image {
  display: block;
  width: 100%;
  height: auto;
  object-fit: cover;
  background: var(--beige);
  transition: transform .65s ease;
  transform: scale(1.001);
}

.art-card:hover .art-image {
  transform: scale(1.025);
}

.card-copy {
  display: block;
  padding: 15px 16px 17px;
}

.card-meta {
  display: block;
  color: var(--sage-dark);
  font-size: 8px;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 7px;
}

.card-title {
  display: block;
  font-family: var(--serif);
  font-size: 19px;
  line-height: 1.25;
  font-weight: 500;
}

.card-caption {
  display: block;
  color: var(--muted);
  font-size: 10px;
  line-height: 1.6;
  margin-top: 5px;
}

.notice {
  color: var(--muted);
  font-size: 13px;
}

/* FOOTER */

.closing {
  background: #e8e7dc;
  text-align: center;
  padding: 94px 24px 42px;
}

.closing-quote {
  max-width: 900px;
  margin: 25px auto 55px;
  font-family: var(--serif);
  font-size: clamp(25px, 4vw, 47px);
  font-weight: 500;
  line-height: 1.42;
  letter-spacing: -.7px;
}

.back-top {
  display: inline-block;
  text-decoration: none;
  font-size: 9px;
  letter-spacing: 1.7px;
  border-bottom: 1px solid #aeb19e;
  padding-bottom: 8px;
}

/* LIGHTBOX */

.lightbox {
  position: fixed;
  z-index: 20;
  inset: 0;
  display: grid;
  place-items: center;
  padding: 35px;
  background: rgba(25,29,23,.88);
  backdrop-filter: blur(4px);
}

.lightbox[hidden] {
  display: none;
}

.lightbox-panel {
  display: grid;
  grid-template-columns: minmax(0,1.35fr) minmax(230px,.65fr);
  width: min(1080px,94vw);
  max-height: 88vh;
  background: var(--cream);
  box-shadow: 0 20px 70px rgba(0,0,0,.2);
}

.lightbox-image-wrap {
  min-height: 300px;
  max-height: 88vh;
  background: #d9d8c6;
  display: grid;
  place-items: center;
  overflow: hidden;
}

.lightbox-image-wrap img {
  display: block;
  max-width: 100%;
  max-height: 88vh;
  width: auto;
  height: auto;
  object-fit: contain;
}

.lightbox-caption {
  align-self: center;
  padding: clamp(24px,4vw,52px);
}

.lightbox-caption h2 {
  font-family: var(--serif);
  font-size: clamp(28px,4vw,45px);
  line-height: 1.15;
  font-weight: 500;
  margin: 15px 0;
}

.lightbox-caption > p:last-child {
  font-size: 12px;
  line-height: 1.9;
  color: var(--muted);
}

.lightbox-close {
  position: absolute;
  right: 27px;
  top: 17px;
  border: 0;
  background: transparent;
  color: white;
  font-size: 38px;
  line-height: 1;
  cursor: pointer;
  font-weight: 300;
}

/* FOCUS */

.filter:focus-visible,
.art-card:focus-visible,
.round-link:focus-visible,
.nav-visit:focus-visible,
.lightbox-close:focus-visible {
  outline: 2px solid var(--sage);
  outline-offset: 4px;
}

/* TABLET */

@media (max-width: 900px) {
  .hero {
    min-height: 760px;
    height: 92vh;
  }

  .hero-content {
    width: 75%;
    padding-top: 150px;
  }

  .hero-art {
    width: 38%;
    height: 52%;
    top: auto;
    bottom: 8%;
    right: var(--page-pad);
    opacity: .88;
  }

  .hero h1 {
    font-size: clamp(60px,9vw,94px);
  }

  .hero-bottom {
    gap: 25px;
  }

  .round-link {
    width: 88px;
    height: 88px;
  }

  .gallery-intro {
    align-items: flex-start;
  }

  .gallery-note {
    max-width: 290px;
  }

  .gallery-section {
    padding-top: 100px;
    padding-bottom: 110px;
  }

  .masonry {
    columns: 2 220px;
  }
}

/* MOBILE */

@media (max-width: 600px) {
  :root {
    --page-pad: 22px;
  }

  .hero {
    min-height: 820px;
    height: auto;
    padding-bottom: 35px;
  }

  .site-nav {
    height: 76px;
  }

  .nav-visit {
    font-size: 8px;
    letter-spacing: 1px;
  }

  .hero-content {
    width: 100%;
    padding-top: 99px;
  }

  .hero .eyebrow {
    font-size: 8px;
    letter-spacing: 1.6px;
  }

  .hero h1 {
    font-size: clamp(53px,14vw,76px);
    letter-spacing: -2.7px;
    margin: 25px 0 19px;
  }

  .hero-bottom {
    align-items: flex-start;
    gap: 19px;
  }

  .hero-bottom > p {
    max-width: 270px;
    font-size: 11px;
    line-height: 1.8;
  }

  .round-link {
    width: 76px;
    height: 76px;
    font-size: 7px;
  }

  .hero-art {
    width: 66%;
    height: 34%;
    right: 22px;
    bottom: 8%;
    top: auto;
  }

  .hero-index {
    bottom: 18px;
  }

  .gallery-section {
    padding: 83px 22px 92px;
  }

  .gallery-intro {
    display: block;
    margin-bottom: 36px;
  }

  .gallery-intro h2 {
    font-size: 54px;
  }

  .gallery-note {
    font-size: 11px;
    margin: 21px 0 0;
    max-width: 420px;
  }

  .gallery-toolbar {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 20px;
  }

  .filters {
    gap: 5px;
  }

  .filter {
    padding: 8px 11px;
    font-size: 9px;
  }

  .gallery-count {
    align-self: flex-end;
  }

  .masonry {
    columns: 2 135px;
    column-gap: 12px;
  }

  .art-card {
    margin-bottom: 13px;
  }

  .card-copy {
    padding: 11px 11px 13px;
  }

  .card-title {
    font-size: 16px;
  }

  .card-caption {
    font-size: 9px;
  }

  .card-meta {
    font-size: 7px;
    letter-spacing: 1px;
  }

  .closing {
    padding: 73px 24px 32px;
  }

  .closing-quote {
    font-size: 29px;
    margin: 20px auto 42px;
  }

  .lightbox {
    padding: 18px;
  }

  .lightbox-panel {
    grid-template-columns: 1fr;
    max-height: 88vh;
    overflow: auto;
    width: min(520px,96vw);
  }

  .lightbox-image-wrap {
    min-height: 180px;
    max-height: 58vh;
  }

  .lightbox-image-wrap img {
    max-height: 58vh;
    width: 100%;
    object-fit: contain;
  }

  .lightbox-caption {
    padding: 20px 22px 25px;
  }

  .lightbox-caption h2 {
    font-size: 30px;
    margin: 10px 0;
  }

  .lightbox-close {
    right: 13px;
    top: 8px;
    font-size: 34px;
  }
}

/* GIẢM CHUYỂN ĐỘNG NẾU NGƯỜI DÙNG YÊU CẦU */

@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    transition-duration: .01ms !important;
    animation-duration: .01ms !important;
    animation-iteration-count: 1 !important;
  }

  .has-motion [data-reveal],
  .has-motion .art-card {
    opacity: 1;
    transform: none;
  }
}
