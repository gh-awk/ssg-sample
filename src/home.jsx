import { NoHydration, Hydration } from 'solid-js/web';
import Button from './button.jsx';
import Nav from './nav.tsx';

const Home = () => {
    return (
        <NoHydration>
            <div>
                <h1>Home</h1>
                <div>
                    <Nav />
                </div>
                <div id="button-placeholder">
                    <Hydration>
                        <Button />
                    </Hydration>
                </div>
            </div>
        </NoHydration>
    )
}

export default Home;

