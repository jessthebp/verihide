var s = document.createElement('script');
s.src = chrome.runtime.getURL('script.js');
// pause for 1 second to allow script to load
setTimeout(function() {

s.onload = function() {
        this.remove();
    };

    (document.head || document.documentElement).appendChild(s);
}, 1000);

const em = document.querySelectorAll("div[data-testid='cellInnerDiv']");

var hid = function (elem) {
	elem.style.display = 'none';
};

em.forEach((div) => {
// if div "[aria-label='Verified account']" exists, hide the whole div
if (div.querySelector("[aria-label='Verified account']")) {
    console.log(div)
  hid(div);
}
});

chrome.storage.sync.get(['unblockedUsers'], function(result) {
    console.log('Value currently is ' + result.unblockedUsers);
    // if the unblocked user list is not empty, show the divs
    if (result.unblockedUsers) {
        em.forEach((div) => {
        // if div "[aria-label='Verified account']" exists, hide the whole div
        if (div.querySelector("[aria-label='Verified account']")) {
            show(div);
        }
        });
    }
});


    em.forEach((div) => {
        //show names on unblock list
        let unblocklist = getunblockedusers();
        // twitter usernames are selectable by this ridiculous selector
        // css-901oao css-1hf3ou5 r-1bwzh9t r-18u37iz r-37j5jr r-a023e6 r-16dba41 r-rjixqe r-bcqeeo r-qvutc0"
        let username = div.querySelector("span.css-901oao.css-1hf3ou5.r-1bwzh9t.r-18u37iz.r-37j5jr.r-a023e6.r-16dba41.r-rjixqe.r-bcqeeo.r-qvutc0").innerHTML;
        if (unblocklist.includes(username)) {
            show(div);
        }
    });