import React, { Component } from 'react'

export default class ClickCounter extends Component<{}, {count: number}> {
  constructor(props: any) {
    super(props);
  
    this.state = {count: 0};
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    this.setState({count: this.state.count + 1});
  }
  
  render() {
    const counerStyle = {
      margin: '20px'
    };    

    return (
      <div style={counerStyle}>
        <button onClick={this.onClickButton}>Click me</button>
        <div>ClickCounter: {this.state.count}</div>
      </div>
    )
  }
}
