import EmberRouter from '@ember/routing/router';
import config from 'bootcamp/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('home', function() {
    this.route('members', function() {
      this.route('show'); // [TODO] Add dynamic segment :id
    });
  });
});
