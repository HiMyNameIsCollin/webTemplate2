const banner = document.querySelector('.banner')
const bannerContent = banner.children[0]
const bannerImage = banner.children[1]
const bannerButton = document.getElementById('bannerButton')
const bannerStyleSwitch = document.getElementById('bannerStyleSwitch')
const bannerAlignmentSwitch = document.getElementById('bannerAlignmentSwitch')
const bannerColorSwitch = document.getElementById('bannerColorSwitch')
const bannerOrientationSwitch = document.getElementById('bannerOrientationSwitch')
const bannerImagePositionSwitch = document.getElementById('bannerImagePositionSwitch')

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

const orientationStyles = [
	{
		content: ['content--altOrder'],
		image: ['image--altOrder']
	}
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

const imagePositionStyles = [
	{
		image: ['image--imgPos1']
	},
	{
		image: ['image--imgPos2']
	},
	{
		image: ['image--imgPos3']
	},
	{
		image: ['image--imgPos4']
	},
	{
		image: ['image--imgPos5']
	}
]



let bannerStyleCounter = 0
let bannerAlignmentCounter = 0
let bannerColorCounter = 0
let bannerOrientationCounter = 0
let bannerImagePositionCounter = 0
const handleStyle = (styles, counter, element1, element2) => {
	const removeClass = (style1, style2, element1, element2) => {
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
	const addClass = (style1, style2, element1, element2 ) => {
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
				styles[counter-1][Object.keys(styles[counter-1])[0]], 
				styles[counter-1][Object.keys(styles[counter-1])[1]],
				element1, 
				element2, 
			)		
		}
		addClass(
				styles[counter][Object.keys(styles[counter])[0]], 
				styles[counter][Object.keys(styles[counter])[1]],
				element1, 
				element2, 
			)
	} else {
		removeClass(
				styles[counter-1][Object.keys(styles[counter-1])[0]], 
				styles[counter-1][Object.keys(styles[counter-1])[1]],
				element1, 
				element2, 
			)
	}
}

const handleBanner = (e) => {
	handleStyle(bannerStyles, bannerStyleCounter, bannerContent, bannerImage)
	if(bannerStyleCounter < bannerStyles.length ){
		bannerStyleCounter++
	}else {
		bannerStyleCounter = 0 
	}
	if(bannerStyleCounter < 2){
		bannerOrientationSwitch.classList.remove('switch--hidden')
	} else if (bannerStyleCounter === 2) {
		bannerOrientationSwitch.classList.add('switch--hidden')
	}
}

bannerStyleSwitch.addEventListener('click', handleBanner)
bannerImage.addEventListener('click', handleBanner)


bannerAlignmentSwitch.addEventListener('click', (e) => {
	e.stopPropagation()
	handleStyle(alignmentStyles, bannerAlignmentCounter, bannerContent, bannerButton)
	if(bannerAlignmentCounter < alignmentStyles.length ){
		bannerAlignmentCounter++
	}else {
		bannerAlignmentCounter = 0
	}
})
bannerColorSwitch.addEventListener('click', (e) => {
	e.stopPropagation()
	handleStyle(colorStyles, bannerColorCounter , bannerContent, bannerImage)
	if(bannerColorCounter < colorStyles.length ){
		bannerColorCounter++
	}else {
		bannerColorCounter = 0
	}
})
bannerOrientationSwitch.addEventListener('click', (e) => {
	e.stopPropagation()
	handleStyle(orientationStyles, bannerOrientationCounter, bannerContent, bannerImage)
	if(bannerOrientationCounter < bannerOrientationStyles.length ){
		bannerOrientationCounter++
	}else {
		bannerOrientationStyles = 0
	}
})

bannerImagePositionSwitch.addEventListener('click', (e) => {
	e.stopPropagation()
	handleStyle(imagePositionStyles, bannerImagePositionCounter, bannerImage)
	if(bannerImagePositionCounter < imagePositionStyles.length ){
		bannerImagePositionCounter++
	}else {
		bannerImagePositionCounter = 0
	}
})