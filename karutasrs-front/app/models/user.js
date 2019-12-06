import Model from '@ember-data/model';
import { attr, hasMany } from "@ember-data/model";

export default class UserModel extends Model {
	@attr email;
	@attr password;
	@attr bearer;

	@hasMany("learned-item") learned_items;
}
