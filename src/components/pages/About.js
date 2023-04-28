import React from 'react';
import { BsLinkedin,BsGithub} from "react-icons/bs";


export default function About() {
  return (
    <>
        <div>
      <p style={{marginLeft:'20px',marginTop:'30px',fontSize:'18px'}}>I am a hard working, honest individual. I am a good timekeeper, always willing to learn new skills.<br></br>
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
