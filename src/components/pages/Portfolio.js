import React from 'react';
import breezyCoocktail from "../../assets/images/Breezycocktail.png";
import loveHungry from "../../assets/images/lovehungry.png";
import noteTaker from '../../assets/images/Note-Taker.png';
import  tweeter from '../../assets/images/tweeter.png'
import  scheduler from '../../assets/images/scheduler.png'
import quiz from '../../assets/images/quiz-game.png'
import '../../assets/css/style.css'
import { BiMailSend } from "react-icons/bi";
import { BsGithub,BsLinkedin } from "react-icons/bs";


export default function Portfolio() {
  return (
    <div style={{backgroundColor:'#34568B'}}>
      <div className='gallery'>
        <a href="https://keimdm.github.io/recipe-search/" ><img src={breezyCoocktail} alt=" Breezy-Coocktail" className="img-fluid" id='design' /></a>
        <a href="https://github.com/JDR8888/love-hungry" ><img src={loveHungry} alt=" love-hungry" className="img-fluid" id='design' /></a>
        <a href="https://github.com/BobbyCharms/tweeter" ><img src={tweeter} alt="tweeter" className="img-fluid" id='design' /></a>
      </div>
      <div className='projects'>
      <a href='https://pwa-text-editor-11.herokuapp.com/'><img src={noteTaker} alt='Note Taker'  className="img-fluid" id='design' /></a>
      <a href='https://hshini.github.io/Work-Day-Scheduler/'><img src={scheduler} alt='Work-Day-Scheduler'  className="img-fluid" id='design' /></a>
      <a href='https://github.com/Hshini/Quiz-Game/'><img src={quiz} alt='Quiz-Game'  className="img-fluid" id='design' /></a>
      </div>
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
  );
}
