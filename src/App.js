import React from "react";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      time: new Date()
    };
  } 



   componentDidMount(){
    setInterval(this.chay,1000)
  }
     
  
  chay=()=>{
    this.setState({
      time: new Date()
    })
   
  }
  
  render() {
    return (
      <div>
     <p>chao cac ban bay h la:{this.state.time.toLocaleDateString()}</p>
         
      </div>
    );
  }
}

export default App;
