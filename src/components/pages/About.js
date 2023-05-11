import React from 'react';
import { BsLinkedin,BsGithub} from "react-icons/bs";


export default function About() {
  return (
    <>
      <div>
      <p style={{marginLeft:'50px',marginTop:'30px',fontSize:'18px',lineHeight:'40px'}}>
         I am hard working, trustworthy, friendly and helpful. I deliver on my promises and get the job done in time.<br></br>
         I can work in challenging environments, I remain calm under pressure, and I am a true team player. <br></br>
         I have an open mind and love discovering new fields.<br></br>
         Bachelor in  Information Technology   University of Aleksander Moisiu Durres, Albania.<br></br>
         I followed courses to become a Full Stack web developer.Trained at Columbia coding boot camp and earned a certificate in full-stack web development. <br></br>
         Innovative problem-solver passionate about developing apps , focused on mobile-first design<br></br>
         Strengths in creativity, teamwork, and realizing projects from ideation to execution.
         </p>

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
