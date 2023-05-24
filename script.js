const container = document.body.querySelector('.container');
for(let i=0; i<5; i++){
	const square = container.createElement('div');
	square.className('square');
	container.appendChild(square);
}

const squareArray = document.body.querySelectorAll('.square');
squareArray.forEach((box) => {
	box.addEventListener('mouseover', ()=>{
		const red = getRandom();
		const green = getRandom();
		const blue = getRandom();
		const color = `rgb(${red}, ${green}, ${blue})`
		box.style.backgroundColor = color;
	});
	box.addEventListener('mouseout', ()=>{
		box.style.backgroundColor = '';
	})
});

function getRandom(){
	return Math.floor(Math.random() * 255);
}