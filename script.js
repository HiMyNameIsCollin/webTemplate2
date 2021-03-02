let bannerContent = document.getElementById('bannerContent')
let bannerImage = document.getElementById('bannerImage')
let bannerStyleButton = document.getElementById('bannerStyleButton')
let bannerStyles = [
	{
		content: 'content--altOrder',
		image: 'image--altOrder'
	},
	{
		content: 'content--foreground',
		image: 'image--background',
	},
	{
		content: ['content--foreground', 'content--foreground--alt'],
		image: ['image--background', 'image--background--circle']
	}
]

let styleCounter = 0
const handleStyle = (bannerStyles) => {
	const removeClass = (element1, element2, index) => {
		if(typeof bannerStyles[index].content !== 'string'){
			bannerStyles[index].content.forEach((c, i) => {
				element1.classList.remove(c)
			})
			bannerStyles[index].image.forEach((c, i) => {
				element2.classList.remove(c)
			})
		} else {
			element1.classList.remove(bannerStyles[index].content)
			element2.classList.remove(bannerStyles[index].image)
		}
	}
	const addClass = (element1, element2, index) => {
		if(typeof bannerStyles[index].content !== 'string'){
			bannerStyles[index].content.forEach((c, i) => {
				element1.classList.add(c)
			})
			bannerStyles[index].image.forEach((c, i) => {
				element2.classList.add(c)
			})
		} else {
			element1.classList.add(bannerStyles[index].content)
			element2.classList.add(bannerStyles[index].image)
		}
	}
	if(styleCounter < bannerStyles.length){
		addClass(bannerContent, bannerImage, styleCounter)
		if(styleCounter !== 0){
			removeClass(bannerContent, bannerImage, styleCounter - 1)		
		}
		styleCounter++
	} else {
		removeClass(bannerContent, bannerImage, bannerStyles.length - 1)
		styleCounter = 0
	}
}

bannerStyleButton.addEventListener('click', () => handleStyle(bannerStyles))