'use strict';

const modal = document.querySelector('.modal');
const overlay = document. querySelector('.overlay');
const btnCloseModal = document.querySelector('.show-modal');
console.log(btnOpenModal);
for (let i = 0; i < btns opensModal.length; i++)
btnsOpenModal[i].addEventListener('click', function(){console.log('button clicked');
modal.classList.remove('hidden');
overlay.classList.remove('hidden');
});

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');

};
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click',
openModal);

btnOpenModal.addEventListener('click',
closenModal);
overlay.addEventListener('click',
closeModal);

document.addEventListener('keydown', function (e){console.log(e.key)});
if (ed.key === 'escape') {closeModal();}

}


});
