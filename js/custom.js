setTimeout(() => {
  jQuery(".app-description").css({
    opacity: 1,
    transform: "translateY(240px)",
  });
}, 200);

setTimeout(() => {
  jQuery(".app-title").css({
    opacity: 1,
    transform: "translateY(120px)",
  });
}, 500);


let animatedContact = false;
function animateContact() {
  animatedContact = true;

  $(".contact-us").css({
    transform: "translateY(0px)",
    opacity: 1,
  });
}

let animatedProducts = false;
function animateProducts() {
  animatedProducts = true;

  let items = $(".card-product");
  let total = items.length;
  items.each(function (i) {
    let initial = 1000;
    let delay = initial - (initial / (total + 1)) * (total - i);
    let speed = initial - (initial / (total + 1)) * i;
    let item = $(this);
    item.css({
      "transition-delay": delay + "ms",
      "transition-duration": speed + "ms",
      opacity: 1,
      transform: "translateX(0)",
    });
  });
}


const scrollContact = 1000;
const scrollProducts = 150;

const currentScrollTop = $(window).scrollTop();
currentScrollTop >= scrollContact && animateContact();
currentScrollTop >= scrollProducts && animateProducts();

$(window).scroll(function (event) {
  let scroll = $(window).scrollTop();
  console.dir(scroll);

  if (!animatedProducts && scroll >= scrollProducts) {
    animateProducts();
  }

  if (!animatedContact && scroll >= scrollContact) {
    animateContact();
  }
});

$(".card").on("mouseover", function (el) {
  $(el.currentTarget).css({
    transition: "all 200ms ease-in",
    transform: "scale(1.07)",
  });
});

$(".card").on("mouseleave", function (el) {
  $(el.currentTarget).css({
    transition: "all 200ms ease-in",
    transform: "scale(1)",
  });
});

$(".contactBtn").on("mouseover", function (el) {
  $(el.currentTarget).css({
    background:"orange"
  });
});

$(".catImg").on("mouseover", function (el) {
  $(el.currentTarget).css({
    transition: "all 1000ms ease-in",
    opacity:1
  });
});