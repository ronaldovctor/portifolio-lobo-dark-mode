const storeTheme = (theme) => {
	localStorage.setItem('theme', theme)
}

const getThemes = () => {
	const colorThemes = document.querySelectorAll('[name="theme"]')
	console.log(colorThemes)

	colorThemes.forEach((themeOption) => {
		themeOption.addEventListener('click', () => {
			storeTheme(themeOption.id)
		})
	})
}

window.addEventListener('load', () => {
	getThemes()
	const storedTheme = window.localStorage.getItem('theme')
	console.log(storedTheme)
	if (storedTheme) {
		const themeItem = document.querySelector(`#${storedTheme}`)
		themeItem.setAttribute('checked', true)
	}
})
