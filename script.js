const banner = document.querySelector('.banner')
const bannerContent = document.getElementById('bannerContent')
const bannerImage = document.getElementById('bannerImage')
const bannerButton = document.getElementById('bannerButton')
const bannerStyleSwitch = document.getElementById('bannerStyleSwitch')
const bannerAlignmentSwitch = document.getElementById('bannerAlignmentSwitch')
const bannerColorSwitch = document.getElementById('bannerColorSwitch')

const bannerStyles = [
	{
		content: [],
		image: ['image--circle']
	},
	{
		content: ['content--foreground'],
		image: ['image--background']
	},
	{
		content: ['content--foreground'],
		image: ['image--background', 'image--background--cover']
	},
	{
		content: ['content--foreground', 'content--foreground--alt', 'content--foreground--alt--bottom'],
		image: ['image--background']
	},
	{
		content: ['content--foreground', 'content--foreground--alt', 'content--foreground--alt--right'],
		image: ['image--background']
	},
]

const alignmentStyles = [
	{
		content: ['content--alignCenter'],
		button: ['content__button--alignCenter']
	},
	{
		content: ['content--alignEnd'],
		button: ['content__button--alignRight']
	},
]

const colorStyles = [
	{
		content: ['content--black'],
		image: ['image--black']
	},
	{
		content: ['content--purple'],
		image: ['image--purple']
	},
	{
		content: ['content--pink'],
		image: ['image--pink']
	},
	{
		content: ['content--yellow'],
		image: ['image--yellow']
	},
	{
		content: ['content--blue'],
		image: ['image--blue']
	},
	{
		content: ['content--teal'],
		image: ['image--teal']
	},
]



let bannerStyleCounter = 0
let bannerAlignmentCounter = 0
let bannerColorCounter = 0
const handleStyle = (styles, element1, element2, counter) => {
	const removeClass = (element1, element2, style1, style2) => {
		if(style1){
			style1.forEach((c, i) => {
				element1.classList.remove(c)
			})		
		}
		if(style2){
			style2.forEach((c, i) => {
				element2.classList.remove(c)
			})		
		}

	}
	const addClass = (element1, element2, style1, style2) => {
		if(style1){
			style1.forEach((c, i) => {
				element1.classList.add(c)
			})		
		}
		if(style2){
			style2.forEach((c, i) => {
				element2.classList.add(c)
			})		
		}

	}
	if(counter < styles.length){
		if(counter !== 0){
			removeClass(
				element1, 
				element2, 
				styles[counter-1][Object.keys(styles[counter-1])[0]], 
				styles[counter-1][Object.keys(styles[counter-1])[1]]
			)		
		}
		addClass(
				element1, 
				element2, 
				styles[counter][Object.keys(styles[counter])[0]], 
				styles[counter][Object.keys(styles[counter])[1]]
			)
	} else {
		removeClass(
				element1, 
				element2, 
				styles[counter-1][Object.keys(styles[counter-1])[0]], 
				styles[counter-1][Object.keys(styles[counter-1])[1]]
			)
	}
}

bannerStyleSwitch.addEventListener('click', (e) => {
	e.stopPropagation()
	handleStyle(bannerStyles, bannerContent, bannerImage, bannerStyleCounter)
	if(bannerStyleCounter < bannerStyles.length ){
		bannerStyleCounter++
	}else {
		bannerStyleCounter = 0 
	}
})
bannerImage.addEventListener('click', (e) => {
	e.stopPropagation()
	handleStyle(bannerStyles, bannerContent, bannerImage, bannerStyleCounter)
	if(bannerStyleCounter < bannerStyles.length ){
		bannerStyleCounter++
	}else {
		bannerStyleCounter = 0 
	}
})
bannerAlignmentSwitch.addEventListener('click', (e) => {
	e.stopPropagation()
	handleStyle(alignmentStyles, bannerContent, bannerButton, bannerAlignmentCounter)
	if(bannerAlignmentCounter < alignmentStyles.length ){
		bannerAlignmentCounter++
	}else {
		bannerAlignmentCounter = 0
	}
})
bannerColorSwitch.addEventListener('click', (e) => {
	e.stopPropagation()
	handleStyle(colorStyles, bannerContent, bannerImage, bannerColorCounter)
	if(bannerColorCounter < colorStyles.length ){
		bannerColorCounter++
	}else {
		bannerColorCounter = 0
	}
})
