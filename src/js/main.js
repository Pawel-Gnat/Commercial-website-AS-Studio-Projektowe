const menuBtn = document.querySelector('.menu__btn')
const animateBtn = document.querySelector('.active')
const displayLinks = document.querySelector('.display')
const linksBox = document.querySelector('.menu__box')
const body = document.querySelector('body')
const disableScroll = document.querySelector('.overflow')
const menuLinks = document.querySelectorAll('.menu__box--links a')
const buttonLines = Array.from(document.querySelectorAll('.menu__btn--line')) // an array with my button menu lines

function toggleActive() {
	// function animate my hamburger icon, show mobile menu and prevent vertical scroll
	buttonLines.forEach(
		// function triggers my array elements (hamburger menu lines) and animate them
		line => {
			line.classList.toggle('active')
		}
	)
	linksBox.classList.toggle('display')
	body.classList.toggle('overflow')
}

menuLinks.forEach(links => {
	// loop function that closes my mobile menu view while I select one of website links
	links.addEventListener('click', () => {
		buttonLines.forEach(line => {
			line.classList.toggle('active')
		})
		linksBox.classList.toggle('display')
		body.classList.toggle('overflow')
	})
})

menuBtn.addEventListener('click', toggleActive)


