const kpop = require('kpop')
const hangul = require('./hangul.js')

const inputField = document.querySelector('.inputField')
const assembledBtn = document.querySelector('.btn.assambled')
const deassambledBtn = document.querySelector('.btn.deassambled')
const output = document.querySelector('.output')

const convert = () => {
	const text = inputField.value
	if (text.length > 0) {
		if (true) {
			if (assembledBtn.classList.contains('active')) {
				output.innerText = kpop.hangulify(text)
			}
			if (deassambledBtn.classList.contains('active')) {
				output.innerText = hangul.d(kpop.hangulify(text)).join('')
			}
		} else {
			output.innerText = ''
		}
	} else {
		output.innerText = ''
	}
}

const setMode = (mode, shouldConvert = false) => {
	if (mode === 'assambled') {
		assembledBtn.classList.add('active')
		deassambledBtn.classList.remove('active')
	}
	if (mode === 'deassambled') {
		assembledBtn.classList.remove('active')
		deassambledBtn.classList.add('active')
	}
	if (shouldConvert) {
		convert()
	}
}

assembledBtn.addEventListener('click', () => setMode('assambled', true))
deassambledBtn.addEventListener('click', () => setMode('deassambled', true))

inputField.addEventListener('input', convert)

convert()
