import './App.css';

function App() {
    return (
        <div>
            <h1>styled components</h1>
            <h2 style={{color: "red", textTransform: "uppercase"}}>
                inline styles
            </h2>
            <h2 className="global">global css</h2>
        </div>
    );
}

export default App;
