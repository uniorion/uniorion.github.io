chrome.extension.onMessage.addListener(function(request, sender) {
    if (request.action == "getSource") {
        document.body.innerText = request.source;
    }
});

function onWindowLoad() {
    chrome.tabs.executeScript(null, {
        file: "js/getSource.js"
        }, function() {
            if (chrome.extension.lastError) {
                document.body.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
            }
        }),

    chrome.tabs.insertCSS(null, {
        file: "style/style.css"
        }, function() {
            if (chrome.extension.lastError) {
                document.body.innerText = 'There was an error injecting script : \n' + chrome.extension.lastError.message;
            }
        });


}
window.onload = onWindowLoad;

// // Copyright (c) 2011 The Chromium Authors. All rights reserved.
// // Use of this source code is governed by a BSD-style license that can be
// // found in the LICENSE file.

// // Called when the user clicks on the browser action.
// chrome.browserAction.onClicked.addListener(function(tab) {
//   // No tabs or host permissions needed!
//   console.log('Turning ' + tab.url + ' red!');
//   chrome.tabs.executeScript({
//     code: 'document.body.style.backgroundColor="red"'
//   });
// });
