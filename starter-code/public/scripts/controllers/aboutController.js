'use strict';

(function(module) {
  const aboutController = {};

  // DONE: Define a function that hides all main section elements, and then reveals just the #about section:

  aboutController.init = function () {
    console.log('this is the about controller')
    $('.tab-content').hide();
    $('#about').show();
  }

  module.aboutController = aboutController;
})(window);
