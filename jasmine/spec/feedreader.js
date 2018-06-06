/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
	/*
	Test Suite 1: - a test suite just contains a related set of tests.
	This suite is all about the RSS feeds definitions, the allFeeds
	variable in our application.
	*/
	describe('RSS Feeds', function() {
		/*
		Test 1 of suite 1: allFeeds variable has been defined and that
		it is not empty.
		*/
		it('are defined', function() {
			expect(allFeeds).toBeDefined();
			expect(allFeeds.length).not.toBe(0);
		});

		/*
		Test 2 of suite 1: Will pass if all URL are defined and all
		URL are not empty.  Loops through each feed in the allFeeds
		object.
		*/
		it('URL are defined and not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.url).toBeDefined();
				expect(feed.url.length).not.toBe(0);
			});
		});

		/*
		Test 3 of suite 1: Will pass if the name property in each
		feed in the allFeeds object is defined and that the name
		property is not empty.
		*/
		it('name property is defined and not empty', function() {
			allFeeds.forEach(function(feed) {
				expect(feed.name).toBeDefined();
				expect(feed.name.length).not.toBe(0);
			});
		});
	}); //End of Test Suite 1 RSS Feeds

	/*
	Test Suite 2: This suite is all about "The menu"
	*/
	describe('The menu', function() {
		/*
		Test 1 of suite 2: Will pass if the menu element is hidden by default.
		"menu-hidden" is a class on the body, we want this class to be present
		as a dafault to hide the menu.
		*/
		it('is hidden by default', function() {
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});

		/*
		Test 2 of suite 2: Will pass if the menu changes visibility when
		the menu icon is clicked. This test has two expectations:
		* the menu displays when clicked
		* the menu hides when clicked again
		*/
		it('visibility changes on menu icon click', function() {
			// When clicked to open remove 'menu-hidden' to display menu
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(false);

			// When clicked again add the 'menu-hidden' class to hide menu
			$('.menu-icon-link').click();
			expect($('body').hasClass('menu-hidden')).toBe(true);
		});
	}); //End of Test Suite 2 The menu

	/* TODO: Write a new test suite named "Initial Entries" */

		/* TODO: Write a test that ensures when the loadFeed
		 * function is called and completes its work, there is at least
		 * a single .entry element within the .feed container.
		 * Remember, loadFeed() is asynchronous so this test will require
		 * the use of Jasmine's beforeEach and asynchronous done() function.
		 */

	/* TODO: Write a new test suite named "New Feed Selection" */

		/* TODO: Write a test that ensures when a new feed is loaded
		 * by the loadFeed function that the content actually changes.
		 * Remember, loadFeed() is asynchronous.
		 */
}());
