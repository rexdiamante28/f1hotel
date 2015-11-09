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

Router.route('/rooms/city', function () {
  this.render('city');
  this.layout('layout');
});

Router.route('/rooms/fort', function () {
  this.render('fort');
  this.layout('layout');
});


Router.route('/dinning', function () {
  this.render('dinning');
  this.layout('layout');
});

Router.route('/celebrate', function () {
  this.render('celebrate');
  this.layout('layout');
});

Router.route('/wow', function () {
  this.render('wow');
  this.layout('layout');
});

Router.route('/news', function () {
  this.render('news');
  this.layout('layout');
});

Router.route('/contact', function () {
  this.render('contact');
  this.layout('layout');
});

Router.route('/news1', function () {
  this.render('news1');
  this.layout('layout');
});

Router.route('/news2', function () {
  this.render('news2');
  this.layout('layout');
});

Router.route('/reserve', function () {
  this.render('reserve');
  this.layout('layout');
});