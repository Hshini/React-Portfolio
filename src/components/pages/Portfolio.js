import React from 'react';
import breezyCoocktail from "../../assets/images/Breezycocktail.png";
import loveHungry from "../../assets/images/lovehungry.png";
import noteTaker from '../../assets/images/Note-Taker.png';
import  tweeter from '../../assets/images/tweeter.png'
import  scheduler from '../../assets/images/scheduler.png'
import quiz from '../../assets/images/quiz-game.png'
import '../../assets/css/style.css'
import { BsLinkedin,BsGithub} from "react-icons/bs";

export default function Portfolio() {
  return (
    <div style={{backgroundColor:'lightcyan'}}>
      <div className='gallery'>
        <a href="https://keimdm.github.io/recipe-search/" ><img src={breezyCoocktail} alt=" Breezy-Coocktail" className='bcProject' /></a>
        <a href="https://love-hungry.herokuapp.com/" ><img src={loveHungry} alt=" love-hungry" className='lhProject' /></a>
        <a href="https://github.com/BobbyCharms/tweeter" ><img src={tweeter} alt="tweeter" className='ntProject' /></a>
      </div>
      <div className='projects'>
      <a href='https://pwa-text-editor-11.herokuapp.com/'><img src={noteTaker} alt='Note Taker'  className='ntProject' /></a>
      <a href='https://hshini.github.io/Work-Day-Scheduler/'><img src={scheduler} alt='Work-Day-Scheduler'  className='dsProject'/></a>
      <a href='https://github.com/Hshini/Quiz-Game/'><img src={quiz} alt='Quiz-Game'  className='qgProject'/></a>
      </div>
      <footer style={{display:'flex',flexDirection:'row',justifyContent:'center'}}>
        <h1>
         <a href='https://github.com/Hshini'style={{marginRight:'10px'}} ><BsGithub/></a>
        </h1>
        <h1>
          <a href='https://www.linkedin.com/in/halim-shini-79791b18a'> <BsLinkedin/></a>
        </h1>
      </footer> 
    </div>     
  );
}
