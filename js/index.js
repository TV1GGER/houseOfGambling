
//Translate Button
const changeLanguageBtn = document.querySelector('.language-text');
const btnLanguage = document.querySelector('.btn-language');

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

