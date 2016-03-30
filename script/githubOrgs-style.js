(function(ns) {
  'use strict';

  $('button').on('click', function(event) {
    ns.buttonToList();
    console.log("I work!");



  });


  /**
  * create HTML element from data from github org
  * @param  {object} element github org data
  */

  function renderOrg (element) {
    $('ul')
      .addClass('background')
      .append('<li>')
      .find('li:last-child')
        .append('<p>')
        .find('p')
          .append('<img>')
          .find('img')
            .attr('src', element.avatar_url)
            .end() //this goes out one find
          .append(element.login);

  }

  ns.renderOrg = renderOrg;


  window.gitOrg = ns;

})(window.gitOrg || {});
