import Route from '@ember/routing/route';

export default class HomeMembersShowRoute extends Route {
  model(params) {
    return { fullName: 'Intern 1', product: { name: 'freshchat' }};
    // [TODO] Uncomment the following line when you have an API
    //return this.store.findRecord('intern', params.id);
  }
}
