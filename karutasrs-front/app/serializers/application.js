import JSONAPISerializer from '@ember-data/serializer/json-api';
import config from "../config/environment";

export default class ApplicationSerializer extends JSONAPISerializer {
	namespace = "api";
	host      = config.API_HOST;
}
