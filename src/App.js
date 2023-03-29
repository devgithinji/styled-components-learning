import './App.css';
import Hero from "./components/Hero";
import img1 from './images/imageone.jpg'
import img2 from './images/imagetwo.jpg'
import Banner from "./components/Banner";
import {DangerButton} from "./examples/PropsButton";


function App() {
    return (
        <div>
            <Hero img={img1}>
                <Banner title="This is my title" color="red"/>
                <DangerButton big>click me</DangerButton>
            </Hero>
            <Hero img={img2}/>
            <Hero big/>
        </div>
    );
}

export default App;
