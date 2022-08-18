import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeNote, update } from '../redux/notes/notesSlice'
import styles from "./NotesList.module.css"
export default function NotesList() {
    const items = useSelector((state) => state.notes.items)
    const filtered = useSelector((state) => state.notes.filtered)

    const dispatch = useDispatch();

    let filteredItem = filtered ? items.filter((item) => item.note.includes(filtered)) : items;
    return (
        <div className={styles.Notes}>
            {
                filteredItem.map(item => (
                    <div key={item.id} className={`${styles.Card} ${item.color}`}>
                        <p>{item.note}</p>
                        <div>
                            <i className={`fa-solid fa-pen-to-square ${styles.editBtn}`} onClick={() => dispatch(update(item.id))}></i>
                            <i className={`fa-solid fa-xmark ${styles.closeBtn}`} onClick={() => dispatch(removeNote(item.id))}></i>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}
