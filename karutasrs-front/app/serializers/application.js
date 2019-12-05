import JSONAPISerializer from '@ember-data/serializer/json-api';
import ENV from "./../config/environment";

export default class ApplicationSerializer extends JSONAPISerializer {
	namespace = "api";
	host      = ENV.APP.api_host;
}
