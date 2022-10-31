const burger = (menu, selector) => {
      const burgerMenu = document.querySelector(menu),
            burgerSelector = document.querySelector(selector);

            burgerMenu.style.display = 'none';

            burgerSelector.addEventListener('click', () =>{
            if(burgerMenu.style.display = 'none' && window.screen.availWidth < 993) {
              burgerMenu.style.display = 'block';
            } else {
              burgerMenu.style.display = 'none';
            }
});
             window.addEventListener('resize', () => {
              if(window.screen.availWidth > 992) {
                burgerMenu.style.display = 'none';
              }
        });
};

export default burger;