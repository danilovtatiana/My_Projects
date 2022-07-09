// GO TO TOP BUTTON

//Get the button:
mybutton = document.getElementById("myBtn");

window.onload = (event) => {
  // loadArticles(articles);
  // loadMenuItems(event);
  // loadPortfolio(portfolio);
  loadMap(maps);
  // loadSlides(slides);
  loadAddressContacts(addressContacts);
  // loadEmailContacts(emailContacts);
}

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0;
}


function currentYPosition() {
    // Firefox, Chrome, Opera, Safari
    if (self.pageYOffset) return self.pageYOffset;
    // Internet Explorer 6 - standards mode
    if (document.documentElement && document.documentElement.scrollTop)
        return document.documentElement.scrollTop;
    // Internet Explorer 6, 7 and 8
    if (document.body.scrollTop) return document.body.scrollTop;
    return 0;
}


function elmYPosition(eID) {
    var elm = document.getElementById(eID);
    var y = elm.offsetTop;
    var node = elm;
    while (node.offsetParent && node.offsetParent != document.body) {
        node = node.offsetParent;
        y += node.offsetTop;
    } return y;
}


function smoothScroll(eID) {
    var startY = currentYPosition();
    var stopY = elmYPosition(eID);
    var distance = stopY > startY ? stopY - startY : startY - stopY;
    if (distance < 100) {
        scrollTo(0, stopY); return;
    }
    var speed = Math.round(distance / 100);
    if (speed >= 20) speed = 20;
    var step = Math.round(distance / 25);
    var leapY = stopY > startY ? startY + step : startY - step;
    var timer = 0;
    if (stopY > startY) {
        for ( var i=startY; i<stopY; i+=step ) {
            setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
            leapY += step; if (leapY > stopY) leapY = stopY; timer++;
        } return;
    }
    for ( var i=startY; i>stopY; i-=step ) {
        setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
        leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
    }
  return false;
}
//SHOWSLIDE-CONTAINER

// const loadSlides = (list) => {
//   const slidesArray = [];
//   const parent = document.getElementById('slideshow-container');
//   list.forEach((slide) => {
//     const htmlSlide = `<div class="mySlides fade"><img ${slide.slideSource}></div>`;
//     slidesArray.push(htmlSlide);
//   }) ;
//   parent.innerHTML = slidesArray.join('');
// };

let slideIndex = 1;
showSlides(slideIndex);


// // Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// const loadMenuItems = (event) => {
//   console.log('event ===> ', event)
//   const parent = document.getElementById('navigation-menu');
//   const menuArray = [];
//   navMenulist.forEach(item => {
//     menuArray.push(`<li class="nav__item"><a href="${item.link}" id="nav_element" class="nav__link">${item.title}</a></li>`);
//   });
//   parent.innerHTML = menuArray.join('');
// }

// const loadArticles = (list) => {
//     const articleArray = [];
//     const parent = document.getElementById('side__content');

//   list.forEach( (article) => {
//     const htmlArticle = 
//     `<h2 class="content__item">${article.title}</h2>
//         <span class="content__description"><i>${article.content}</i></span> `
//     articleArray.push(htmlArticle);
//   })
//   parent.innerHTML = articleArray.join('');
// }

// const loadPortfolio = (list) => {
//   const portfolioArray = [];
//   const parent = document.getElementById('portfolio')
//   list.forEach((image) => {
//     const htmlPortfolio =`<img class="myImg" src= ${image.imgSource}>`
//     portfolioArray.push(htmlPortfolio);
//   });
//   parent.innerHTML = portfolioArray.join('');
// }

const loadAddressContacts = (list) => {
  const adressArray = [];
  const parent = document.getElementById('contact');
  list.forEach((contact) =>{
    const htmlAdressContact = `<i class='bx bx-map'></i><span id="contact_us">${contact.addressContact}</span><br>`;
    adressArray.push(htmlAdressContact);
  });
  parent.innerHTML = adressArray.join('');
}

const loadMap = (list) => {
  const mapArray = [];
  const parent = document.getElementById('maps')
  list.forEach((address) => {
    const htmlAddress = `<iframe src= ${address.mapAddress} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`;
    mapArray.push(htmlAddress);
  });
  parent.innerHTML = mapArray.join('');
};

// const loadEmailContacts = (list) => {
//   const emailArray = [];
//   const parent = document.getElementById('contact');
//   list.forEach((contact) => {
//     const htmlEmailContact = `<i class='bx bx-envelope'></i><span id="contact_us">${contact.emailContact}</span><br>`;
//     emailArray.push(htmlEmailContact);
//   });
//   parent.innerHTML = emailArray.join('');
// }

// create references to the modal...
var modal = document.getElementById("myModal");

// to all images
var images = document.getElementById("about__img");
// the image in the modal
var modalImg = document.getElementById("img01");

images.onclick = function(){
  modal.style.display = "block";
  modalImg.src = this.src;
}

// var showModal = function(){
//     modal.style.display = "block";
//     modalImg.src = this.src;
// }
// Go through all of the images 
// for (var i = 0; i <images.length; i++){
//   images[i].addEventListener('click', showModal);
// }

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}


function closeM() {
  document.getElementById("modal-gall").style.display = "none"; 
}
function popUp(element) {
    document.getElementById("modal-gall").style.display = "flex"; 
    document.getElementById("modal-slides").src = element.src; 
}
var imageIndex = 1;
function slideR(n) {
  showSlide((imageIndex += n));
}

