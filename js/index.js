// Your code goes here

// Mouseover

//navigation
let nav = document.querySelector('nav');
nav.addEventListener(
	'mouseover',
	function(event) {
		event.target.style.color = 'orange';
		setTimeout(function() {
			event.target.style.color = '';
		}, 500);
	},
	false
);

// banner
const bannerImage = document.querySelector('.banner');

bannerImage.onload = function() {
	this.style.width = '100%';

	setTimeout(function() {
		bannerImage.setAttribute('src', 'https://placebeard.it/640x360');
	}, 500);
};

// change image
const compassImg = document.querySelector('.compass-img');
compassImg.addEventListener('click', function() {
	this.setAttribute('src', 'img/fun.jpg');
	this.style.borderRadius = '40%';
});

// scroll
let last_known_scroll_position = 0;
let ticking = false;
const header = document.querySelector('.main-navigation');
const navLinks = Array.from(document.querySelector('.nav').children);

navLinks.forEach(link => {
	link.addEventListener('click', evt => {
		evt.preventDefault();
	});
});

function doSomething(scroll_pos) {
	// Do something with the scroll position
	if (scroll_pos > 400) {
		header.style.backgroundColor = 'purple';
		header.style.color = 'white';

		navLinks.forEach(link => {
			link.style.color = 'white';
		});
	}

	if (last_known_scroll_position < 390) {
		document.querySelector('.main-navigation').style.backgroundColor = '#17A2B8';
	}
}

window.addEventListener('scroll', function(e) {
	last_known_scroll_position = window.scrollY;

	if (!ticking) {
		window.requestAnimationFrame(function() {
			doSomething(last_known_scroll_position);
			ticking = false;
		});

		ticking = true;
	}
});

const signup = evt => {
	if (evt.target.classList.contains('btn')) {
		const modal = document.getElementById('id01');
		modal.style.display = 'block';

		// When the user clicks anywhere outside of the modal, close it
		window.onclick = function(event) {
			if (event.target == modal) {
				modal.style.display = 'none';
			}
		};
	}
};

const pickContent = document.querySelector('.content-pick');
pickContent.addEventListener('click', signup);

// signup form
const inputsArr = Array.from(document.querySelectorAll('.form-container input'));
const errors = [];
let remember = false;

inputsArr.forEach(input => {
	if (input.type === 'text' || input.type === 'password') {
		input.addEventListener('focus', function() {
			if (this.value.trim() < 3) {
				this.nextElementSibling.style.display = 'block';
				this.nextElementSibling.style.color = 'red';
				this.nextElementSibling.style.fontSize = '16px';
				this.style.outline = 0;
				this.style.border = '1px solid red';
				this.nextElementSibling.innerHTML = `${this.previousElementSibling.innerHTML} is required`;
			}
			console.log(errors);
		});
	}

	if (input.type == 'checkbox') {
		input.addEventListener('change', function() {
			if (this.checked === true) {
				remember = true;
			}
		});
	}
});

//copy event
const copyText = document.querySelector('.funbus-intro');

copyText.addEventListener('copy', event => {
	const selection = document.getSelection();
	event.clipboardData.setData('text/plain', selection.toString().toUpperCase());
	event.preventDefault();
	copyText.style.color = 'maroon';
});
