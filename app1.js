// DOM Manipulation
//buat element baru
const pbaru = document.createElement('p');
const tekspbaru = document.createTextNode('paragraf baru');


//simpan tulisan ke dalam paragraf
pbaru.appendChild(tekspbaru);

//simpan pbaru di akhir section A
const secA = document.querySelector('#a');
secA.appendChild(pbaru);

const libaru = document.createElement('li');
const textlibaru = document.createTextNode('item baru');

libaru.appendChild(textlibaru);

const ull = document.querySelector('section#b ul');
const li2 = ull.querySelector('li:nth-child(2)');

ull.insertBefore(libaru, li2);


const lin = secA.querySelector('a');

secA.removeChild(lin);


const secB = document.querySelector('#b');

const p4 = secB.querySelector('p');

const hh2baru = document.createElement('h2');
const h2texbaru = document.createTextNode('Judul Baru');

hh2baru.appendChild(h2texbaru);

secB.replaceChild(hh2baru, p4);

pbaru.style.backgroundColor = 'lightgreen';