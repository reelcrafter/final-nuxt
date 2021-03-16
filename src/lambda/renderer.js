import { loadNuxt } from 'nuxt-start';
// import config from '../../nuxt.config.js';

// const nuxt = new Nuxt({ ...config, dev: false });

export const handler = async () => {
  const nuxt = await loadNuxt({ for: 'start' });
  const { html, error, redirected } = await nuxt.renderRoute('/');

  return { html, error, redirected };
};
