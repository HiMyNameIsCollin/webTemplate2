const banner = document.querySelector('.banner')
const bannerContent = document.getElementById('bannerContent')
const bannerImage = document.getElementById('bannerImage')
const bannerButton = document.getElementById('bannerButton')
const bannerStyleSwitch = document.getElementById('bannerStyleSwitch')
const alignmentStyleSwitch = document.getElementById('bannerAlignmentSwitch')
const bannerStyles = [
	{
		content: ['content--foreground'],
		image: ['image--background']
	},
	{
		content: ['content--foreground', 'content--foreground--alt'],
		image: ['image--background']
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



let bannerStyleCounter = 0
let bannerAlignmentCounter = 0
const handleStyle = (styles, element1, element2, counter) => {
	const removeClass = (element1, element2, style1, style2) => {
		style1.forEach((c, i) => {
			element1.classList.remove(c)
		})
		style2.forEach((c, i) => {
			element2.classList.remove(c)
		})

	}
	const addClass = (element1, element2, style1, style2) => {
		style1.forEach((c, i) => {
			element1.classList.add(c)
		})
		style2.forEach((c, i) => {
			element2.classList.add(c)
		})
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
alignmentStyleSwitch.addEventListener('click', (e) => {
	e.stopPropagation()
	console.log(bannerAlignmentCounter)
	handleStyle(alignmentStyles, bannerContent, bannerButton, bannerAlignmentCounter)
	if(bannerAlignmentCounter < bannerStyles.length ){
		bannerAlignmentCounter++
	}else {
		bannerAlignmentCounter = 0
	}
})
