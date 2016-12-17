import React, {Component} from 'react';

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
export default Show;

