facebookQuery = "https://www.facebook.com/search/results.php?type=users&q=";

chrome.omnibox.onInputChanged.addListener(function(text, suggest) {
	console.log('inputChanged: ' + text);
	// suggest([
	// 	{content: text + " one", description: "the first one"},
	// 	{content: text + " number two", description: "the second entry"}
	// 	]);
});

chrome.omnibox.onInputEntered.addListener(
	function(text) {
		navigate(facebookQuery + text);
	});


function navigate(url) {
	chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
		chrome.tabs.update(tabs[0].id, {url: url});
	});
}


