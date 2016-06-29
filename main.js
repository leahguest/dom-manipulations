
document.querySelector("#thanks button").addEventListener('click',function(){
  // TASK #1
  return alert("yowch! don't click me so hard!");
})


document.querySelector("#double button").addEventListener('click',function(){
  // TASK #2
  var compoundInvestment = document.getElementById('compoundInvestment');
  compoundInvestment.textContent = compoundInvestment.textContent * 2;
})


document.querySelector("#color-circle button").addEventListener('click',function(){
  // TASK #3
  var circle = document.getElementById('circle-bw');
  if (circle.style.backgroundColor === 'white' || !circle.style.backgroundColor) {
	circle.style.backgroundColor = 'black';
  } else {
  	circle.style.backgroundColor = 'white';
  }
  
})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4
  var circle = document.querySelector('div.circle-red');
  if (!circle.style.width && !circle.style.height) {
  	circle.style.width = '40px';
  	circle.style.height = '40px';
  	var width = parseInt(circle.style.width);
  	var height = parseInt(circle.style.height);
  	width = width * 2;
  	height = height * 2;
  	circle.style.width = width + 'px'
  	circle.style.height = height + 'px'
  } else {
  	var width = parseInt(circle.style.width);
  	var height = parseInt(circle.style.height);
  	if (width >= 320) {
  		circle.style.width = '40px';
  		circle.style.height = '40px';
  	} else {
  		width = width * 2;
  		height = height * 2;
  		circle.style.width = width + 'px'
  		circle.style.height = height + 'px'
  	}
  
  }
  
 
})

document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
  var list = document.querySelectorAll("#userList > li.inactive");

  for (var i = 0; i < list.length; i++) {
	list[i].parentElement.removeChild(list[i]);
	}
})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6
  var squares = document.querySelectorAll('span.square');
  var arr = Array.prototype.slice.call(squares);
  arr.reverse();
  var parent = squares[0].parentElement;
  for (var i = 0; i < squares.length; i++) {
  	squares[i].parentElement.removeChild(squares[i]);
  	parent.appendChild(arr[i])
  }
  for (var i = 0; i < arr.length; i++) {
  	parent.appendChild(arr[i]);
  }
})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
  var list = document.querySelector('#tasks');
  var reversed;
  for (var i = 0; i < list.children.length; i++) {
    reversed = '';
    for (var j = list.children[i].textContent.length - 1; j>=0; j--) {
      reversed += list.children[i].textContent[j];
    }
    list.children[i].textContent = reversed;
  }
  
});

document.querySelector("#cycle-image button").addEventListener('click',function(){
  // TASK #8
  var img = document.getElementById('city-img');
  var url = img.getAttribute('src');
  var base = url.slice(0, 35);
  var num = parseInt(url.slice(35));
  img.setAttribute('src', base + (num + 1));
});