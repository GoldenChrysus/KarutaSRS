import Service from '@ember/service';

export default class PoemService extends Service {
	formatFirstVerse(verse) {
		return String(verse).replace(/\|/g, "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;");
	}

	formatTranslation(translation) {
		return String(translation).replace(/\|/g, "<br>");
	}
}
