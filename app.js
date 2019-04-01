//DOM SELECTION

//document.getElementById() mengembalikan element

const judul = document.getElementById('judul');


//document.getElementsByTagName() mengembalikan HTMLCollention
const p = document.getElementsByTagName('p');

for(let i = 0; i < p.length; i++){
    p[i].style.backgroundColor = 'lightblue';
}


//document.getelementsByClassName() mengembalikan HTMLCollention

const p1 = document.getElementsByClassName('p1');

// document.querySelector() > element
const p4 = document.querySelector('#b p');

const ler = document.querySelector('#b ul li:nth-child(2)');

//const pp = document.querySelector('p');

const pp = document.querySelectorAll('p');

const secb = document.getElementById('b');
const x = secb.querySelector('p');

const jj = document.querySelector('#judul');

jj.style.backgroundColor = 'salmon';

// jj.setAttribute('name', 'ikan');

const ad = document.querySelector('section#a a');

ad.setAttribute('id', 'link');

const per = document.querySelector('.p2');






