import React from "react";

const Nav = React.lazy(() => import("serverbhai/Nav"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
      </header>
    </div>
  );
}

export default App;
