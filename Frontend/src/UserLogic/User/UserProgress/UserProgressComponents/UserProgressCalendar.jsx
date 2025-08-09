import { useState, useEffect } from 'react';
import '../UserProgress.css/UserProgressCalendar.css';
import Calendar from 'react-calendar';

function UserProgressCalendar({ onClose }) {
  const [date, setDate] = useState(new Date());
  const [events, setEvent] = useState([]);
  const [type, setType] = useState('');
  const [note, setNote] = useState('');

  const API_URL = 'https://420e3a2fdda3.ngrok-free.app/api/UserCalendarEvents';
  const token = localStorage.getItem('token');

 
  const formatDate = (d) => d.toISOString().slice(0, 10); // yyyy-MM-dd

  // Загрузка событий
  useEffect(() => {
    const fetchMonth = async () => {
      try {
        const month = date.toISOString().slice(0, 7); // yyyy-MM
        const response = await fetch(`${API_URL}/${month}`, {
          headers: {
            "Content-Type":"application/json",
            Authorization: `Bearer ${token}`
          }
        });

        if (!response.ok) throw new Error("Failed to fetch events");

        const data = await response.json();
        setEvent(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchMonth();
  }, [date, token]);

  // Добавление события
  const createInfo = async (date, type, note) => {
    try {
      const response = await fetch(`${API_URL}/add-progress`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({
          date: formatDate(date),
          type,
          note
        })
      });

      if (!response.ok) throw new Error("Failed to send data");

      alert('Successfully Added');
    } catch (err) {
      console.error(err.message);
    }
  };

  // Отправка формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    await createInfo(date, type, note);
    setType('');
    setNote('');

    // Перезагрузка событий на текущий месяц
    try {
      const month = date.toISOString().slice(0, 7);
      const res = await fetch(`${API_URL}/${month}`, {
        headers: { Authorization: `Bearer ${token}` }
      });
      const data = await res.json();
      setEvent(data);
    } catch (err) {
      console.error("Error updating events after submit", err);
    }
  };

  return (
    <div className="user-progress-calendar-overlay" onClick={onClose}>
      <div className="user-progress-calendar-sections" onClick={(e) => e.stopPropagation()}>
        <div className="user-progress-calendar">
         <Calendar
  value={date}
  onChange={setDate}
  tileContent={({ date }) => {
    const day = formatDate(date);
    const check = events.some(e => e.Date === day); // Сравнение по Date
    return check ? <span>💪</span> : null;
  }}
/>
          <p>Selected: {date.toDateString()}</p>
        </div>

        <div className="selected-event-info">
  {(() => {
     const day = formatDate(date);
    const event = events.find(e => e.Date === day); 
    if (!event) return <p>Нет событий</p>;
    return (
      <>
        <p><strong>Тип:</strong> {event.Type}</p>
        <p><strong>Заметка:</strong> {event.Note}</p>
      </>
    );
  })()}
</div>

        <div className="user-progress-calendar-change-info">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Type of Train"
              value={type}
              onChange={(e) => setType(e.target.value)}
              required
            />
            <textarea
              placeholder="Note"
              value={note}
              onChange={(e) => setNote(e.target.value)}
              required
            />
            <button type="submit">Add event</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserProgressCalendar;
