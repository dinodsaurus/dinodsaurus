// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/dino/Documents/dino/dinodsaurusSite/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/dino/Documents/dino/dinodsaurusSite/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/Users/dino/Documents/dino/dinodsaurusSite/src/pages/page-2.js"))
}

exports.json = {
  "layout-index.json": require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/json/dev-404-page.json"),
  "layout-index.json": require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/json/layout-index.json"),
  "404.json": require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/json/404.json"),
  "layout-index.json": require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/json/layout-index.json"),
  "index.json": require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/json/index.json"),
  "layout-index.json": require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/json/layout-index.json"),
  "page-2.json": require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/json/page-2.json"),
  "layout-index.json": require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/json/layout-index.json"),
  "404-html.json": require("/Users/dino/Documents/dino/dinodsaurusSite/.cache/json/404-html.json")
}