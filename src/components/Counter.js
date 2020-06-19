import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

    increment = () => {
        this.props.increment();
    }

    decrement = () => {
        this.props.decrement();
    }

    render() {
        return (
            <div>
                <h2>Counter</h2>
                <div>
                    <button onClick={this.decrement}>-</button>
                    <span>{this.props.count}</span>
                    <button onClick={this.increment}>+</button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        count: state.count
    }
}

function mapDispatchToProps(dispatch) {
    return {
        increment: function () {
            dispatch({type: 'INCREMENT'})
        },
        decrement: function() {
            dispatch({type: 'DECREMENT'})
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);