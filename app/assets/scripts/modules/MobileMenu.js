import $ from 'jquery';

class MobilMenu {
	constructor() {
		this.siteHeader = $('.site-header');
		this.menuIcon = $('.site-header__menu-icon');
		this.menuContent = $('.site-header__menu-content');
		this.events(); // calls the Event Handling method
	} // Select element form DOM

	events() {
		this.menuIcon.click(this.toggleTheMenu.bind(this));
	} // Event Handling

	toggleTheMenu() {
		this.menuContent.toggleClass('site-header__menu-content--is-visible');
		this.siteHeader.toggleClass('site-header--is-expanded');
	} // Define functionality
}

export default MobilMenu;
