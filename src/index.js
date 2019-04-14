import $ from 'jquery';
import './style.scss';


let counter = -1;

function secCounter() {
  setInterval(() => { $('#main').html(`You've have been on this page for ${counter += 1} seconds.`); }, 1000);
}

secCounter();

// QUESTION: WHY DOESN'T THIS WORK?

// let num = 0;
//
// function increment(){
//   $('#main').html(`You have been on this page for ${ num++ } seconds.`);
// }
//
// function print(){
//   setInterval(increment(), 1000);
// }
//
// print();
