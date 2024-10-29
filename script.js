const requestUrl = "https://api.freeapi.app/api/v1/public/quotes";


const xhr = new XMLHttpRequest();

xhr.open('GET', requestUrl);

let data;

xhr.onreadystatechange = function () {

  if (xhr.readyState === 4) {

    data = JSON.parse(this.responseText)

  }

}

xhr.send();

const quote = document.querySelector('.quote')

const author = document.querySelector('.author')

const button = document.querySelector("button")


function newran() {
  let randomNumber2 = Math.round(Math.random() * 9);
  quote.innerHTML = `${data.data.data[randomNumber2].content}`;
  author.innerHTML = `${data.data.data[randomNumber2].author}`
}


setInterval(newran, 6000)


button.addEventListener('click', () => {
 const randomNumber = Math.round(Math.random() * 9);
 
  quote.innerHTML = `${data.data.data[randomNumber].content}`;
  author.innerHTML = `${data.data.data[randomNumber].author}`


})




