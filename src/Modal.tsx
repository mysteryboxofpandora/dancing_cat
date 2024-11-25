import './Modal.css';
import { useState } from 'react';
import React from 'react';


interface ModalProps {
  isOpen: boolean;
  balanceModal: number;
  onClose: () => void;
  refresh: (value: number) => void;
}


const Modal: React.FC<ModalProps> = ({ isOpen, onClose, balanceModal, refresh }) => {
  if (!isOpen) return null;

 const [input, set_input_Val] = useState('');
//Создаем переменную для данных, которые будут вводиться в input  

  const inputChange = (e: React.FormEvent<HTMLInputElement>) => { 
    const limit = 8;    
    set_input_Val(e.currentTarget.value.slice(0, limit));
  }; //Сохраняет вводимые данные в переменную для данных input
  

  //React.ChangeEvent<HTMLInputElement> 

  
    
  const handleClickModal = () => {    
    //refresh(parseFloat(input) + balanceModal);   
    if (parseFloat(input) === parseFloat(input)) {
    refresh((parseFloat(input)*10000000 + (balanceModal)*10000000)/10000000);     
    onClose();
    }
  }

    

   
  return (      
      <div className="Modal">
          {/* x close window */}
          <button className="popup-x" onClick={onClose} >X</button>
          <span className='text-2xl'>Inter the number of TON</span>
          <input 
          className="input_style"
          placeholder="0.00"
          type="number" 
          value={input}
          onChange={inputChange} inputMode="decimal"
          onKeyDown={(evt) => ["e", "E", "+", "-"].includes(evt.key) && evt.preventDefault()}
          min="0"            
          />          
          <button onClick={handleClickModal}>Click to refill the balance!</button>          
      </div>                  
  );
}



export default Modal;



