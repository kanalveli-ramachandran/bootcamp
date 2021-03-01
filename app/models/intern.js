import Model from '@ember-data/model';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default class InternModel extends Model {
  @attr('string')
  firstName;

  @attr('string')
  lastName;

  @belongsTo('product')
  internProduct;

  // [TODO] Add as many more properties as your imagination takes you.
  // [TODO] Add computed for fullName
}
