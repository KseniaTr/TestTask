//import
//const, let
//function
//обработчик событий и вызовы функций
// Задание 1
const blockText= "popup";

let allBlocks = 3;
let startNumberOfBlocks = 1;
/*Cоздать три новых блока и добавить их на
страницу. В каждый блок добавить эл. параграфа с текстом*/
for (startNumberOfBlocks; startNumberOfBlocks <= allBlocks; startNumberOfBlocks++) {
  let div = document.createElement('div');
  div.className = 'block';
  document.body.append(div);
  
  let p = document.createElement('p');
  div.append(p);
  p.innerHTML = blockText;
  
};
//Создать событие каждому блоку: при клике менять его цвет.
let div = document.querySelectorAll('.block');
div.forEach (blocks => { 
  blocks.addEventListener('click', function() {
div.forEach(div => div.classList.remove('active'));
      this.classList.add('active');
  });
});

/*Задание 2
function setGetParams(newGetparams) {
    let newString
    for(key in newGetParams)
        newString += (newString ? '&' : '') + key + '='
        + newGetParams[i]
    return window.location.href + '?' + newString
} */
