import { useState } from 'react';
import './index.css';
import {TON, CAT, CAT_static } from './images';
import {song1, song2, song3, song4, song5, song6, song7, song8,  song9,  song10 } from './tracks';
import useSound from 'use-sound';


const App = () => {
  const [balance, setBalance] = useState(10);   
  const clickCost = 0.1;   
  

  const chose = [CAT_static, CAT];
  const music = [song1, song2, song3, song4, song5, song6, song7, song8,  song9,  song10];
  const [track, setTrack] = useState(Math.floor(Math.random() * 10));
  
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [playBoop] = useSound(music[track], {    //, {pause}
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),    
  });
  

  
  const handleClick2 = () => {
    
    setTrack(Math.floor(Math.random() * 10));
    
  }

  function handleClick() {

    if (!isPlaying) {      
      setBalance(balance - clickCost);
      playBoop();
    }

    setTimeout(handleClick2, 12000);

  }   

  return (    
    <div className="bg-[#000000] min-h-screen px-4 flex flex-col items-center text-white font-medium">
      <div className="fixed top-0 mt-12 text-5xl font-bold flex items-center">
          <img src={TON} width={44} height={44} />
          <span >{balance.toLocaleString()}</span>
      </div>

      
      <div className="flex-grow flex items-center justify-center">      
        <img src={chose[isPlaying === true ? 1 : 0]} width={400} height={400} alt="CAT" />    
      </div>

      
      <div className="fixed bottom-0 text-5xl pb-7 items-center flex flex-col cursor-pointer" onClick={handleClick}>
        <span>Let's Dance!!!</span>
        <div className="text-base flex items-center">
          <span className="text-4xl">0.1</span>
          <img src={TON} width={48} height={48} alt="TON" />
        </div>
       
       </div>
          
    </div>
   
 
  );
};

export default App;
