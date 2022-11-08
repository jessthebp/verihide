
function addNewUser() {
  let newuser = document.getElementById("newUser").value;
  // make sure "unblockedUsers" exists in storage

  chrome.storage.sync.get("unblockedUsers", function (result) {
    let unblocklist = result.unblockedUsers;
    unblocklist.push(newuser);
    console.log(unblocklist);
    chrome.storage.sync.set({ unblockedUsers: unblocklist }, function () {
      console.log("unblockedUsers updated");
    });
}
);
}
function removeUser() {
  chrome.storage.sync.get("unblockedUsers", function (result) {
    let unblocklist = result.unblockedUsers;
    let user = document.getElementById("newUser").value;
    let index = unblocklist.indexOf(user);
    if (index > -1) {
      unblocklist.splice(index, 1);
    }
    chrome.storage.sync.set({ unblockedUsers: unblocklist }, function () {
      console.log("unblockedUsers updated");
    });
  }
    );
}

function showUsers() {
  chrome.storage.sync.get("unblockedUsers", function (result) {
    let unblocklist = result.unblockedUsers;
    let htmlelement = document.getElementById("users");
    htmlelement.innerHTML = "";
    for (let i = 0; i < unblocklist.length; i++) {
        htmlelement.innerHTML += unblocklist[i] + "<br>";
    }
  }
    );
}
function hideusers(){
    document.getElementById("users").innerHTML = "";
}

// add listener if popup.html is loaded
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("addUser").addEventListener("click", addNewUser);
document.getElementById("removeUser").addEventListener("click", removeUser);
document.getElementById("showUsers").addEventListener("click", showUsers);
document.getElementById("hideUsers").addEventListener("click", hideusers);
});