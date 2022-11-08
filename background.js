
chrome.runtime.onInstalled.addListener((r) => {
  if (r.reason === "install") {
      chrome.storage.sync.set({ unblockedUsers: [] }, function () {
            console.log("unblockedUsers updated");
        });
      }
    showReadme();
  });

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['contentScript.js']
  });
});


function showReadme() {
  let url = chrome.runtime.getURL("popup.html");
  chrome.tabs.create({ url });
}

