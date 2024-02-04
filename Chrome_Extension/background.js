
chrome.contextMenus.create({
	id: 'mainonly-contextMenu',
	title: 'mainonly',
});
chrome.contextMenus.onClicked.addListener(function (info, tab) {

	sendMessageToContentScript('mainonly', (response) => {
	});
});

chrome.action.onClicked.addListener((tab) => {
	sendMessageToContentScript('mainonly', (response) => {});
  });


function getCurrentTabId(callback) {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		if (callback) callback(tabs.length ? tabs[0].id : null);
	});
}

function sendMessageToContentScript(message, callback) {
	getCurrentTabId((tabId) => {
		chrome.tabs.sendMessage(tabId, message, function (response) {
			if (callback) callback(response);
		});
	});
}





