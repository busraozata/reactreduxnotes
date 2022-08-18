import React from 'react'
import { useDispatch } from 'react-redux'
import { filterNote } from '../redux/notes/notesSlice';
import styles from './Search.module.css'
export default function Search() {
    const dispatch = useDispatch();
    function handleInput(e) {
        dispatch(filterNote(e.target.value))
    }
    return (
        <div style={{ textAlign: "center" }}>
            <input placeholder='Search...' className={styles.input} onChange={handleInput} />
        </div>
    )
}