function showSlide(n) {
  var slides = document.querySelectorAll("#portfolio img");

  if (n > slides.length) {imageIndex = 1;}
  if (n < 1) {imageIndex = slides.length;}
  document.getElementById("modal-slides").src = slides[imageIndex - 1].src;
}





/// mock objects 

// const navMenulist = [
//   {title: 'Home',link: 'home', id: 'home'},
//   {title: 'Portofoliu', link: 'portfolio', id: 'portfolio'},
//   {title: 'Magazine', link: 'stores', id: 'stores'},
//   {title: 'Contact', link: 'contact', id: 'contact'},
// ]

// const articles = [
//   {
//     title: 'Despre noi',
//     content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus a eligendi et omnis natus quas modi ut nihil, maxime sequi adipisci minus dolore.'
//   },
//   {
//     title: 'Design',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius quam consequuntur alias saepe, repellendus, quia in perspiciatis minus amet autem quas'
//   },
//   {
//     title: 'Proiectare 3D',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius quam consequuntur alias saepe, repellendus, quia in perspiciatis minus amet autem quas'
//   },
//   {
//     title: 'Accesorii',
//     content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis eius quam consequuntur alias saepe, repellendus, quia in perspiciatis minus amet autem quas'
//   }
// ]

// const portfolio = [
//   {imgSource: "https://i.pinimg.com/736x/64/2a/8d/642a8dfa058c4917a42d9276f5ace279.jpg"},
//   {imgSource: "https://ae05.alicdn.com/kf/Sf7267465e8ee44c9a2ef2fefb53675f8s/Vintage-Birds-Print-Country-Curtains-for-Living-Room-Bedroom-Decorative-Kitchen-Curtains-Drapes-Window-Treatments-Rustic.jpg"},
//   {imgSource: "https://ae05.alicdn.com/kf/H1944882923494016ba7c718b2564eb16s/Modern-Blackout-Curtains-for-Living-Room-Decoration-Stitching-Color-Curtain-for-The-Bedroom-Grey-Blue-Curtain.jpg"},
//   {imgSource: "https://www.ikea.com/kr/en/images/products/sanela-room-darkening-curtains-1-pair-dark-blue__0887619_pe638577_s5.jpg?f=s"},
//   {imgSource: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAGkHcnpRtxFIc-jrWXKWQaQzcj8ImOVilLQ&usqp=CAU"},
//   {imgSource: "https://www.curtaincompany.com.au/assets/images/services/services-curtain.jpg"},

// ]

const maps = [
  
  {mapAddress:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.438129253194!2d25.614176115786524!3d45.642022579103354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35c87c94b7cd9%3A0x52fe09dbd2dc111c!2sBulevardul%20Muncii%203%2C%20Bra%C8%99ov%20500281!5e0!3m2!1sen!2sro!4v1647460308451!5m2!1sen!2sro"},
  {mapAddress:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.269725227592!2d25.61937691578656!3d45.64540487910349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35c62d6751271%3A0x3cf997af2322c7a2!2sBloc%20S20%2C%20Calea%20Bucure%C8%99ti%2044%2C%20Bra%C8%99ov%20500365!5e0!3m2!1sen!2sro!4v1647460363629!5m2!1sen!2sro"},
  {mapAddress:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.4953703675164!2d25.614386515786478!3d45.640872879103384!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35c889dffa55b%3A0xa85aa3c4332bdf43!2sMagnolia%20Shopping%20Center!5e0!3m2!1sen!2sro!4v1647460428098!5m2!1sen!2sro"},
  {mapAddress:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2789.3543442002033!2d25.59083891578654!3d45.643705379103395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b35b7bc1293009%3A0x386a671a9caa8ed4!2sStrada%20Republicii%2041%2C%20Bra%C8%99ov%20500030!5e0!3m2!1sen!2sro!4v1647460462961!5m2!1sen!2sro"},

]


// const slides = [
//   {slideSource: "https://shop.static.ingka.ikea.com/category-images/Category_curtains.jpg"},
//   {slideSource: "https://cdn.apartmenttherapy.info/image/upload/f_auto,q_auto:eco,w_730/at%2Fproduct%20listing%2Fshade-store-pinch-pleat-drapery" },
//   {slideSource: "https://images.squarespace-cdn.com/content/v1/53cd6ad6e4b03157ad28c10f/1485977954333-EZRYZLH4YQQ4B2X0X0ZQ/ke17ZwdGBToddI8pDm48kJGvPks7W-x-ufyzB9Tw0e1Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpzwb00BviQxzGCm133ffOYzwwypB4bD5ISIaxBEu0_aLYDapOC4CyiXJt27lAtrGXs/Plantation+Shutters%2C+Shutters%2C+Louvered+Shutters%2C+Plantation+Blinds"},
//   {slideSource: "https://i.pinimg.com/originals/4e/37/13/4e3713ef730eeb3a2ffe6815057e934a.jpg"},
//   {slideSource: "https://lirp.cdn-website.com/df1809b06a36453bbff1f1b772ccd3f8/dms3rep/multi/opt/blogimage-1920w.jpg"},
//   {slideSource: "https://www.decorsnob.com/wp-content/uploads/Blinds-And-Curtains.jpg"},
// ]

const addressContacts = [
  {addressContact: 'Bulevardul Muncii 3, Brașov'},
  {addressContact: 'Calea București 44, Brașov'},
  {addressContact: 'Magnolia Shopping Center, Strada Crișului 18, Brașov'},
  {addressContact: 'Strada Republicii 41, Brașov'},
]

const emailContacts = [
  {emailContact: 'info@jeorjette.ro'},
]
  // 
  // {phoneContact: '0723-173-184'},



