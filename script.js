const el = document.querySelectorAll("div[data-testid='cellInnerDiv']");

// Show an element
var show = function (elem) {
	elem.style.display = 'block';
};

// Hide an element
var hide = function (elem) {
	elem.style.display = 'none';
};

// Toggle element visibility
var toggle = function (elem) {

	// If the element is visible, hide it
	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);

};

function verihide(divs){
	return(divs ? hide(divs) :divs);
}

el.forEach((div) => {
// if div "[aria-label='Verified account']" exists, hide the whole div
if (div.querySelector("[aria-label='Verified account']")) {
    console.log(div)
  hide(div);
}
});


// rerun again occasionally
setInterval(function(){
    const el = document.querySelectorAll("div[data-testid='cellInnerDiv']");

// Show an element
var show = function (elem) {
	elem.style.display = 'block';
};

// Hide an element
var hide = function (elem) {
	elem.style.display = 'none';
};

// Toggle element visibility
var toggle = function (elem) {

	// If the element is visible, hide it
	if (window.getComputedStyle(elem).display === 'block') {
		hide(elem);
		return;
	}

	// Otherwise, show it
	show(elem);

};

function verihide(divs){
	return(divs ? hide(divs) :divs);
}

el.forEach((div) => {
// if div "[aria-label='Verified account']" exists, hide the whole div
if (div.querySelector("[aria-label='Verified account']")) {
    console.log(div)
  hide(div);
}
});


// get the unblocked user list from local storage using background.js and script.js

    // wait and run again
    setTimeout(function () {
        el.forEach((div) => {
            // if div "[aria-label='Verified account']" exists, hide the whole div
            if (div.querySelector("[aria-label='Verified account']")) {
                hide(div);
                console.log('verified account hidden');
            }

        });
    }, 1000);
}
, 1000);