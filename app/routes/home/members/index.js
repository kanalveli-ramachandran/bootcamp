import Route from '@ember/routing/route';

export default class HomeMembersIndexRoute extends Route {
  model() {
    return [{ fullName: 'Intern 1', product: { name: 'freshchat' }}];
    // [TODO] Uncomment the following line when you have an API
    // return this.store.findAll('intern')
  }
}
