const languageButton = document.querySelectorAll(".language");



const moveElement = () => {
    const hebrewPage = document.querySelector('.he-page');
    const russianPage = document.querySelector(".ru-page");
  
    if (hebrewPage.style.display === 'block') {
      hebrewPage.style.display = 'none';
      russianPage.style.display = 'block';
    } else {
      hebrewPage.style.display = 'block';
      russianPage.style.display = 'none';
    }
  };
  for (let i = 0; i < languageButton.length; i++) {
    languageButton[i].addEventListener('click', moveElement);
  }