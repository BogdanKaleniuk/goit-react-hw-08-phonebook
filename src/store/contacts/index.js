// import { nanoid } from 'nanoid'

// const ADD_CONTACT = 'ADD_CONTACT'
// const REMOVE_CONTACT = 'REMOVE_CONTACT'
// const FILTER_CONTACTS = "FILTER_CONTACTS"

// const initialState = {
//     items: [],
//     filter: ''
// }

// export function addContact(name, number) {
//     return {
//         type: ADD_CONTACT,
//         name,
//         number
//     }
// }

// export function removeContact(id) {
//     return {
//         type: REMOVE_CONTACT,
//         id
//     }
// }

// export function filterContacts(query) {
//     return {
//         type: FILTER_CONTACTS,
//         query
//     }
// }

// function contactReducer (state = initialState, action) {
//     switch (action.type) {
//         case ADD_CONTACT:
//             const newContact = { id: nanoid(), name: action.name, number: action.number};
//             return {
//                 ...state,
//                 items: [...state.items, newContact]
//             }
//         case REMOVE_CONTACT:
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.id !== action.id)
//             }
//         case FILTER_CONTACTS:
//             return {
//                 ...state,
//                 items: state.items.filter(item => item.name === action.query),
//                 filter: action.query
//             }
//         default:
//             return state
//     }
// }

// export default contactReducer
