import React, { Component } from 'react';

import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

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
                <button onClick={this.props.onStore}>Store Result</button>
                <ul>
                    {this.props.storedResults.map(result =>
                        <li key={result.id} onClick={this.props.onDelete}>{result.value}</li>
                    )}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        counter: state.counter,
        storedResults: state.results,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrement: () => dispatch({ type: 'INCREMENT' }),
        onDecrement: () => dispatch({ type: 'DECREMENT' }),
        onAdd: () => dispatch({ type: 'ADD', payload: { value: 5 } }),
        onSubtract: () => dispatch({ type: 'SUBTRACT', payload: { value: 5 } }),
        onStore: () => dispatch({ type: 'STORE_RESULT' }),
        onDelete: () => dispatch({ type: 'DELETE_RESULT' }),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);