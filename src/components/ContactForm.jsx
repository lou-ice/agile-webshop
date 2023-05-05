import { useState } from "react";

const ContactForm = () => {
  const [formStatus, setFormStatus] = useState("Skicka");
  const onSubmit = (e) => {
    e.preventDefault();
    setFormStatus("Skickar");
    const { name, email, message } = e.target.elements;
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    console.log(conFom);
  };
  return (
    <div className="container mt-5">
      <h2 className="mb-3">Hur kan vi hjälpa dig?</h2>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Namn
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Meddelande
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-primary" type="submit">
          {formStatus}
        </button>
      </form>
    </div>
  );
};
export default ContactForm;
