import { renderToString } from 'solid-js/web';
import Home from './home.jsx';
export default function render() {
  return renderToString(() => <Home />);
} 