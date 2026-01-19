
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'im_lab',
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
    'index.csr.html': {size: 446, hash: '135ce956915bda79a4b6dc02228ef20b1aa0eaa35870d8780023f283ce8841a0', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 959, hash: '3a0558c6ed701c10adb50f180edb2d386f044ea7f7a6bc31b138f254ab3332fb', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
