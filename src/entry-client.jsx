import { hydrate } from 'solid-js/web';
import Button from './button.jsx';
import Home from './home.jsx';

hydrate(() => <Home />, document.getElementById('root'));
