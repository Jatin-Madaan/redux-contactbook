import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Contact from './Contact';
import { selectAllContact, clearAllContact, deleteAllContact } from '../../actions/contactAction'

function Contacts() {
    const dispatch = useDispatch();
    const [selectAll, setSelectAll] = useState(false);
    const contacts = useSelector(state => state.xyz.contacts);
    const selectedContacts = useSelector(state => state.xyz.selectedContacts);

    useEffect(() => {
        if(selectAll){
            dispatch( selectAllContact(contacts.map(contact => contact.id)) )
        }else {
            dispatch( clearAllContact() )
        }
    }, [selectAll])

    return (

        <div>
            {
                selectedContacts.length  > 0 ? (
                    <button className="btn btn-danger mb-3" onClick={() => dispatch(deleteAllContact())} >Delete Selected</button>
                ) : null
            }

            <table className="table shadow">
                <thead className="bg-danger text-white">
                    <tr>
                        <th scope="col">
                            <div className="custom-control custom-checkbox">
                                <input id="selectAll" type="checkbox" className="custom-control-input" value={selectAll} 
                                    onClick={() => setSelectAll(!selectAll)}
                                />
                                <label htmlFor="selectAll" className="custom-control-label"></label>
                            </div>
                        </th>
                        <th scope="col">Name</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Email</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        contacts.map(contact => <Contact contact={contact} key={contact.id}  selectAll={selectAll} />)
                    }

                </tbody>
            </table>
        </div>
    )
}

export default Contacts
