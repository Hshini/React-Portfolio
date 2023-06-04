
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { BiMailSend } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Row, Col } from 'react-bootstrap';
const Contact = () => {
  function refreshPage() {
    setTimeout(() => {
      window.location.reload();
    }, 1000);
  }
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bnr2cqo', 'template_9s41bju', form.current, 'WKvZ0FRi270VGWShX')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <div>
      <Row className="justify-content-center" >
        <Col xl={4} style={{ marginTop: '70px' }}>
          <div style={{ textAlign: 'center' }}>
            <h1>
              <a href='https://github.com/Hshini' ><BsGithub /></a>
            </h1>
            <p><a href='https://github.com/Hshini'>https://github.com/Hshini</a></p>  
          </div>
          <div style={{ textAlign: 'center' }}>
            <h1>
              <a href='https://www.linkedin.com/in/halim-shini-79791b18a'> <BsLinkedin /></a>
            </h1>
            <p><a href='https://www.linkedin.com/in/halim-shini-79791b18a'>https://www.linkedin.com/in/halim-shini-79791b18a</a></p>  
          </div>
          <div style={{ textAlign: 'center' }}>
            <h1>
              <a href="mailto:halimshini@hotmail.com"><BiMailSend /></a>
            </h1>
            <p >halimshini@hotmail.com</p>
          </div>
        </Col>
        <Col xl={8} style={{ marginTop: '40px' }}>
          <form ref={form} onSubmit={sendEmail} style={{ marginTop: '20px' }}>
            <div>
              <label className="form-label" htmlFor="name">
                Name *
              </label>
              <input className="form-control" type="text" name="name" required />
            </div>
            <div >
              <label className="form-label" htmlFor="lastName">
                Last Name *
              </label>
              <input className="form-control" type="text" name="lastName" required />
            </div>
            <div >
              <label className="form-label" htmlFor="email">
                Email *
              </label>
              <input className="form-control" type="email" name="email" required />
            </div>
            <div >
              <label className="form-label" htmlFor="message">
                Message *
              </label>
              <textarea className="form-control" name="message" required />
            </div >
            <div className="d-grid gap-2">
              <button className="btn btn-primary" type="submit" value="Send" onClick={refreshPage} style={{ color: 'white', marginTop: '15px', justifyContent: 'center' }} >
                Send
              </button>
            </div>
          </form>
        </Col>
      </Row>
    </div>
  )
}
export default Contact;