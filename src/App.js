import React from "react";

class App extends React.Component {
  constructor() {
    super();
    this.state = { studentName: "Phương" };

    this.changeStudentName = this.changeStudentName.bind(this);
    this.state = { number: 0 };
  }

  changeStudentName() {
    this.setState({ studentName: "Sáng" });
  }

  increaseNumber() {
    this.setState({
      number: this.state.number + 1,
    });
  }

  render() {
    return (
      <div>
        Student name: {this.state.studentName}
        <button onClick={this.changeStudentName}>Change student name</button>
        <p>Number: {this.state.number}</p>
        <button onClick={() => this.increaseNumber()}>Tăng lên 1</button>
      </div>
    );
  }
}

export default App;
