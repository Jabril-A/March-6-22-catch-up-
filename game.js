{
    "sigleQuote"; true,
    "arrowParens"; "avoid"
}

'use strict';
console.log(doument.querySelector('.message').
textContent);
//video 70
document.querySelector('message').textContent ='good job';

//75-77
document.querySelector('number').textContent ='13';
document.querySelector('score').textContent ='10';

document.querySelector('guess').value = 23;
console.log(document.querySelector('.guess').value);

document.querySelector('.check')
.addEventListener('click', function()
{const guess = Number(document.querySelector('.guess'))})
 if (!guess)
 { document.querySelector('.message').textConten = 'no number'
 ;}
 else if (guess=== secretNumber)
 { document.querySelector('.message').textConten = 'correct';
document.querySelector('body')
.style.backgroundColor = '#60b347';
 document.querySelector('.number').style.width='30rem';
}
//mar 6 22 76-80
 else if (guess > secretNumber)
 { if (score > 1) {}};
 document.querySelector('again').addEventListener
 ('click',function(){
   score = 20;
   secretNumber = Math.trunc(math.random()*20) + 1;
   document.querySelector('.message').textContent = 'start guessing...';
   document.querySelector('.score').textContent =
   score;
   document.querySelector('.number').textContent = '?';
   document.querySelector('.guess').value = '';

   document.querySelector('body').style.
   backgroundColor = '#222';
   document.querySelector('.Number').style.width =
   '15rem';
 });
 if (guess !== secretNumber) {
if (score > 1) { document.querySelector('.message').textContent =
guess > secretNumber ? ' tooo high!' : 'tooo low!';
score--;
document.querySelector('.score').textContent =
score--;} else {
  document.querySelector('.message').textContent
  = ' You lost 😔'
  document.querySelector('.score').textContent =
  0;
} else if (guess === secretNumber) {
displayMessage('correct Number!');
document.querySelector('.number').textContent =
secretNumber;

document.querySelector('.Number').textContent =
secretNumber;
document.querySelector('body').style.backgroundColor = '
#60b347';
document.querySelector('.number')style.width =
'30rem';

if (score> highscore) {
  highscore = score;
  document.querySelector('.highscore').
}

 document.querySelector('.again').addeventlistener('click', function ())
 {
   score = 20;
   secretNumber = Math.trunc(Math.random()* 20 ) + 1;

   document.querySelector('.score').textContent =
   score;
   document.querySelector('.score').textContent =
  '?';
  document.querySelector('.guess').value = '';
   document.querySelector('body').style.
   backgroundColor = '#222';
   document.querySelector('.number').style.width =
   '15rem';
 }

});
