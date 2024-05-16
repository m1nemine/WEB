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