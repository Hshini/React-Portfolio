import React from "react";
import "../../assets/css/style.css";
import { BsLinkedin,BsGithub} from "react-icons/bs";

export default function Resume() {

    return (
        <div style={{ display: "flex", flexDirection: 'column', alignItems: 'center', marginTop: '10px' }}>
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
