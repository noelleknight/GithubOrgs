(function(ns) {
  'use strict';

  var ghOrgs = '/data.json';
  // var avLogin = [];

ns.buttonToList = function buttonToList () {

  $.ajax({
    type: 'GET',
    url: ghOrgs,
    dataype: 'json',
    success: function showghOrgs (data){
      data.forEach(function getInfo(element) {
        ns.renderOrg(element);
        // addavLogin.push({login: element.login, avatar: element.avatar_url});
        // console.log(addavLogin);
      });
      // console.log( data );
    },

    complete: function requestDone() {
      console.log('All Done!');

    }

  });
};

  // ns.buttonToList = buttonToList;

  window.gitOrg = ns;

})(window.gitOrg || {});
