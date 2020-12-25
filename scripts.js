jQuery(document).ready(function($){
  $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $('html,body').stop().animate({scrollTop: $($(this).attr('href')).offset().top}, 1000);
});
});
function changeItem(num) {
  const image = document.getElementById('img' + num);
  image.style.opacity = '1';
  image.style.transition = "all 0.5s";
}

function rechangeItem(num) {
  const image = document.getElementById('img' + num);
  image.style.opacity = '0';
  image.style.transition = "all 0.5s";
}

$(function(e) {
        $('.one-employee').on("click", function(e){
            window.open("employeePage.html?&" + e.target.id, "self");

            });
        });
