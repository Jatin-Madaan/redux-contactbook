import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addContact, getContact, updateContact } from '../../actions/contactAction'
import shortid from 'shortid';
import {useHistory , useParams} from 'react-router-dom'

export const EditContact = () => {
    let {id} = useParams();
    let history = useHistory();
    const dispatch = useDispatch();
    // reducers for xyz value
    const contact = useSelector((state) => state.xyz.contact)
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const createContact = (e) => {
        e.preventDefault();
        console.log(name, email, phone);
        const new_contact = {
            id: shortid.generate(),
            name: name,
            phone: phone,
            email: email
        }
        dispatch(addContact(new_contact));
        history.push("/");
    }

    useEffect(() => {
        if(contact != null){
            setName(contact.name);
            setPhone(contact.phone);
            setEmail(contact.email);
        }
        dispatch(getContact(id));
    }, [contact]);

    const onUpdateContact = (e) =>{
        e.preventDefault();

        const update_contact = Object.assign(contact, {
            name: name,
            phone: phone,
            email: email
        });

        dispatch(updateContact(update_contact));
        history.push("/");
    }
    return (
        <div className="card shadow border-0">
            <div className="card-header">Update Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => onUpdateContact(e)}>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="enter your name"
                            value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="enter your Phone"
                            value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <input type="email" className="form-control" placeholder="enter your email"
                            value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <button className="btn btn-warning" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
