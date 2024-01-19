//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
list = document.getElementById("band")

const sortedList =()=>{
	sortedBand = bands.sort((a, b)=>{
		if (a.replace("The ", "").replace("An ", "").replace("A ", "") > b.replace("The ", "").replace("An ", "").replace("A ", ""))
			return 1;
		else return -1
	})
	sortedBand.forEach((item) => {
		  list.appendChild( document.createElement("li").appendChild(document.createTextNode(item)));
	})
}

sortedList()