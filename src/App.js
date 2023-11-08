import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>14<span className="reverse">6</span><span className="small">.S<span className="rotate">e</span></span></h1>
        <p>A placeholder for future projects.</p>
        <img src='gfx/instagram-16.png' onClick={() => {
      window.open("http://instagram.com/146_north", "_blank");
    }} alt="Instagram"></img>
      </header>
    </div>
  );
}

export default App;
