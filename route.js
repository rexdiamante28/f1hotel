Router.route('/', function () {
  this.render('index');
  this.layout('layout');
});

Router.route('/about', function () {
  this.render('about_us');
  this.layout('layout');
});

Router.route('/sleep', function () {
  this.render('sleep');
  this.layout('layout');
});

Router.route('/rooms/deluxe', function () {
  this.render('deluxe');
  this.layout('layout');
});