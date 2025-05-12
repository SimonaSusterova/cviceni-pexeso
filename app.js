// console.log('Funguju!')

// const karticky = document.querySelectorAll('.karticka')

// karticky[0].classList.remove('otocena')


//řešení:
const karticky = document.querySelectorAll('.karticka')

const otocitKarticku = (event) => {
	event.target.classList.toggle('otocena')
}

karticky.forEach((karticka) => {
	karticka.addEventListener('click', otocitKarticku)
})