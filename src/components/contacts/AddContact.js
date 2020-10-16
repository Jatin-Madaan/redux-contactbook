import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addContact } from '../../actions/contactAction'
import shortid from 'shortid';
import {useHistory} from 'react-router-dom'

export const AddContact = () => {
    let history = useHistory();
    const dispatch = useDispatch();
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

    return (
        <div className="card shadow border-0">
            <div className="card-header">Add Contact</div>
            <div className="card-body">
                <form onSubmit={(e) => createContact(e)}>
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

                    <button className="btn btn-primary" type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}
