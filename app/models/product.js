import Model from '@ember-data/model';
import attr from 'ember-data/attr';

export default class ProductModel extends Model {
  @attr('string')
  name;
}
