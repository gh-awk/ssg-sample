import { hydrate } from 'solid-js/web';
import Button from './button.jsx';

hydrate(() => <Button />, document.getElementById('button-placeholder'));
