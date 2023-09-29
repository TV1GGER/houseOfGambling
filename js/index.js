
//Translate Button
const changeLanguageBtn = document.querySelector('.language-text');
const btnLanguage = document.querySelector('.btn-language');
const burgerLangSvg = document.querySelector('.burgerLangSvg');

let btnLanguageCount = 1;
btnLanguage.addEventListener('click', () => {
  if(btnLanguageCount%2===1){
    changeLanguageBtn.innerText = 'RU';
    btnLanguageCount++;
  }else if(btnLanguageCount%2===0){
    changeLanguageBtn.innerText = 'EN';
    btnLanguageCount++;
  }
})

burgerLangSvg.addEventListener('click', () => {
  if(btnLanguageCount%2===1){
    changeLanguageBtn.innerText = 'RU';
    btnLanguageCount++;
  }else if(btnLanguageCount%2===0){
    changeLanguageBtn.innerText = 'EN';
    btnLanguageCount++;
  }
})


//Burger menu

const burgerItem = document.querySelector('.burger__btn');
const burgerItem2 = document.querySelector('.burger__btn');
const menu = document.querySelector('.nav');
const menuCloseNav = document.querySelector('.nav');
const menu2 = document.querySelector('.layout__btn');
const bod = document.querySelector('body');
const outsideClickWrapper = document.querySelector('.outside-click-wrapper');

let countClickBrg = 0;

(function() {

  burgerItem.addEventListener('click', () => {
  countClickBrg++;
  outsideClickWrapper.classList.remove('outside-click-wrapper-visible');
    menu.classList.add('nav_active');
    bod.classList.add('lock');
    //burgerItem.style.visibility = 'hidden';
});

menuCloseNav.addEventListener('click', () => {
    menu.classList.remove('nav_active');
    menu2.classList.remove('layout__btn_active');
    bod.classList.remove('lock');
   // burgerItem.style.visibility = 'visible';
});
burgerItem2.addEventListener('click', () => {
    menu2.classList.add('layout__btn_active');
    //burgerItem.style.visibility = 'hidden';
});
menu2.addEventListener('click', () => {
    menu.classList.remove('nav_active');
    menu2.classList.remove('layout__btn_active');
    bod.classList.remove('lock');
   // burgerItem.style.visibility = 'visible';
});
}());

