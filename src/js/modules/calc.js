import { postData } from "../services/requests";
import forms from "./forms";

const calc = (size, material, options, promocode, result, state) => {
    const sizeBlock = document.querySelector(size),
          materialBlock = document.querySelector(material),
          optionsBlock = document.querySelector(options),
          promocodeBlock = document.querySelector(promocode),
          resultBlock = document.querySelector(result),
          calcSelect = document.querySelectorAll('.calc-selector');
          
    let sum = 0;

    function totalSum (){
    state.size = sizeBlock.value;
    state.material = materialBlock.value;
    state.options = optionsBlock.value;
    state.promocode = promocodeBlock.value;
    state.result = resultBlock.textContent; 
    console.log(state);
  }
  
   let calcPictures = () => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
       
    if(sizeBlock.value == '' || materialBlock.value == '') {
      resultBlock.textContent = ('Заполните форму!');
    } if (promocodeBlock.value === 'IWANTPOPART') {
        resultBlock.textContent = Math.round(sum * 0.7);
        
    }else {
      resultBlock.textContent = sum;
    }

    totalSum();
   };
   
   sizeBlock.addEventListener('change', calcPictures);
   materialBlock.addEventListener('change', calcPictures);
   optionsBlock.addEventListener('change', calcPictures);
   promocodeBlock.addEventListener('input', calcPictures);
   resultBlock.addEventListener('input', calcPictures);

};

export default calc;

