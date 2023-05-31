import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { name: "vietnam" };
  }
  render() {
    return (
      <div>
        name
        {this.state.name}
      </div>
    );
  }
}
export default App;
