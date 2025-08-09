import '../StylesCss/Subscribe.css';
import { useState } from 'react';

function Subscribe() {
  const [subemail, setemail] = useState('');
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(null);

  async function HandlerSubmitSubscribe(e) {
    e.preventDefault();
    setloading(true);
    seterror(null);

    const email = { Email: subemail };

    try {
      const response = await fetch('http://172.20.10.9:5159/api/news/news-submit', {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(email)
      });

      if (!response.ok) {
        throw new Error(response.status || "Fail to send email");
      }

      alert("Successfully subscribed!");
      setemail('');
    } catch (err) {
      seterror(err.message || "Fail to send email");
    } finally {
      setloading(false);
    }
  }

  return (
    <div className="subscribe-main">
      <div className="subscribe-section">
        <div className="subscribe-text">
          <h1>Subscribe our fitness tips</h1>
          <p>Clearly communicate the benefits of subscribing, such as exclusive content</p>
          <p className="sub-bottom-text">and breaking news.</p>
        </div>

        <form className="subscribe-input" onSubmit={HandlerSubmitSubscribe}>
          <input
            type="email"
            value={subemail}
            onChange={e => setemail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
          <button type="submit" disabled={loading}>Subscribe</button>
        </form>

        {loading && <div>Sending...</div>}
        {error && <div style={{ color: "red" }}>{error}</div>}
      </div>
    </div>
  );
}

export default Subscribe;
    