
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/im_lab/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/im_lab"
  },
  {
    "renderMode": 2,
    "route": "/im_lab/tests"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 448, hash: '9330dbce0cdb8e5b742499299d35dad0c2fb974acbdded0628d693211be66829', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 961, hash: 'f0cd8c723f7c56fef0e89d8c9125943d63af4faa2f898f2c0870e72e70ef28f5', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'tests/index.html': {size: 37440, hash: '5a3aa04e922fd5ec08daa6ce5a539f745c5385b5d76056636c563aff7efdd26b', text: () => import('./assets-chunks/tests_index_html.mjs').then(m => m.default)},
    'index.html': {size: 37440, hash: '5a3aa04e922fd5ec08daa6ce5a539f745c5385b5d76056636c563aff7efdd26b', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
