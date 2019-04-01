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
