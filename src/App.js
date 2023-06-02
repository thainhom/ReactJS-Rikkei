import React from "react";
import Child from "./component/Child";
class App extends React.Component {
  constructor () {
    super();
    this.state = {age:18,isShowchild:true};
this.handleChanggeAge=this.handleChanggeAge.bind(this)
    
  }
  componentWillMount(){
    console.log("componentWillUnmount");

  }
  handleChanggeAge(){
    this.setState({age: 29})
  }
  handleShowChil(){
    this.setState(
      {
        isShowchild:!this.state.isShowchild
      }
    )
  }
  render() {
    return (
      <div>
        <h1>App component</h1>
        <button onClick={ this.handleChanggeAge}>changeAge</button>
        <button onClick={ this.handleShowChil.bind(this)}>Toggle show</button>
             
       {this.state.isShowchild?<Child age={this.state.age}/>:null}
        
        
      </div>
    );
  }
  componentDidMount(){
    console.log("app componentDidMount");
  }
}

export default App;
