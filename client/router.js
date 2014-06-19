/*router.js*/

Router.configure({
	layoutTemplate : "layout"
});

Router.map(function(){
	this.route('home', {path: '/'});
	this.route('parfum', {path: '/parfum'});
	this.route('makyaj', {path: '/makyaj'});
	this.route('bakim', {path: '/bakim'});
	this.route('erkek', {path: '/erkek'});
	this.route('kisiselbakim', {path: '/kisisel-bakim'});
	this.route('markalar', {path: '/markalar'});
	this.route('firsatlar', {path: '/firsatlar'});
});

	