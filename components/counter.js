import React from "react";

class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
        //this.incrementCount = this.incrementCount.bind(this);  // Binding the method
    }
    incrementCount=()=> {
        this.setState({ count: this.state.count + 1 });
    }
    decrementCount=()=> {
        this.setState({count: this.state.count - 1});
    }

    render() {
        return (
            //<button onClick={() => this.setState({ count: this.state.count + 1 })}>
            <>
            <button onClick={this.incrementCount}>
                Clicked {this.state.count} times
            </button>

            <button onClick={this.decrementCount}>
                Clicked {this.state.count} times
            </button>
            
            </>
            
        );
    }
}

export default Counter;
