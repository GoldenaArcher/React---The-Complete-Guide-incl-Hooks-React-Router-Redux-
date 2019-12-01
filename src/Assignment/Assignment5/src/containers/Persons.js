import React, { Component } from 'react';

import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';

import * as actionType from '../store/action';
import { connect } from 'react-redux'

class Persons extends Component {
    render() {
        return (
            <div>
                <AddPerson personAdded={this.props.addPerson} />
                {this.props.persons.map(person => (
                    <Person
                        key={person.id}
                        name={person.name}
                        age={person.age}
                        clicked={() => this.props.deletePerson(person.id)} />
                ))}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        persons: state.person.persons,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addPerson: (name, age) => dispatch({
            type: actionType.ADD_PERSON,
            person: { name: name, age: age }
        }),
        deletePerson: (id) => dispatch({ type: actionType.DELETE_PERSON, id: id })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Persons);