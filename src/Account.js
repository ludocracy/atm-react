import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }
  }
  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className="balance">${this.state.balance}</div>
        <input type="text" ref={amount => this.amount = amount} placeholder="enter an amount" />
        <input type="button" value="Deposit"
          onClick={e => this.setState({ balance: this.state.balance + 1 })} />
        <input type="button" value="Withdraw"
          onClick={e => this.setState({ balance: this.state.balance - 1 })} />
      </div>
    )
  }
}
