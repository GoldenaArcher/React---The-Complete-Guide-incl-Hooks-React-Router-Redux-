import React, { Component } from 'react';

import { connect } from 'react-redux';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import * as actionCreators from '../../store/actions/actions';

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
        onIncrement: () => dispatch(actionCreators.increment()),
        onDecrement: () => dispatch(actionCreators.decrement()),
        onAdd: () => dispatch(actionCreators.add()),
        onSubtract: () => dispatch(actionCreators.subtract()),
        onStore: (result) => dispatch(actionCreators.storeResult(result)),
        onDelete: (id) => dispatch(actionCreators.deleteResult(id)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);