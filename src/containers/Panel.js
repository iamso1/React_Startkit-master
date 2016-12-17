import React, {Component} from 'react';
import Show from '../conponents/Show'
import Btn from '../conponents/Btn'
//step 1 加入connect跟bindAction
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

//step 3 把action一起加進來 並用代稱取代
import * as counterAction from '../actions/counterAction';

class Panel extends Component {
  constructor() {
    super();
    //step 6 刪除status
    // this.state={
    //   number:0
    // }
  }
  
  //step 7 刪除action
  //用這種方式的方法寫法 可避免傳入時還要bind的麻煩
  increment=()=>{
    let newState={
      number:this.state.number+1
    }

    this.setState(newState) //要呼叫setState才會觸發render
  }
  
  render() {
    //step 5 將這兩個東西加入
    const { counterReducer, counterAction } = this.props;

    //step 8 counterReducer 跟 counterAction 取代舊有的呼叫方式
    return (
      <div>
         <div>
            <Show num={counterReducer} />  
            <Btn increment={counterAction.incrementAction} decrement={counterAction.decrementAction}/>
         </div>
      </div>
    );
  }
}

//step4 撰寫兩個funciton
const mapStateToProps=(state)=>{
  return {
    counterReducer:state.counterReducer
  }
}

const mapDispatchToProps=(dispatch)=>{
      return {
        counterAction: bindActionCreators(counterAction, dispatch)
    }
}
//step2 使用connect
export default connect(mapStateToProps, mapDispatchToProps) (Panel);