 var slideIndex2 = 1;
 showSlides2(slideIndex2);

 function plusSlidesEscPUB(n) {
     showSlides2(slideIndex2 += n);
 }

 function currentSlide(n) {
     showSlides2(slideIndex2 = n);
 }

 function showSlides2(n) {
     var i;
     var slides2 = document.getElementsByClassName("Escuelas");
     if (n > slides2.length) {
         slideIndex2 = 1
     }
     if (n < 1) {
         slideIndex2 = slides2.length
     }
     for (i = 0; i < slides2.length; i++) {
         slides2[i].style.display = "none";
     }

     slides2[slideIndex2 - 1].style.display = "block";
 }

    var slideIndex3 = 1;
    showSlides3(slideIndex3);

    function plusSlidesEscPRI(n) {
        showSlides3(slideIndex3 += n);
    }

    function currentSlide(n) {
        showSlides3(slideIndex3 = n);
    }

    function showSlides3(n) {
        var i;
        var slides3 = document.getElementsByClassName("Colegios");
        if (n > slides3.length) {
            slideIndex3 = 1
        }
        if (n < 1) {
            slideIndex3 = slides3.length
        }
        for (i = 0; i < slides3.length; i++) {
            slides3[i].style.display = "none";
        }

        slides3[slideIndex3 - 1].style.display = "block";
    }