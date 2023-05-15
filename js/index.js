let userName = document.getElementById('nameElement');
let urlImage = document.getElementById('urlElement');
let comment = document.getElementById('commentElement');
let button = document.querySelector('.buttonElement');
let chat = document.querySelector('.chat');


function checkedWord(word) {
    return (`${word.slice(0, 1).toUpperCase().slice(1, -1).toLowerCase()}`);
};



button.addEventListener('click', () => {
    console.log(userName.value);

    let urlAvatar = urlImage.value;
    console.log(urlImage.value);

    let user = userName.value;
    let fullName = user.split(' ');
    let finalFullName = checkedWord(fullName);
    // let surname = checkedWord(fullName[0]);
    // let yourName = checkedWord(fullName[1]); 
    // let patronymik = checkedWord(fullName[2]);
    // let finalFullName = `${surname} ${yourName} ${patronymik}`;
    // let chatSpam = chat.replace(/xxx/gi, '***').replace(/viagra/gi, '***');

    chat.innerHTML = `
        <div id="message" class="message">
                    <p>Чат</p>
                    <img src=${urlAvatar}
                    alt="Аватар" class="avatar" />
                    <p class="userName">${finalFullName}</p> 
                    <p class="text">${chat.value}</p>
                </div>
                `;
});

