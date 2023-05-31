import React from "react";

class App extends React.Component {
  render() {
    let datetime = new Date();
    return (
      <div>
        <h1 className="bt3">Xin chao cac ban bay h la:</h1>
        {datetime.toLocaleTimeString()}
      </div>
    );
  }
}

export default App;
