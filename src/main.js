import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class Panel extends Component {
  constructor() {
    super();
    this.state={
      number:0
    }
  }
  
  //用這種方式的方法寫法 可避免傳入時還要bind的麻煩
  increment=()=>{
    let newState={
      number:this.state.number+1
    }

    this.setState(newState) //要呼叫setState才會觸發render
  }
  
  render() {
    return (
      <div>
         <div>
            <Show num={this.state.number} />
            <Btn increment={this.increment}/>
         </div>
      </div>
    );
  }
}

class Show extends Component {
  render() {
    const {num}=this.props;
    return (
      <div>
        {num}
      </div>
    );
  }
}

class Btn extends Component {
  render() {
    const {increment}=this.props
    return (
      <div>
        <button onClick={increment}>+</button>
      </div>
    );
  }
}

ReactDOM.render(<Panel />, document.getElementById('app'));

