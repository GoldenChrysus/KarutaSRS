import Service from '@ember/service';

export default class PoemService extends Service {
	formatFirstVerse(verse) {
		return verse.replace(/\|/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	}
}
