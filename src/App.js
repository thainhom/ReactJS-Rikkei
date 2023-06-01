import React from "react";
import Parentercomponent from "./Parentercomponent";

class App extends React.Component {
  render() {
    user = {
      users: [
        { id: "user1", title: "op", salary: "300 $" },
        { id: "user2", title: "RV", salary: "500 $" },
        { id: "user3", title: "lead", salary: "2000 $" },
      ],
    };
    return (
      <div>
        <Parentercomponent a={this.state.user} />
      </div>
    );
  }
}

export default App;
