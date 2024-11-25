import { useState } from 'react';
import React from "react";
import './index.css';
import {TON, CAT, CAT_static } from './images';
import {song1, song2, song3, song4, song5, song6, song7, song8,  song9,  song10 } from './tracks';
import useSound from 'use-sound';
import Modal from './Modal';
import './Modal.css';





const App: React.FC = () => {
  
  const [balance, setBalance] = useState<number>(0);
  
  const [flag, setFlag] = useState<boolean>(true);

  const clickCost = 0.1; 
    
  const [isModalOpen, setModalOpen] = useState(false);
  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  }
  const newBalanceIs = (value: number) => {
    setBalance(value);
  }
  
  
  

  const [track, setTrack] = useState(Math.floor(Math.random() * 10));
  
  
  const [isPlaying, setIsPlaying] = useState(false);
  const [playBoop1] = useSound(song1, {    //, {pause}
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),    
  });
  const [playBoop2] = useSound(song2, {    //, {pause}
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),    
  });
  const [playBoop3] = useSound(song3, {    //, {pause}
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),    
  });
  const [playBoop4] = useSound(song4, {    //, {pause}
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),    
  });
  const [playBoop5] = useSound(song5, {    //, {pause}
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),    
  });
  const [playBoop6] = useSound(song6, {    //, {pause}
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),    
  });
  const [playBoop7] = useSound(song7, {    //, {pause}
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),    
  });
  const [playBoop8] = useSound(song8, {    //, {pause}
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),    
  });
  const [playBoop9] = useSound(song9, {    //, {pause}
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),    
  });
  const [playBoop10] = useSound(song10, {    //, {pause}
    onplay: () => setIsPlaying(true),
    onend: () => setIsPlaying(false),    
  });

  
  

  
  const handleClick2 = () => {
    
    setTrack(Math.floor(Math.random() * 10));
    setFlag(true);   

  }

  const handleClick = () => {
        
    if (!isPlaying && flag && (balance >= clickCost)) {            
      setBalance((balance*10000000 - clickCost*10000000)/10000000);       
      setFlag(false);
      switch (track) {
        case 0: playBoop1(); break;
        case 1: playBoop2(); break;
        case 2: playBoop3(); break;
        case 3: playBoop4(); break;
        case 4: playBoop5(); break;
        case 5: playBoop6(); break;
        case 6: playBoop7(); break;
        case 7: playBoop8(); break;
        case 8: playBoop9(); break;
        case 9: playBoop10(); break;
      }      
    }

    setTimeout(handleClick2, 12000);
  }   
  
  return (    
    <div className="bg-[#000000] min-h-screen px-4 flex flex-col items-center text-white font-medium">
      <div className="fixed top-0 mt-4 text-3xl font-bold flex items-center">
          <img src={TON} width={44} height={44} />
          <span >{balance}</span>
      </div>
      <button className='bg-[#bd2222] rounded-full fixed top-10 mt-8 text-xl px-5 py-0'
      onClick={openModal}
      >top up your balance</button> 
      <Modal isOpen={isModalOpen} onClose={closeModal} refresh={newBalanceIs} balanceModal={balance} />
      
     
      
      <div className="flex-grow flex items-center justify-center">      
        <img src={isPlaying === true ? CAT : CAT_static} width={400} height={400} alt="CAT" />    
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
