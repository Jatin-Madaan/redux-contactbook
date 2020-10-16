import { CREATE_CONTACT, DELETE_CONTACT, GET_CONTACT, UPDATE_CONTACT, SELECT_CONTACT, CLEAR_CONTACT, DELETE_SELECTED_CONTACTS } from "../constants/types";

//actions
export const addContact = (contact) => {
    return {
        type: CREATE_CONTACT,
        payload: contact,
    };
}

//get a contact
export const getContact = (id) => ({
    type: GET_CONTACT,
    payload: id
})

//UPdate contact
export const updateContact = (contact) => ({
    type: UPDATE_CONTACT,
    payload: contact
})

//delete a contact
export const deleteContact = (id) => ({
    type: DELETE_CONTACT,
    payload: id
})

//select all contact
export const selectAllContact = (id) => ({
    type: SELECT_CONTACT,
    payload: id
})

//clear selected contacts
export const clearAllContact = () => ({
    type: CLEAR_CONTACT
})

//delete selected contact
export const deleteAllContact = () => ({
    type: DELETE_SELECTED_CONTACTS
})


