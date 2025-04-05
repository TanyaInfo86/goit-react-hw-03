
import { FaUser, FaPhone, } from 'react-icons/fa';
import s from './Contact.module.css'

const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
        <ul className={s.list}>
            <li className={s.item}>
                <span>  <p>
                    <FaUser /> {name}
                </p>
                    <p><FaPhone /> {number}</p>
                </span>
                <button type='submit' onClick={() => onDeleteContact(id)} >
                    Delete
                </button>
            </li>
        </ul>
    );
};

export default Contact;






// const Contact = ({ id, name, number, onDeleteContact }) => {
//     return (
//         <li>
//             <p>{name}: {number}</p>
//             <button onClick={() => onDeleteContact(id)}> Delete</button>
//         </li>
//     );
// };

// export default Contact;


// import React from 'react'
// import s from './Contact.module.css'
// function Contact({ name, number }) {
//     return (
//         <div className={s.wraper}>
//             <li>
//                 <p>{name} </p>
//                 <p> {number}</p>
//                 <button> delete</button>
//             </li>
//         </div>
//     );
// }

// export default Contact;

