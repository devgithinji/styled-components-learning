import './App.css';
import {GreenBox, RedBox} from "./components/Boxes";
import {Box} from "./components/AnimatedBox";

function App() {
    return (
        <div>
            <RedBox color="red"/>
            <GreenBox color="green"/>
            <Box/>
        </div>
    );
}

export default App;
