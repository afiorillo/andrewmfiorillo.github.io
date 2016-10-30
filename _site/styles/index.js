var hide_lists = function(cb) {
    $('.my-tabs').fadeOut(300);
    $('.tab-btn').removeClass('disabled');
};
var show_about = function() {
    $('#projects').fadeOut(300, function () {
      $('#posts').fadeOut(300, function() {
        $('#about').fadeIn(300);
      });
    });
    $('#about-btn').removeClass('disabled');
    $('#posts-btn').addClass('disabled');
    $('#projects-btn').addClass('disabled');
}
var show_projects = function() {
    $('#about').fadeOut(300, function () {
      $('#posts').fadeOut(300, function() {
        $('#projects').fadeIn(300);
      });
    });
    $('#projects-btn').removeClass('disabled');
    $('#posts-btn').addClass('disabled');
    $('#about-btn').addClass('disabled');
};
var show_posts = function() {
    $('#projects').fadeOut(300, function () {
      $('#about').fadeOut(300, function() {
        $('#posts').fadeIn(300);
      });
    });
    $('#posts-btn').removeClass('disabled');
    $('#about-btn').addClass('disabled');
    $('#projects-btn').addClass('disabled');
};
