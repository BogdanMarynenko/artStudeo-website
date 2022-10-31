const accordion = (targetSelector, itemsSelector) => {
     const btns = document.querySelectorAll(targetSelector),
           blocks = document.querySelectorAll(itemsSelector);
      
          btns.forEach(btn => {
                btn.addEventListener('click', function() {
                blocks.forEach(block => {
                if(this.nextElementSibling.classList.contains('active-content')) return;
                block.classList.remove('active-content');
                block.style.maxHeight = '0px';
              });

              btns.forEach(btn => {
                if (this.classList.contains('active-style')) return;
                btn.classList.remove('active-style');
          });

     
      this.classList.toggle('active-style');
      this.nextElementSibling.classList.toggle('active-content');

      if(this.nextElementSibling.classList.contains('active-content')) {
         this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 80 + 'px';  
      } else {
       this.nextElementSibling.style.maxHeight = '0px';
       }
     });
  });
};
export default accordion;

