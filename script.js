const bannerContent = document.getElementById('bannerContent')
const bannerImage = document.getElementById('bannerImage')
const bannerButton = document.getElementById('bannerButton')
const bannerStyleSwitch = document.getElementById('bannerStyleSwitch')
const alignmentStyleSwitch = document.getElementById('bannerAlignmentSwitch')
const bannerStyles = [
	{
		content: 'content--foreground',
		image: 'image--background',
	},
	{
		content: ['content--foreground', 'content--foreground--alt'],
		image: ['image--background']
	}
]

const alignmentStyles = [
	{
		content: ''
	}
]

let styleCounter = 0
const handleStyle = (styles, element1, element2) => {

	const removeClass = (element1, element2, index) => {
		if(typeof styles[index][Object.keys(styles[index])[0]] !== 'string'){
			styles[index][Object.keys(styles[index])[0]].forEach((c, i) => {
				element1.classList.remove(c)
			})
			styles[index][Object.keys(styles[index])[1]].forEach((c, i) => {
				element2.classList.remove(c)
			})
		}else {
			element1.classList.remove(styles[index][Object.keys(styles[index])[0]])
			element2.classList.remove(styles[index][Object.keys(styles[index])[1]])
		}
	}
	const addClass = (element1, element2, index) => {
		if(typeof styles[index][Object.keys(styles[index])[0]] !== 'string'){
			styles[index][Object.keys(styles[index])[0]].forEach((c, i) => {
				element1.classList.add(c)
			})
			styles[index][Object.keys(styles[index])[1]].forEach((c, i) => {
				element2.classList.add(c)
			})
		}else {
			element1.classList.add(styles[index][Object.keys(styles[index])[0]])
			element2.classList.add(styles[index][Object.keys(styles[index])[1]])
		}
	}

	if(styleCounter < styles.length){
		if(styleCounter !== 0){
			removeClass(element1, element2, styleCounter - 1)		
		}
		addClass(element1, element2, styleCounter)
		styleCounter++
	} else {
		removeClass(element1, element2, styleCounter - 1)
		styleCounter = 0
	}
}

bannerStyleSwitch.addEventListener('click', () => handleStyle(bannerStyles, bannerContent, bannerImage))
alignmentStyleSwitch.addEventListener('click', () => handleStyle(alignmentStyles, bannerContent, bannerButton))
