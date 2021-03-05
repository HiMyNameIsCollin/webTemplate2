const panelStyles = [
	[
		[],
		['image--circle']
	],
	[
		['content--front'],
		['image--back']
	],
	[
		['content--front', 'content--front--full'],
		['image--back']
	],
	[
		['content--front'],
		['image--back', 'image--back--cover']
	],
]
const orientationStyles = [
	[
		['content--altOrder'],
		['image--altOrder', ]
	]
]
const contentPositionStyles = [
	[
		['content--front--altLeft'],
		[]
	],
	[
		['content--front--left'],
		[]
	],
	[
		['content--front--altTop'],
		[]
	],
	[
		['content--front--top'],
		[]
	],
	[
		['content--front--altRight'],
		[]
	],
	[
		['content--front--right'],
		[]
	],
	[
		['content--front--altBottom'],
		[]
	],
	[
		['content--front--bottom'],
		[]
	],
]

const alignmentStyles = [
	[
		['content--alignCenter'],
		[]
	],
	[
		['content--alignEnd'],
		[]
	],
]
const colorStyles = [
	[
		 ['content--black'],
		 ['image--black']
	],
	[
		 ['content--purple'],
		 ['image--purple']
	],
	[
		 ['content--pink'],
		 ['image--pink']
	],
	[
		 ['content--yellow'],
		 ['image--yellow']
	],
	[
		 ['content--blue'],
		 ['image--blue']
	],
	[
		 ['content--teal'],
		 ['image--teal']
	],
]
const imagePositionStyles = [
	[
		['image--imgPos1']
	],
	[
		['image--imgPos2']
	],
	[
		['image--imgPos3']
	],
	[
		['image--imgPos4']
	],
	[
		['image--imgPos5']
	],
]

function Panel(element) {
	this.content = element.children[0]
	this.image = element.children[1]
	this.styleSwitch = element.children[0].children[1].children[0]
	this.alignmentSwitch = element.children[0].children[1].children[1]
	this.colorSwitch = element.children[0].children[1].children[2]
	this.orientationSwitch = element.children[0].children[1].children[3]
	this.imagePositionSwitch = element.children[0].children[1].children[4]
	this.contentPositionSwitch = element.children[0].children[1].children[5]
	this.styleCounter = 0
	this.alignmentCounter = 0
	this.colorCounter = 0
	this.orientationCounter = 0
	this.imagePositionCounter = 0
	this.contentPositionCounter = 0
	this.image.addEventListener('click', () => {handleStyle(panelStyles, this.styleCounter, this.content, this.image), this.styleCounter < panelStyles.length ? this.styleCounter++ : this.styleCounter = 0, this.watchStyles() })
	this.styleSwitch.addEventListener('click', () => {handleStyle(panelStyles, this.styleCounter, this.content, this.image), this.styleCounter < panelStyles.length ? this.styleCounter++ : this.styleCounter = 0, this.watchStyles()})
	this.alignmentSwitch.addEventListener('click', () => {handleStyle(alignmentStyles, this.alignmentCounter, this.content), this.alignmentCounter < alignmentStyles.length ? this.alignmentCounter++ : this.alignmentCounter = 0, this.watchStyles()})
	this.colorSwitch.addEventListener('click', () => {handleStyle(colorStyles, this.colorCounter, this.content, this.image), this.colorCounter < colorStyles.length ? this.colorCounter++ : this.colorCounter = 0, this.watchStyles()})
	this.orientationSwitch.addEventListener('click', () => {handleStyle(orientationStyles, this.orientationCounter, this.content, this.image), this.orientationCounter < orientationStyles.length ? this.orientationCounter++ : this.orientationCounter = 0, this.watchStyles()})
	this.imagePositionSwitch.addEventListener('click', () => {handleStyle(imagePositionStyles, this.imagePositionCounter, this.image), this.imagePositionCounter < imagePositionStyles.length ? this.imagePositionCounter++ : this.imagePositionCounter = 0, this.watchStyles()})
	this.contentPositionSwitch.addEventListener('click', () => {handleStyle(contentPositionStyles, this.contentPositionCounter, this.content), this.contentPositionCounter < contentPositionStyles.length ? this.contentPositionCounter++ : this.contentPositionCounter = 0, this.watchStyles()})
	this.watchStyles = function(){
		if(this.styleCounter < 2){
			this.orientationSwitch.classList.remove('switch--hidden')
		} else if (this.styleCounter === 2) {
			this.orientationSwitch.classList.add('switch--hidden')
		}
		if(this.styleCounter > 1){
			this.contentPositionSwitch.classList.remove('switch--hidden')
		} else if(this.styleCounter === 0 ){
			this.contentPositionSwitch.classList.add('switch--hidden')
		}
	}
}

const banner = new Panel(document.getElementById('banner'))
const spotlight1 = new Panel(document.getElementById('spotlight1'))
const spotlight2 = new Panel(document.getElementById('spotlight2'))

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
				styles[counter-1][0], 
				styles[counter-1][1],
				element1, 
				element2, 
			)		
		}
		addClass(
				styles[counter][0], 
				styles[counter][1],
				element1, 
				element2, 
			)
	} else {
		removeClass(
				styles[counter-1][0], 
				styles[counter-1][1],
				element1, 
				element2, 
			)
	}
}
