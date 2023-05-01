import React from 'react';
import { BsLinkedin,BsGithub} from "react-icons/bs";


export default function About() {
  return (
    <>
        <div>
      <p style={{marginLeft:'20px',marginTop:'30px',fontSize:'18px'}}>I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills.<br></br>
         Full Stack  web developer with a background in Information Technology. <br></br>
         Trained at Columbia  coding boot camp and earned a certificate in full-stack web development.<br></br>
         Innovative problem-solver passionate about developing apps; focused on mobile-first design and development.<br></br>
         Strengths in creativity, teamwork, and building projects from ideation to execution.
         I am friendly, helpful and polite, have a good sense of humour. <br></br>
         I am able to work independently in busy environments and also within a team setting.</p>
    </div>
          <footer style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <h1>
         <a href='https://github.com/Hshini'style={{marginRight:'10px'}} ><BsGithub/></a>
        </h1>
        <h1>
          <a href='https://www.linkedin.com/in/halim-shini-79791b18a'> <BsLinkedin/></a>
        </h1>
      </footer> 
    </>

  );
}
