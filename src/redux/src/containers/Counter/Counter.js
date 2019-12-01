import React, { Component } from 'react';

import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionTypes from '../../store/actions';

class Counter extends Component {

    render() {
        return (
            <div>
                <CounterOutput value={this.props.counter} />
                <CounterControl label="Increment" clicked={this.props.onIncrement} />
                <CounterControl label="Decrement" clicked={this.props.onDecrement} />
                <CounterControl label="Add 5" clicked={this.props.onAdd} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtract} />
                <hr />
                <button onClick={() => this.props.onStore(this.props.counter)}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result =>
                        <li key={result.id} onClick={() => this.props.onDelete(result.id)}>{result.value}</li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter.counter,
        storedResults: state.result.results,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({ type: actionTypes.INCREMENT }),
        onDecrement: () => dispatch({ type: actionTypes.DECREMENT }),
        onAdd: () => dispatch({ type: actionTypes.ADD, payload: { value: 5 } }),
        onSubtract: () => dispatch({ type: actionTypes.SUBTRACT, payload: { value: 5 } }),
        onStore: (result) => dispatch({ type: actionTypes.STORE_RESULT, result: result }),
        onDelete: (id) => dispatch({ type: actionTypes.DELETE_RESULT, id: id }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);