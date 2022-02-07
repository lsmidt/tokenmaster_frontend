import "./styles.css";
import * as React from "react";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Testing </h2>
      <Clock />
    </div>
  );
}






class Clock extends React.Component{
  constructor(props) {
    super(props);
    this.state = {date: new Date()};  
  };
  
  tick() {
    // Timer callback
    this.setState({
      date: new Date()
    }); 
  }
  
  componentDidMount() { 
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );   
  }
  
  componentWillUnmount(){
    clearInterval(this.timerID);
  }

  render(){
	return(
    <h1> The time is {this.state.date.toLocaleTimeString()} </h1>
  )}
  
  
}