import * as PersonHandler from '../action';

const initialState = {
    persons: [],
}

const reducer = (state = initialState, action) => {
    const newState = { ...state };
    let newPersons = [...newState.persons];
    switch (action.type) {
        case PersonHandler.ADD_PERSON:
            const { person } = action;
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: person.name,
                age: person.age,
            }
            newPersons.push(newPerson);
            break;
        case PersonHandler.DELETE_PERSON:
            newPersons = newPersons.filter(person => {
                return person.id !== action.id
            })
            break;
        default:
            break;
    }
    newState.persons = newPersons;
    return newState;
}

export default reducer;