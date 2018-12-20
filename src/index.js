import React from 'react';
import ReactDOM from 'react-dom';

// An Example of Class and State

// const App = props => {
//   return (
//     <div>
//       <BankAccount />
//     </div>
//   );
// };
//
// class BankAccount extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       accountBalance: 25.0
//     };
//   }
//
//   render() {
//     return (
//       <div>
//         <h3>Account Balance: ${this.state.accountBalance}</h3>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(<App />, document.getElementById('root'));

//_____________________________________________________________________________

// Example of setState() method

// const App = props => {
//   return <Text />;
// };
//
// class Text extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       text: 'Hello World!!'
//     };
//   }
//
//   update(event) {
//     this.setState({ text: event.target.value });
//   }
//   render() {
//     return (
//       <div>
//         <input type="text" onChange={this.update.bind(this)} />
//         <h1>{this.state.text}</h1>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(<App />, document.getElementById('root'));

//_____________________________________________________________________________

// An Example of the increment() method

// const App = props => {
//   return (
//     <div>
//       <BankAccount />
//     </div>
//   );
// };
//
// class BankAccount extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       accountBalance: 2222.22
//     };
//   }
//
//   increment() {
//     this.setState({ accountBalance: this.state.accountBalance + 1 });
//   }
//
//   render() {
//     return (
//       <div>
//         <h3>Account Balance: ${this.state.accountBalance}</h3>
//         <button onClick={this.increment.bind(this)}>Increase Amount</button>
//       </div>
//     );
//   }
// }
//
// ReactDOM.render(<App />, document.getElementById('root'));

//_____________________________________________________________________________

// Incrementing by a specific number


const App = props => {
  return <BankAccount />;
};

class BankAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      accountBalance: 2222.22,
      addAmount: 0
    };
  }

  increment() {
    this.setState({
      accountBalance: this.state.accountBalance + parseInt(this.state.addAmount)
    });
  }

  render() {
    return (
      <div>
        <h3>Account Balance: ${this.state.accountBalance}</h3>
        <input
          type="number"
          onChange={event => this.setState({ addAmount: event.target.value })}
          value={this.state.addAmount}
        />
        <button onClick={this.increment.bind(this)}>Increase Amount</button>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
