/**
 * PORTFOLIO CLIENT ENGINE
 * Handles project navigation, category filtering, interactive quick-preview modal,
 * 3D card tilt physics, and smooth scroll behavior.
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initCardInteractions();
  initFilterSystem();
  initPreviewModal();
  initCardTiltEffect();
});

/**
 * Header subtle blur and elevation change on scroll
 */
function initHeaderScroll() {
  const header = document.querySelector('.site-header');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });
}

/**
 * Handles clicking project cards to navigate directly or trigger actions
 */
function initCardInteractions() {
  const projectCards = document.querySelectorAll('.project-card');

  projectCards.forEach(card => {
    // When clicking anywhere on the card (except specific buttons)
    card.addEventListener('click', (e) => {
      // Don't override if preview button or specific interactive elements clicked
      if (e.target.closest('.preview-btn') || e.target.closest('.project-link')) {
        return;
      }

      const projectUrl = card.getAttribute('data-href');
      if (projectUrl) {
        window.open(projectUrl, '_blank', 'noopener,noreferrer');
      }
    });
  });
}

/**
 * Filter system for categorizing showcase cards
 */
function initFilterSystem() {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const projectCards = document.querySelectorAll('.project-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      // Update active tab UI
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filterValue = tab.getAttribute('data-filter');

      projectCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filterValue === 'all' || category === filterValue) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 10);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

/**
 * Quick Preview Modal Controller (In-portfolio Live App Iframe)
 */
function initPreviewModal() {
  const modal = document.getElementById('preview-modal');
  const iframe = document.getElementById('preview-iframe');
  const modalTitle = document.getElementById('modal-app-title');
  const externalLink = document.getElementById('modal-external-link');
  const closeBtn = document.getElementById('modal-close-btn');
  const backdrop = modal ? modal.querySelector('.modal-backdrop') : null;
  const reloadBtn = document.getElementById('modal-reload-btn');
  const viewportBtns = document.querySelectorAll('.viewport-btn');
  const previewBtns = document.querySelectorAll('.preview-btn');

  if (!modal || !iframe) return;

  function openModal(url, title) {
    iframe.src = url;
    if (modalTitle) modalTitle.textContent = title || 'Live Project Preview';
    if (externalLink) externalLink.href = url;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    // Clear iframe src to stop game loops / timers / audio
    iframe.src = 'about:blank';
    document.body.style.overflow = '';
  }

  // Open on preview button click
  previewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const url = btn.getAttribute('data-preview-url');
      const title = btn.getAttribute('data-title');
      openModal(url, title);
    });
  });

  // Close handlers
  if (closeBtn) closeBtn.addEventListener('click', closeModal);
  if (backdrop) backdrop.addEventListener('click', closeModal);

  window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });

  // Reload iframe
  if (reloadBtn) {
    reloadBtn.addEventListener('click', () => {
      if (iframe.src && iframe.src !== 'about:blank') {
        const currentSrc = iframe.src;
        iframe.src = currentSrc;
      }
    });
  }

  // Viewport switch (Desktop 100% vs Mobile 480px)
  viewportBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      viewportBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const targetWidth = btn.getAttribute('data-width');
      iframe.style.width = targetWidth;
      if (targetWidth === '100%') {
        iframe.style.borderRadius = '0';
        iframe.style.height = '100%';
      } else {
        iframe.style.borderRadius = '16px';
        iframe.style.height = '90%';
      }
    });
  });
}

/**
 * Subtle 3D elevation tilt effect on cards for tactile delight
 */
function initCardTiltEffect() {
  // Only apply tilt on non-touch devices
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cards = document.querySelectorAll('.project-card');

  cards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / centerY) * -4;
      const rotateY = ((x - centerX) / centerX) * 4;

      card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-8px)`;
    });

    card.addEventListener('mouseleave', () => {
      card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0)';
    });
  });
}
