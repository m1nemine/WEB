var app = new Vue({
    el: '#app',
    data: {
      isim: '',
      mail: '',
      radio2: '',
      date: '',
      mailFormat: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
      rangeValue: '',
      mesaj: ''
    },
    methods: {
      updateValue: function(val) {
        this.rangeValue = val;
      },
      checkForm: function() {

        
        if (this.isim == "" || this.mail == "" || this.radio2 == "" || this.date == ""|| this.mesaj == "") {
          alert("Lütfen tüm alanları doldurunuz.vue");
          return false;
        }
  
        if (!this.mail.match(this.mailFormat)) {
          alert("Lütfen geçerli bir e-mail adresi giriniz.vue");
          return false;
        }
       
      }
    }
  });

  e.preventDefault();
  
 
  var xhr = new XMLHttpRequest();
  xhr.open("POST", 'iletisim.php', true);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");


  var data = "isim=" + this.isim + "&mail=" + this.mail + "&radio2=" + this.radio2 + "&date=" + this.date + "&mesaj=" + this.mesaj;


  xhr.send(data);

 
  xhr.onload = function() {
    if (xhr.status == 200) {
   
      window.location.href = 'iletisim.php';
    } else {
    
      alert("Bir hata oluştu: " + xhr.status);
    }
  }

  

