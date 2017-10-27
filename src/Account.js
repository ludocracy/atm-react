import React, { Component } from 'react';

export default class Account extends Component {
  constructor(props) {
    super(props);

    this.state = {
      balance: 0
    }

    this.handleDeposit = this.handleDeposit.bind(this);
    this.handleWithdraw = this.handleWithdraw.bind(this);
    this.styleBalanceZero = this.styleBalanceZero.bind(this);
  }

  handleDeposit(e) {
    if(this.amount.value) {
      let newBalance = parseFloat(this.state.balance) + parseFloat(this.amount.value);
      this.setState({
        balance: newBalance
      });
    }
  }

  handleWithdraw(e) {
    if(this.amount.value) {
      let newBalance = parseFloat(this.state.balance) - parseFloat(this.amount.value);
      if(newBalance >= 0) {
        this.setState({
          balance: newBalance
        });
      }
    }
  }

  styleBalanceZero() {
    return `balance${this.state.balance === 0 ? ' zero' : ''}`
  }

  render() {
    return (
      <div className="account">
        <h2>{this.props.name}</h2>
        <div className={this.styleBalanceZero()}>${this.state.balance}</div>
        <input type="text" ref={amount => this.amount = amount}
          placeholder="enter an amount" />
        <input type="button" value="Deposit"
          onClick={this.handleDeposit} />
        <input type="button" value="Withdraw"
          onClick={this.handleWithdraw} />
      </div>
    )
  }
}
