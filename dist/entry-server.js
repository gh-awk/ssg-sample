import { ssr, ssrHydrationKey, renderToString, createComponent } from 'solid-js/web';

var _tmpl$ = ["<div", '><h1>Home</h1><div id="button-placeholder"></div></div>'];
const Home = () => {
  return ssr(_tmpl$, ssrHydrationKey());
};

function render() {
  return renderToString(() => createComponent(Home, {}));
}

export { render as default };
