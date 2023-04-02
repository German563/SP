const languageButtons = document.querySelectorAll('.language');

const moveElement = () => {
  const hebrewPage = document.querySelector('.he-page');
  const russianPage = document.querySelector('.ru-page');

  if (hebrewPage.style.display === 'block') {
    hebrewPage.style.display = 'none';
    russianPage.style.display = 'block';
  } else {
    hebrewPage.style.display = 'block';
    russianPage.style.display = 'none';
  }
};

languageButtons.forEach(button => {
  button.addEventListener('click', moveElement);
});

const phoneNumbers = document.querySelectorAll('.main__phone__number');

phoneNumbers.forEach(phoneNumber => {
  let isBlue = false;

  setInterval(() => {
    const textArray = phoneNumber.textContent.split('');
    phoneNumber.innerHTML = textArray
      .map((char, i) => `<span class="${(i % 2 === 0 && isBlue) ? 'blue' : ''}">${char}</span>`)
      .join('');
    isBlue = !isBlue;
  }, 1000);
});