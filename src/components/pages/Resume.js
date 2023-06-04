import React from "react";
import "../../assets/css/style.css";
import { BiMailSend } from "react-icons/bi";
import { BsGithub, BsLinkedin } from "react-icons/bs";

import resume from '../../assets/doc/Resume.pdf'

export default function Resume() {

    return (
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center'}}>
            <h4 className="fronEnd">Front-End Proficiencies</h4>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>Responsive Design</li>
                <li>React</li>
                <li>Bootstrap</li>
            </ul>
            <h4 className="backEnd">Back-End Proficiencies</h4>
            <ul>
                <li>APIs</li>
                <li>Node</li>
                <li>Express</li>
                <li>Mysql Sequelize</li>
                <li>API</li>
                <li>MongoDB mongoose</li>
                <li>Rest</li>
                <li>GraphQL</li>
            </ul>
                <button className="btn btn-primary" type="submit" >
                   <a href={resume} style={{color:"white"}}>Download Resume</a>
                </button>
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
        </div>



    )
}
