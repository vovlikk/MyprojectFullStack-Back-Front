import { useState, useEffect } from "react";
import '../UserProgress.css/UserProgressNotes.css';
import { useApi } from "../../../../Connect/ApiContext";

function UserProgressNotes({ onClose }) {
    const [notes, setNotes] = useState([]);
    const [newnotes, setNewNotes] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [deleteid, setiIdDelete] = useState('');
    const[changeid,setChangeId] = useState('');
    const[changenotes,setChangeNote] = useState('');
    const{apiUrl} = useApi();

    async function GetAllNote() {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("You need authorization");
            }

            const response = await fetch(`${apiUrl}/api/UserNote/get-all-notes`, {
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                    "ngrok-skip-browser-warning": "true"
                }
            });

            if (!response.ok) {
                throw new Error("Failed to fetch notes");
            }

            const data = await response.json();
            setNotes(data);
        } catch (err) {
            setError(err.message);
        }
    }

    useEffect(() => {
        GetAllNote();
    });

    async function SubmitNewNote(e) {
        e.preventDefault();
        setError(null);
        setLoading(true);
        const info = { Note: newnotes };

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("You need authorization");
            }

            const response = await fetch(`${apiUrl}/api/UserNote/post-new-note`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(info)
            });

            if (!response.ok) {
                throw new Error("fail to send note");
            }

            alert("Note was successfully sent");
            setNewNotes('');
        } catch (err) {
            setError(err.message);
        }
    }

    async function DeleteNote(e) {
        e.preventDefault();
        try {
            const token = localStorage.getItem('token');
            if (!token) throw new Error('You need Authorization');

            const response = await fetch(`${apiUrl}/api/UserNote/deleteNote/${deleteid}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

            if (!response.ok) {
                const errorText = await response.text();
                throw new Error(`Failed to delete note: ${response.status} - ${errorText}`);
            }

            alert("Note was successfully deleted");
            setiIdDelete('');
        } catch (err) {
            console.error("Delete error:", err);
            alert(`Error: ${err.message}`);
        }
    }

    async function ChangeNotes(e) {
        var info = {ChangeNote:changenotes}
          e.preventDefault();
          try{
            const token = localStorage.getItem('token');
            if(!token){
                throw new Error("You need authorization")
            }

            const response = await fetch(`${apiUrl}/api/UserNote/change-note/${changeid}`,{
                method:"PUT",
                headers:{
                    "Content-Type":"application/json",
                    Authorization:`Bearer ${token}`
                },
                body:JSON.stringify(info)

            });
            if(!response.ok){
            const errorText = await response.text();
            throw new Error(`Fail to update note: ${response.status} - ${errorText}`);

            }

            alert("Notes was successfull changed")
            setChangeId('');
            setChangeNote('');

          }
          catch(err){
            throw new Error(err.message)
          }


    }

    return (
       

       <div className="user-notes-container" onClick={onClose}>
    <div className="user-notes-section" onClick={e => e.stopPropagation()}>

                {error && <p className="error-message" style={{ color: 'red' }}>{error}</p>}

                <ul className="notes-list">
                    {notes.map(e => (
                        <li key={e.id} className="note-item">
                            <strong>ID: {e.id}</strong> — {e.note}
                        </li>
                    ))}
                </ul>

                <form onSubmit={SubmitNewNote} className="note-form">
                    <input
                        value={newnotes}
                        onChange={e => setNewNotes(e.target.value)}
                        placeholder="Enter your Notes"
                        className="note-input"
                    />
                    <button
                        type="submit"
                        className="note-submit-button"
                    >
                        <h3>Send</h3>
                    </button>
                </form>

                <form onSubmit={DeleteNote} className="note-delete-form-ctrl">
                <input
                    type="number"
                    value={deleteid}
                    onChange={(e) => setiIdDelete(e.target.value)}
                    placeholder="Enter Note ID to delete"
                    className="note-delete-input-field"
                />
                <button type="submit" className="note-delete-submit-btn">
                    Delete Note
                </button>
            </form>

               <form onSubmit={ChangeNotes} className="change-note-form">
                    <input
                        type="number"
                        placeholder="Enter ID"
                        value={changeid}
                        onChange={e => setChangeId(e.target.value)}
                        className="change-note-id-input"
                    />
                    <input
                        type="text"
                        placeholder="Enter new note"
                        value={changenotes}
                        onChange={e => setChangeNote(e.target.value)}
                        className="change-note-text-input"
                    />
                    <button type="submit" className="change-note-button">
                        Change Note
                    </button>
                </form>

            </div>
        </div>
        
    );
}

export default UserProgressNotes;
