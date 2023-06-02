import React from "react";

class Child extends React.Component {
  constructor (props) {
    super(props);
    this.state = {name: 'thai'};
    console.log("contructor da chay");
    
  }
  componentWillMount() {
    console.log("componentWillUnmount");
  }
  
  handleChangeState=()=>{
    this.setState({
      name: this.state.name=='thai' ? 'viet':'thai'
    })
    
  }
  render() {
    return (
      <div>

        <h3>
          child component 
        </h3>
        <p>name:{this.state.name}</p>
         <p>age:{this.props.age}</p>
         <button onClick={this.handleChangeState}>check</button>
      </div>
    );
  }
  componentDidMount(){
    console.log("app componentDidMount");
  }

componentDidMount() {
  console.log("componentDidMount da chay");
}
shouldComponentUpdate(){
   console.log('Child ComponentUpdated da chay' );
   return true;
}
componentWillUpdate(){
  
  console.log('Child ComponentUpdated da chay');
}
componentDidUpdate(){
  console.log('ChildcomponentdidUpdate da chay');
  console.warn("componentDidUpdate da chay")
}
}


export default Child;
 