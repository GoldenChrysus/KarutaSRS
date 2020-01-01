import Model from '@ember-data/model';
import { attr, belongsTo } from "@ember-data/model";

export default class PoemNoteModel extends Model {
	@attr note;

	@belongsTo("user") user;
	@belongsTo("poem") poem;
}
