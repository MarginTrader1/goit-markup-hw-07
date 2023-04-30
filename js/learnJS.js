// btnsEl = document.querySelector("button");
// console.log(btnsEl);
// console.log(btnsEl.classList);

// btnsEl.classList.add(`qweqwe`, `rtert`, `asder`);
// console.log(btnsEl.classList);

// btnsEl.classList.remove(`asder`);
// console.log(btnsEl.classList);

// btnHeroEl = document.querySelector(".hero-button");
// console.log(btnHeroEl);


// btnHeroEl.addEventListener(`click`, () => {
//   btnHeroEl.classList.toggle(`button`)
// });

// const currentPage = './index.html';

// const linkItem = document.querySelector(`.logo[href="${currentPage}"]`); 

// console.log(linkItem);

// linkItem.classList.add(`.social-link`);

const newTitleEl = document.createElement('h2'); 
console.log(newTitleEl);

newTitleEl.classList.add('team-title');
newTitleEl.textContent = 'Hello World';


document.body.appendChild(newTitleEl);
