import { useDispatch } from 'react-redux'
import css from '../ContactForm/ContactForm.module.css'
import { deleteContact } from '../../redux/contacts/operations'

function Contact({ name, number, id }) {
    const dispatch = useDispatch()

    return (
        <div className={css.contactBlock}>
            <div>
                <span>🎅 {name}</span> <br/>
                <span>📞 {number}</span> 
            </div>
            <button type="button" onClick={() => dispatch(deleteContact(id))}>delete</button>
        </div>        
    )
}

export default Contact