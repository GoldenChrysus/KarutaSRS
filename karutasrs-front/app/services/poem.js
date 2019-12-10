import Service from '@ember/service';

export default class PoemService extends Service {
	formatFirstVerse(verse) {
		return verse.replace("|", "<br>");
	}
}
