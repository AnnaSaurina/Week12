let userName = document.getElementById('nameElement');
let urlImage = document.getElementById('urlElement');
let comment = document.getElementById('commentElement');
let button = document.querySelector('.buttonElement');
let chat = document.querySelector('.chat');

// Тестрирование replace

// let textTest = 'XXX adasdasd Viagra sdfsdfsef xxxxxx'
// let antiSpamText = textTest.replace(/xxx/gi, '***').replace(/viagra/gi, '***');
// console.log(antiSpamText);

function checkedWord(word) {
    return (`${word.slice(0, 1).toUpperCase()}${word.slice(1,).toLowerCase()}`);
};

button.addEventListener('click', () => {
    // console.log(userName.value);

    let urlAvatar = urlImage.value;
    // console.log(urlImage.value);
    let user = userName.value;
    let fullName = user.split(' ');
    let surname = checkedWord(fullName[0]);
    let yourName = checkedWord(fullName[1]);
    let patronymik = checkedWord(fullName[2]);
    let finalFullName = `${surname} ${yourName} ${patronymik}`;
    let commentChat = comment.value;
    let chatSpam = commentChat.replace(/xxx/gi, '***').replace(/viagra/gi, '***');

    chat.innerHTML = `
        <div id="message" class="message">
                    <p>Чат</p>
                    <img src=${urlAvatar}
                    alt="Аватар" class="avatar" />
                    <p class="userName">${finalFullName}</p> 
                    <p class="text">${chatSpam}</p>
                </div>
                `;
});

