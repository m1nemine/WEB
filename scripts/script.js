// script.js
var mainimg=document.querySelector('#slayt')
var images=['images/slider1.jpg','images/slider3.jpg','images/slider2.jpg','images/slider4.jpg']
var num=0;
const auto=true;
const IntervalTime=8000;
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
          var targetElementId = 'resim' + (index + 1); 
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


function control(form) {
  var isim = form.isim.value;
  var mail = form.mail.value;
  var radio = form.radio.value;
  var radio2 = form.radio2.value;
  var date = form.date.value;

  if (isim == "" || mail == "" || radio == "" || radio2 == "" || date == "") {
      alert("Lütfen tüm alanları doldurunuz.j");
      return false;
  }

  var mailFormat = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  if (!mail.match(mailFormat)) {
      alert("Lütfen geçerli bir e-mail adresi giriniz.j");
      return false;
  }

  return true;
}
function updateValue(val) {
document.getElementById('rangeValue').innerText = val;
}

var app = new Vue({
  el: '#app',
  data: {
    isim: '',
    mail: '',
    radio2: '',
    date: '',
    mailFormat: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
    rangeValue: ''
  },
  methods: {
    updateValue: function(val) {
      this.rangeValue = val;
    },
    checkForm: function() {
      if (this.isim == "" || this.mail == "" || this.radio2 == "" || this.date == "") {
        alert("Lütfen tüm alanları doldurunuz.vue");
        return false;
      }

      if (!this.mail.match(this.mailFormat)) {
        alert("Lütfen geçerli bir e-mail adresi giriniz.vue");
        return false;
      }

      window.location.href = 'iletisim.php';
    }
  }
});




