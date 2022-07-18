const menuBtn = document.querySelector('.menu__btn') // menu button in the mobile view
const animateBtn = document.querySelector('.active') // class added to each of my menu button lines (to animate them)
const displayLinks = document.querySelector('.display') // background of the mobile view, after pressing the menu button
const linksBox = document.querySelector('.menu__box') // container of menu links in the mobile view
const body = document.querySelector('body') // html element
const disableScroll = document.querySelector('.overflow') // class set on body to prevent from vertical scroll (during active menu button)
const menuLinks = document.querySelectorAll('.menu__box--links a') // mobile view links
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
