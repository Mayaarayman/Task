var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("#list_url");
var item = document.getElementsByTagName("li");
var errmessage=document.getElementById('errmessage')
let urldefault='https://reLink/'
function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}

console.log(makeid(5));
function inputLength(){
	return input.value.length;
} 

function listLength(){
	return item.length;
}

function createListElement() {
	var li = document.createElement("li"); // creates an element "li"
    li.className='listitms'
    var realurl=document.createElement('div')
    realurl.appendChild(document.createTextNode(input.value))
    realurl.className='realurl'

    
	li.appendChild(realurl); //makes text from input field the li text

	ul.appendChild(li); //adds li to ul
    console.log(ul)
	input.value = ""; //Reset text input field


	//START STRIKETHROUGH
	// because it's in the function, it only adds it for new items
	function crossOut() {
		li.classList.toggle("done");
	}

	li.addEventListener("click",crossOut);
	//END STRIKETHROUGH


	// START ADD DELETE BUTTON
    var dURL=document.createElement('spam')
        dURL.className='unrealurl'

    dURL.appendChild(document.createTextNode(urldefault+makeid(5)))
	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("copy"));
        dBtn.className='copybtn'
		dBtn.id='copybtnid'

	li.appendChild(dURL);	li.appendChild(dBtn);
	dBtn.addEventListener("click", copyListItem);
	// END ADD DELETE BUTTON


	//ADD CLASS DELETE (DISPLAY: NONE)
	function copyListItem(){
//		li.classList.add("delete")
        navigator.clipboard.writeText('sasasasa')
		document.getElementById("copybtnid").textContent="copied";
	}
	//END ADD CLASS DELETE
}


function addListAfterClick(){
	if (inputLength() > 0) { //makes sure that an empty input field doesn't create a li
		createListElement();
	}
    else {errmessage.hidden=0; errmessage.placeholder.style.color="red";}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which ===13) { //this now looks to see if you hit "enter"/"return"
		//the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
		createListElement();
	} 
}


enterButton.addEventListener("click",addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

window.addEventListener("resize", displayWindowSize);
// function displayWindowSize(){
// if ($(window).width() < 500) {
// 	document.getElementsByClassName('d-flex')[1].classList.remove("align-items-start");
// 	document.getElementsByClassName('d-flex')[1].classList.remove("align-items-center");
// }}

// if($(window).width() <500){
// 	document.getElementsByClassName('d-flex')[1].classList.remove("align-items-start");
// 	document.getElementsByClassName('d-flex')[1].classList.remove("align-items-center");
//    }