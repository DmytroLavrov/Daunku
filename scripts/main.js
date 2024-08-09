// ========== INFO-DOTS ==========
const infoBtns = document.querySelectorAll('.info-dot');
const infoHints = document.querySelectorAll('.info-hint');

// Сlick on the buttons with hints
infoBtns.forEach((btn) => {
  btn.addEventListener('click', function(e) {
    e.stopPropagation();
    
    infoHints.forEach((hint) => {            
			if (this.parentNode.querySelector('.info-hint') !== hint) {
				hint.classList.add('none');
			}
    });

    this.parentNode.querySelector('.info-hint').classList.toggle('none');
  });
});

// Сlose all tooltips when clicking on the entire document
document.addEventListener('click', closeHints);

function closeHints() {
  infoHints.forEach((hint) => {
    hint.classList.add('none');
  })
}

// Prevent closing the hint when clicking on it
infoHints.forEach((hint) => {
  hint.addEventListener('click', (e) => e.stopPropagation());
});

// ========== Swiper slider ==========
const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    700: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1081: {
      slidesPerView: 3,
      spaceBetween: 32,
    },
  },
});

// ========== Popup-Burger ==========
const body = document.body;
const burger = document.querySelector('.burger');
const popup = document.querySelector('.popup');
const navList = document.querySelector('.nav-list').cloneNode(true);
const cartIcon = document.querySelector('.cart').cloneNode(true);

// Create a text node with the text 'Cart'
const cartText = document.createTextNode('Cart');

// Insert the text node as the first child of the cart link
cartIcon.insertBefore(cartText, cartIcon.firstChild);

// Add a click event listener to the burger button to handle menu toggling.
burger.addEventListener('click', burgerHandler);

// Function to handle the burger button click event.
function burgerHandler(e) {
  e.preventDefault();
  this.classList.toggle('burger--active');
  popup.classList.toggle('popup--open');
  body.classList.toggle('noscroll');
  renderPopup();
}

// Function to render the cloned navigation list into the popup.
function renderPopup() {
  popup.appendChild(navList);
  popup.appendChild(cartIcon);
  addEventListenersToClonedItems();
}

// Function to add click event listeners to each link in the cloned navigation list.
function addEventListenersToClonedItems() {
  const navListLinks = popup.querySelectorAll('.nav-list__link');
  navListLinks.forEach((link) => {
    link.addEventListener('click', () => {
      burger.classList.remove('burger--active');
      popup.classList.remove('popup--open');
      body.classList.remove('noscroll');
    })
  });
}

// ========== Swap blocks ==========
const careContainer = document.querySelector('.care__container');
const careContent = document.querySelector('.care__content');
const careImage = document.querySelector('.care__img');
const careHeader = document.querySelector('.care__header');

function swapBlocks() {
  if (window.innerWidth <= 1080) {
    if (!careContent.contains(careImage)) {
      careContainer.removeChild(careImage);
      careContent.insertBefore(careImage, careHeader.nextSibling);
    }
  } else {
    if (careContent.contains(careImage)) {
      careContent.removeChild(careImage);
      careContainer.appendChild(careImage);
    }
  }
}

swapBlocks();

window.addEventListener('resize', swapBlocks);