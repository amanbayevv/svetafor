// const text = document.querySelector('#div');








// for (i = 0; i < 10 ; i++) {
//    let texts = text.innerHTML += "<h1 class ='div'> Salom </h1>"
// text.style.margin = '10px'

// }
const btnone = document.querySelector('#btnone');
const btntwo = document.querySelector('#btntwo');
const btnth = document.querySelector('#btnth');



const Timer = setInterval(() => {
   if (btntwo.style.backgroundColor == '' && btnth.style.backgroundColor == '' )
      {btnone.style.backgroundColor = 'Green'}
},3000)
const Timer1 = setInterval(() => {
   btnone.style.backgroundColor = ''
}, 7000)
const Timer2 = setInterval(() => {
   if (btnone.style.backgroundColor == '' && btnth.style.backgroundColor == '' )
      {btntwo.style.backgroundColor = 'yellow'}
}, 7000)
const Timer3 = setInterval(() => {
   btntwo.style.backgroundColor = ''
}, 9000)
const Timer4 = setInterval(() => {
   if (btnone.style.backgroundColor == '' && btntwo.style.backgroundColor == '' )
    {  btnth.style.backgroundColor = 'red'  }
}, 9000)
const Timer5 = setInterval(() => {
   btnth.style.backgroundColor = ''
}, 11000)