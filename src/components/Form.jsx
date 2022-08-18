import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNotes, editNote } from '../redux/notes/notesSlice';
import { nanoid } from '@reduxjs/toolkit';
import styles from './Form.module.css'

export default function Form() {
    const edit = useSelector(state => state.notes.edit)
    console.log("edit", edit);

    const [note, setNote] = useState("");
    const [updateNote, setUpdateNote] = useState("");
    const [color, setColor] = useState("");

    useEffect(() => {
        setUpdateNote(edit.note)
    }, [edit])

    const dispatch = useDispatch();
    function handleSubmit(e) {
        e.preventDefault();
        if (note === "") return;

        dispatch(addNotes(
            {
                id: nanoid(),
                note: note,
                color: color
            }
        ))
        setNote("")
    }

    function handleEditedNote(e) {
        e.preventDefault();
        dispatch(editNote({ id: edit.id, note: updateNote, color: color }));
        setNote("");
        setUpdateNote("");

    }
    return (
        <form className={styles.Form}>
            <div className="form-area">
                <textarea
                    id='note'
                    rows='10'
                    maxLength='250'
                    placeholder='Enter your note here...'
                    className={styles.textArea}
                    value={edit.note ? updateNote : note}
                    onChange={edit.note ? (e) => setUpdateNote(e.target.value) : (e) => setNote(e.target.value)}
                />
                <div className={styles.btnGrp}>
                    <div className={styles.colorGrp} style={{ display: "flex" }}>
                        <button id='red' type='button' onClick={(e) => setColor(e.target.id)} className={`${styles.btn} ${styles.red}`} />
                        <button id='pink' type='button' onClick={(e) => setColor(e.target.id)} className={`${styles.btn} ${styles.pink}`} />
                        <button id='yellow' type='button' onClick={(e) => setColor(e.target.id)} className={`${styles.btn} ${styles.yellow}`} />
                        <button id='blue' type='button' onClick={(e) => setColor(e.target.id)} className={`${styles.btn} ${styles.blue}`} />
                        <button id='green' type='button' onClick={(e) => setColor(e.target.id)} className={`${styles.btn} ${styles.green}`} />
                    </div>

                    <div>
                        {
                            edit.id
                                ? <button className={styles.btnSave} onClick={handleEditedNote}>Change Note</button>
                                : <button className={styles.btnSave} onClick={handleSubmit}>Add Note</button>
                        }
                    </div>
                </div>
            </div>
        </form>
    )
}
