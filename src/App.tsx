import './App.module.scss';
import { Instructions } from './Instructions.tsx';
import styles from './App.module.scss';
import { Slider } from './Slider.tsx';

const App = () => (
    <div className={ styles.container }>
        <div className={ styles.slider }>
            <Slider/>
        </div>

        <div className={ styles.instructions }>
            <Instructions/>
        </div>
    </div>
);

export default App;
