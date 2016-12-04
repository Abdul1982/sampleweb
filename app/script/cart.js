function handleTabclick(tab) {
	var men = document.getElementById('M');
	var women = document.getElementById('W');
	var boy = document.getElementById('B');
	var girl = document.getElementById('G');

	if (tab === 'Men'){
		console.log('Men clicked')
		men.className = ""
		women.className = "hide"
		boy.className = "hide"
		girl.className = "hide"
	}
		else if (tab === 'Women'){
		console.log('Women clicked')
		men.className = "hide"
		women.className = ""
		boy.className = "hide"
		girl.className = "hide"
	}
		else if (tab === 'Boy'){
		console.log('Boy clicked')
		men.className = "hide"
		women.className = "hide"
		boy.className = ""
		girl.className = "hide"
	}
		else if (tab === 'Girl'){
		console.log('Girl clicked')
		men.className = "hide"
		women.className = "hide"
		boy.className = "hide"
		girl.className = ""
	}
}