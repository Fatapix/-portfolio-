function changeActiveItem(hash) {
	let navLinks = document.querySelectorAll('.links li a')

	for(let i = 0; i < navLinks.length; i++) {
		let item = navLinks[i]
		
		item.parentElement.classList.remove('active')
		
		if(item.getAttribute('href') == hash) {
			item.parentElement.classList.add('active')
		}
	}
}

if(process.browser) {
    if ("onhashchange" in window) {
        window.onhashchange = function () {
            changeActiveItem(window.location.hash)
        }
    }
    else {
        var storedHash = window.location.hash;
        window.setInterval(function () {
            if (window.location.hash != storedHash) {
                storedHash = window.location.hash;
                changeActiveItem(storedHash)
            }
        }, 100);
    }
}