import React from 'react';
import { BiMailSend } from "react-icons/bi";
import { BsGithub,BsLinkedin, } from "react-icons/bs";
import {Row,Col} from 'react-bootstrap';
import profilePic from '../../assets/images/Halim.jpg'

export default function About() {
  return (
    <>
      <Row>
        <Col xl={8}>
        <h4 style={{textAlign:'center',marginTop:'30px'}}>Hi I'm Halim  Shini</h4> <br></br>
          <p style={{marginLeft:'50px',fontSize:'18px',lineHeight:'40px'}}>
          Full Stack Developer with a Bachelor's degree in Information Technology,and a
          Certification from Columbia Engineering Coding Boot Camp .<br></br>
          Innovative problem-solver passionate about developing apps.<br></br>
          Strengths in creativity, teamwork, and realizing projects on time.<br></br>
          </p>
        </Col>
        <Col xl={3}>
          < img src={profilePic} alt="profile " className="img-fluid" style={{borderRadius:'100px'}} />
        </Col>
      </Row>
      <footer style={{ display: 'flex', marginTop: '20px', flexDirection: 'row', justifyContent: 'center' }}>
        <h1>
          <a href='https://github.com/Hshini' style={{ marginRight: '15px' }} ><BsGithub /></a>
        </h1>
        <h1>
          <a href='https://www.linkedin.com/in/halim-shini-79791b18a' style={{ marginRight: '15px' }}> <BsLinkedin /></a>
        </h1>
        <h1>
          <a href="mailto:halimshini@hotmail.com" style={{ marginRight: '15px' }}><BiMailSend /></a>
        </h1>
      </footer>
    </>

  );
}
