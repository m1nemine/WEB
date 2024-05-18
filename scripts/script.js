// script.js
var mainimg=document.querySelector('#slayt')
var images=['images/slider1.jpg','images/slider3.jpg','images/slider2.jpg','images/slider4.jpg']
var num=0;
const auto=true;
const IntervalTime=5000;
let slideInterval

function next(){
  num++
  if(num>=images.length){
    num=0;
    mainimg.src=images[num]
    
  }
  else{
    mainimg.src=images[num]
    
  }
}

function back(){
  num--
  if(num<0){
    num=images.length-1
    mainimg.src=images[num]
  }
  else{
    mainimg.src=images[num]
  }
}


if(auto){
  slideInterval=setInterval(next,IntervalTime)
}


$(document).ready(function(){
  $('#menu-btn').click(function(){
      $('.header .navbar').toggle();
  });
});


$(window).on('resize', function() {
  var win = $(this); // this = window
  if (win.width() >= 800) {
      $('#menu-btn').trigger('click');
  }
});
// Trigger resize event immediately
$(window).on('resize', function() {
  var win = $(this); // this = window
  if (win.width() >= 800 && !$('.header .navbar').is(':visible')) {
      $('#menu-btn').trigger('click');
  }
});

function validateForm() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var subject = document.getElementById('subject').value;
  var message = document.getElementById('message').value;
  var contact = document.querySelector('input[name="contact"]:checked').value;
  var subscribe = document.getElementById('subscribe').checked;
  var country = document.getElementById('country').value;
  var meetingTime = document.getElementById('meeting-time').value;

  if (!name || !email || !subject || !message || !contact || !country || !meetingTime) {
      alert('Lütfen tüm alanları doldurunuz.');
      return false;
  }

  var re = /\S+@\S+\.\S+/;
  if(!re.test(email)) {
      alert('Lütfen geçerli bir e-posta adresi giriniz.');
      return false;
  }

  alert('Form başarıyla gönderildi.');
  return true;
}


document.addEventListener("DOMContentLoaded", function() {
  var images = document.querySelectorAll('.carousel-item img');

  images.forEach(function(img, index) {
      img.addEventListener('click', function() {
          var targetElementId = 'resim' + (index + 1); // Her fotoğraf için farklı id oluşturuluyor
          var targetElement = document.getElementById(targetElementId);
          if (targetElement) {
              targetElement.scrollIntoView({ behavior: 'smooth' });
          }
      });
  });
});






async function fetchRandomCatImage() {
  const url = 'https://api.thecatapi.com/v1/images/search';
  try {
      const response = await fetch(url);
      const data = await response.json();
      const catImage = data[0].url;
      return catImage;
  } catch (error) {
      console.error(error);
  }
}

fetchRandomCatImage().then(catImage => {
  document.getElementById('catImageContainer').innerHTML = `<img src="${catImage}" alt="Random Cat"><h2>her türlü kedi görseli</h2>`;
});



async function fetchRandomCharacter() {
  const url = 'https://rickandmortyapi.com/api/character';
  try {
      const response = await fetch(url);
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const character = data.results[randomIndex];
      return {
          name: character.name,
          image: character.image
      };
  } catch (error) {
      console.error(error);
  }
}

fetchRandomCharacter().then(character => {
  document.getElementById('characterContainer').innerHTML = `<img src="${character.image}" alt="${character.name}"><h2>Rick and Morty karakterleri</h2><h2>${character.name}</h2>`;
});




async function fetchRandomStarWarsCharacter() {
  const url = 'https://swapi.dev/api/people/';
  try {
      const response = await fetch(url);
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const character = data.results[randomIndex];
      const characterId = character.url.match(/\/([0-9]*)\/$/)[1];
      return {
          name: character.name,
          image: `https://starwars-visualguide.com/assets/img/characters/${characterId}.jpg`
      };
  } catch (error) {
      console.error(error);
  }
}

fetchRandomStarWarsCharacter().then(character => {
  document.getElementById('starWarsCharacterContainer').innerHTML = `<img src="${character.image}" alt="${character.name}"><h2>Star Wars karakterleri</h2><h2>${character.name}</h2>`;
});
async function fetchRandomHarryPotterCharacter() {
  const url = 'http://hp-api.herokuapp.com/api/characters';
  try {
      const response = await fetch(url);
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.length);
      const character = data[randomIndex];
      return {
          name: character.name,
          image: character.image
      };
  } catch (error) {
      console.error(error);
  }
}

// new Vue({
//   el: '#contactForm',
//   methods: {
//     validateFormVue: function () {
//       var name = document.getElementById('name').value;
//       var email = document.getElementById('email').value;
//       var subject = document.getElementById('subject').value;
//       var message = document.getElementById('message').value;
//       var contact = document.querySelector('input[name="contact"]:checked').value;
//       var subscribe = document.getElementById('subscribe').checked;
//       var country = document.getElementById('country').value;
//       var meetingTime = document.getElementById('meeting-time').value;

//       if (!name || !email || !subject || !message || !contact || !country || !meetingTime) {
//         alert('Lütfen tüm alanları doldurunuz.');
//         return false;
//       }

//       var re = /\S+@\S+\.\S+/;
//       if(!re.test(email)) {
//         alert('Lütfen geçerli bir e-posta adresi giriniz.');
//         return false;
//       }

//       alert('Form başarıyla gönderildi.');
//       return true;
//     }
//   }
// })

