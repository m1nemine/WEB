// script.js
var mainimg=document.querySelector('#slayt')
var images=['images/gorsel1.jpg','images/gorsel2.jpg','images/gorsel3.jpg','images/gorsel4.jpg']
var num=0;
const auto=true;
const IntervalTime=5000;
let slideInterval

// function next() {
//   num++;
//   if(num >= images.length) {
//       num = 0;
//   }
//   mainimg.src = images[num];
//   mainimg.parentNode.href = links[num]; // Linki güncelle
// }

// function back() {
//   num--;
//   if(num < 0) {
//       num = images.length - 1;
//   }
//   mainimg.src = images[num];
//   mainimg.parentNode.href = links[num]; // Linki güncelle
// }

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

// fetch('https://api.ibb.gov.tr/iett/UlasimAnaVeri/HatDurakGuzergah.asmx?wsdl')
//   .then(response => response.text())
//   .then(data => {
//     // Veriyi işleyebilirsiniz
//     document.getElementById('veriGoster').innerHTML = data; // Veriyi HTML'e ekleyebilirsiniz
//   })
//   .catch(error => {
//     console.error('Hata oluştu:', error);
//   });
//   const url = 'https://pizza-and-desserts.p.rapidapi.com/pizzas';
// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'fbe8344401mshac1e70a23f2cffap16ce7bjsn9d4ba5772fce',
// 		'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
// 	}
// };

// try {
// 	const response = await fetch(url, options);
// 	const result = await response.text();
// 	console.log(result);
// } catch (error) {
// 	console.error(error);
// }

async function fetchPizza() {
  const url = 'https://pizza-and-desserts.p.rapidapi.com/pizzas';
  const options = {
      method: 'GET',
      headers: {
          'X-RapidAPI-Key': 'fbe8344401mshac1e70a23f2cffap16ce7bjsn9d4ba5772fce',
          'X-RapidAPI-Host': 'pizza-and-desserts.p.rapidapi.com'
      }
  };

  try {
      const response = await fetch(url, options);
      const data = await response.json();
      const randomPizza = data[Math.floor(Math.random() * data.length)];
      const pizzaHtml = `
          <div class="pizza">
              <img src="${randomPizza.image}" alt="${randomPizza.name}">
              <h2>${randomPizza.name}</h2>
          </div>
      `;
      document.getElementById('pizzaContainer').innerHTML = pizzaHtml;
  } catch (error) {
      console.error(error);
  }
}

fetchPizza();


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

