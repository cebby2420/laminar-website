import type { Alpine } from 'alpinejs';
import collapse from '@alpinejs/collapse';

export default (Alpine: Alpine) => {
  Alpine.plugin(collapse);

  Alpine.store('theme', {
    init() {
      this.isDark = (() => {
        if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
          return localStorage.getItem('theme') === 'dark';
        }
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
          return true;
        }
        return false;
      })();
    },

    isDark: false,

    toggle() {
      this.isDark = !this.isDark;
      localStorage.setItem('theme', this.isDark ? 'dark' : 'light');
    },
  });

  Alpine.store('lightbox', {
    show: false,
    src: null,
    toggle() {
      this.show = !this.show;
    },
    open(src: string) {
      this.src = null;
      setTimeout(() => {
        this.show = true;
        this.src = src;
      });
    },
  });

  document.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      Alpine.store('lightbox').show = false;
    }
  });
};
