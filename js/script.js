'use strict';

// Page Loading Spinner
window.addEventListener('load', () => {
	const loader = document.querySelector('.loader');

	// Check if loader is already shown
	const loaderAlreadyShown = localStorage.getItem('loaderShown');

	// Remove loader after 2 seconds
	if (!loaderAlreadyShown) {
		setTimeout(() => {
			// Hide loader
			loader.classList.add('loader-hidden');

			// Remove loader
			loader.addEventListener('transitionend', () => {
				loader.remove();
			});

			// Set loader as shown
			localStorage.setItem('loaderShown', 'true');
		}, 2000);
	} else {
		loader.remove();
	}
});
