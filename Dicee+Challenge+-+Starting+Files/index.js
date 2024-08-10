const n = 6;
const rn = Math.floor((Math.random() * n) + 1)
const rn2 = Math.floor((Math.random() * n) + 1)

console.log(rn);
console.log(rn2);

const d1 = document.querySelector('body > div > div:nth-child(2) > img');
const d2 = document.querySelector('body > div > div:nth-child(3) > img');
const wt = document.querySelector('body > div > h1');

if (rn > rn2) {
    wt.textContent = 'p1 wins'
} else if (rn < rn2) {
    wt.textContent = 'p2 wins'
} else {
    wt.textContent = 'draw'

}



console.log(d1)
console.log(d2)

const pname = "./images/dice"+rn+".png"
const pname2 = "./images/dice"+rn2+".png"

console.log(pname);
console.log(pname2);

d1.setAttribute('src', pname);
d2.setAttribute('src', pname2);