import './index.scss';
let sp = {
	name: 'ss'
}

var isFold = true

window.onload = function () {
	calcWidth()
}

function calcWidth () {
	let clientWidth = document.body.clientWidth
	let navIcon = document.querySelector('.nav-list')
	let container = document.querySelector('.nav-ul')

	navIcon.addEventListener('click', function (e) {
		let ul = e.target.parentElement.querySelector('ul')
		if (isFold) {
			e.target.classList.remove('nj-nav-list-o')
			e.target.classList.add('nj-close-o')
			ul.classList.remove('hide')
			ul.classList.add('show')
			isFold = false
		} else {
			e.target.classList.remove('nj-close-o')
			e.target.classList.add('nj-nav-list-o')
			ul.classList.remove('show')
			ul.classList.add('hide')
			isFold = true
		}
	}, false)
	
	if (clientWidth > 450) {
		container.classList.remove('hide')
		navIcon.classList.add('hide')
		isFold = false
	} else {
		navIcon.classList.remove('hide')
		container.classList.add('hide')
		isFold = true
	}
}

window.addEventListener('resize', calcWidth, false)