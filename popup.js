window.addEventListener("load", windowLoaded, false);
function windowLoaded() {
	chrome.tabs.getSelected(null, function(tab) {
		var match = /[\/]{2}[^\/]+/.exec(tab.url);
		var domain = match[0].substr(2,match[0].length);
		if (domain.substr(0,4) === 'www.') {
			domain = domain.substr(4,domain.length);
		}
		var use = betterUseFor(domain);
		document.getElementById('use').innerHTML = use;
	});
}

function betterUseFor(domain) {
	var use = uses[domain];
	if (typeof use === 'undefined') {
		use = "Isn't there something more awesome you could be doing right now?"
	}
	return use;
}

var uses = {
	'linkedin.com' : 'Be so amazing that you only log on to accept new connections.',
	'facebook.com' : 'How cool would it be if you called a friend right now?',
	'twitter.com' : 'You barely know these people. Are 140 characters going to change your life?',
	'metafilter.com' : "Contribute by making something worth a FPP from a stranger. It could have many favorites.",
	'37signals.com' : "Can't you build something like this yourself? Wouldn't that be fun?",
	'tumblr.com' : "Be the one they're microblogging about, not a passive reader.",
	'wikipedia.org' : "Wouldn't you rather have an article written about you than read one?",
	'apple.com' : "You're wasting time, shithead!"
}