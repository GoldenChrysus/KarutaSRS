import Model from '@ember-data/model';
import { belongsTo } from "@ember-data/model";

export default class LearnedItemModel extends Model {
	@belongsTo("user") user;
	@belongsTo("poem") poem;
}
