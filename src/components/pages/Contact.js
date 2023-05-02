import React from 'react'
import { BsLinkedin,BsGithub} from "react-icons/bs";

const Contact = () => {
  const [formStatus, setFormStatus] = React.useState('Send')
  const onSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Submitting...')
    const { name, email, message } = e.target.elements
    let conFom = {
      name: name.value,
      email: email.value,
      message: message.value,
    }
    console.log(conFom)
  }
  return (
    <div className="container mt-5" style={{backgroundColor:'#34568B',color:'white'}}>
      <form onSubmit={onSubmit}>
        <div className="mb-3">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input className="form-control" type="text" id="name" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input className="form-control" type="email" id="email" required />
        </div>
        <div className="mb-3">
          <label className="form-label" htmlFor="message">
            Message:
          </label>
          <textarea className="form-control" id="message" required />
        </div>
        <button className="btn btn-primary" type="submit">
          {formStatus}
        </button>
      </form>
      <footer style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center' }}>
                <h1>
                    <a href='https://github.com/Hshini' style={{ marginRight: '10px' }} ><BsGithub /></a>
                </h1>
                <h1>
                    <a href='https://www.linkedin.com/in/halim-shini-79791b18a'> <BsLinkedin /></a>
                </h1>
            </footer>
    </div>
  )
}
export default Contact
