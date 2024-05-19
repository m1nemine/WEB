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
