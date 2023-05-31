import React from "react";

class App extends React.Component {
  sum = (a, b) => {
    return a + b;
  };
  render() {
    let a = 3;
    let b = 4;

    return (
      <div>
        Tong cua {a} va {b} la {this.sum(a, b)}
      </div>
    );
  }
}

export default App;
