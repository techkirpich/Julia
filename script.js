// Отримання кнопки та результату
const loveButton = document.getElementById('loveButton');
const resultDiv = document.getElementById('result');

// Функція, що виводить сердечко та напис
function showLove() {
  resultDiv.innerHTML = '❤️ Юлічка, я тебе дуже сильно кохаю ❤️';
  resultDiv.style.display = 'block';
}

// Додати обробник події для кнопки
loveButton.addEventListener('click', showLove);
