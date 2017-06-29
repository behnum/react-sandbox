import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      numChildren: 0
    };
  }

  render() {
    const children = [];

    for (var i = 0; i < this.state.numChildren; i++) {
      children.push(<Child number={i} />);
    }

    return (
      <Parent addClick={this.onAddClick.bind(this)}>
        {children}
      </Parent>
    );
  }

  onAddClick() {
    this.setState({
      numChildren: this.state.numChildren + 1
    });
  }
}

class Parent extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.addClick}>Add a child</button>

        {this.props.children}
      </div>
    );
  }
}

class Child extends Component {
  render() {
    return <div>Child</div>;
  }
}

export default App;
