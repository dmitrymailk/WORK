for(let i=2;i<6;i++){
	document.getElementById(`goods-list-${i}${i}`).style.display = 'none';
}

function hideElem(goodElem, elemTarget){
	for(let i=1;i<6;i++){
		document.getElementById(`${goodElem}-${i}${i}`).style.display = 'none';
		document.getElementById(`${goodElem}-${i}`).style.textDecoration = 'none';
	}
	//console.log(`${elemTarget}${ `${elemTarget}`[elemTarget.length-1]}`);
	document.getElementById(`${elemTarget}${ `${elemTarget}`[elemTarget.length-1]}`).style.display = 'flex';
	document.getElementById(`${elemTarget}`).style.textDecoration = 'underline';
	
}

for(let i=1;i<6;i++){
let a = document.getElementById(`goods-list-${i}`);
console.log(a);

a.addEventListener('click', function(event){
	console.log('TOUCH');
	hideElem('goods-list', event.target.id);
});
}
