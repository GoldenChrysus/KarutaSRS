# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
poems = Poem.create([	
	{
		id: "1",
		name: "Tenchi Tenno",
		first_verse: "あきのたのかりほのいほのとまをあらみ",
		second_verse_raw: "わがころもではつゆにぬれつつ",
		second_verse_card: "わかころもてはつゆにぬれつつ",
		second_verse_answer: "わかころもては",
		kimariji: "あきの"
	},
	{
		id: "2",
		name: "Jito Tenno",
		first_verse: "はるすぎてなつきにけらししろたへの",
		second_verse_raw: "ころもほすてふあまのかぐやま",
		second_verse_card: "ころもほすてふあまのかくやま",
		second_verse_answer: "ころもほ",
		kimariji: "はるす"
	},
	{
		id: "3",
		name: "Kakinomoto no Hitomaro",
		first_verse: "あしびきのやまどりのをのしだりをの",
		second_verse_raw: "ながながしよをひとりかもねむ",
		second_verse_card: "なかなかしよをひとりかもねむ",
		second_verse_answer: "なかな",
		kimariji: "あし"
	},
	{
		id: "4",
		name: "Yamabe no Akahito",
		first_verse: "たごのうらにうちいでてみればしろたへの",
		second_verse_raw: "ふじのたかねにゆきはふりつつ",
		second_verse_card: "ふしのたかねにゆきはふりつつ",
		second_verse_answer: "ふし",
		kimariji: "たご"
	},
	{
		id: "5",
		name: "Sarumaru Dayu",
		first_verse: "おくやまにもみぢふみわけなくしかの",
		second_verse_raw: "こゑきくときぞあきはかなしき",
		second_verse_card: "こゑきくときそあきはかなしき",
		second_verse_answer: "こゑ",
		kimariji: "おく"
	},
	{
		id: "6",
		name: "Chunagon Yakamochi",
		first_verse: "かささぎのわたせるはしにおくしもの",
		second_verse_raw: "しろきをみればよぞふけにける",
		second_verse_card: "しろきをみれはよそふけにける",
		second_verse_answer: "しろ",
		kimariji: "かさ"
	},
	{
		id: "7",
		name: "Abe no Nakamaro",
		first_verse: "あまのはらふりさけみればかすがなる",
		second_verse_raw: "みかさのやまにいでしつきかも",
		second_verse_card: "みかさのやまにいてしつきかも",
		second_verse_answer: "みか",
		kimariji: "あまの"
	},
	{
		id: "8",
		name: "Kisen Hoshi ",
		first_verse: "わがいほはみやこのたつみしかぞすむ",
		second_verse_raw: "よをうぢやまとひとはいふなり",
		second_verse_card: "よをうちやまとひとはいふなり",
		second_verse_answer: "よをう",
		kimariji: "わがい"
	},
	{
		id: "9",
		name: "Ono no Komachi",
		first_verse: "はなのいろはうつりにけりないたづらに",
		second_verse_raw: "わがみよにふるながめせしまに",
		second_verse_card: "わかみよにふるなかめせしまに",
		second_verse_answer: "わかみよ",
		kimariji: "はなの"
	},
	{
		id: "10",
		name: "Semimaru",
		first_verse: "これやこのゆくもかへるもわかれては",
		second_verse_raw: "しるもしらぬもあふさかのせき",
		second_verse_card: "しるもしらぬもあふさかのせき",
		second_verse_answer: "しる",
		kimariji: "これ"
	},
	{
		id: "11",
		name: "Sangi Takamura",
		first_verse: "わたのはらやそしまかけてこぎいでぬと",
		second_verse_raw: "ひとにはつげよあまのつりぶね",
		second_verse_card: "ひとにはつけよあまのつりふね",
		second_verse_answer: "ひとには",
		kimariji: "わたのはらや"
	},
	{
		id: "12",
		name: "Sojo Henjo",
		first_verse: "あまつかぜくものかよひぢふきとぢよ",
		second_verse_raw: "をとめのすがたしばしとどめむ",
		second_verse_card: "をとめのすかたしはしととめむ",
		second_verse_answer: "を",
		kimariji: "あまつ"
	},
	{
		id: "13",
		name: "Yozei In ",
		first_verse: "つくばねのみねよりおつるみなのがは",
		second_verse_raw: "こひぞつもりてふちとなりぬる",
		second_verse_card: "こひそつもりてふちとなりぬる",
		second_verse_answer: "こひそ",
		kimariji: "つく"
	},
	{
		id: "14",
		name: "Kawara no Sadaijin",
		first_verse: "みちのくのしのぶもぢずりたれゆゑに",
		second_verse_raw: "みだれそめにしわれならなくに",
		second_verse_card: "みたれそめにしわれならなくに",
		second_verse_answer: "みたれそ",
		kimariji: "みち"
	},
	{
		id: "15",
		name: "Koko Tenno",
		first_verse: "きみがためはるののにいでてわかなつむ",
		second_verse_raw: "わがころもでにゆきはふりつつ",
		second_verse_card: "わかころもてにゆきはふりつつ",
		second_verse_answer: "わかころもてに",
		kimariji: "きみがためは"
	},
	{
		id: "16",
		name: "Chunagon Yukihira",
		first_verse: "たちわかれいなばのやまのみねにおふる",
		second_verse_raw: "まつとしきかばいまかへりこむ",
		second_verse_card: "まつとしきかはいまかへりこむ",
		second_verse_answer: "まつと",
		kimariji: "たち"
	},
	{
		id: "17",
		name: "Ariwara no Narihira Ason",
		first_verse: "ちはやぶるかみよもきかずたつたがは",
		second_verse_raw: "からくれなゐにみづくくるとは",
		second_verse_card: "からくれなゐにみつくくるとは",
		second_verse_answer: "から",
		kimariji: "ちは"
	},
	{
		id: "18",
		name: "Fujiwara no Toshiyuki Ason",
		first_verse: "すみのえのきしによるなみよるさへや",
		second_verse_raw: "ゆめのかよひぢひとめよくらむ",
		second_verse_card: "ゆめのかよひちひとめよくらむ",
		second_verse_answer: "ゆめ",
		kimariji: "す"
	},
	{
		id: "19",
		name: "Ise",
		first_verse: "なにはがたみじかきあしのふしのまも",
		second_verse_raw: "あはでこのよをすぐしてよとや",
		second_verse_card: "あはてこのよをすくしてよとや",
		second_verse_answer: "あはて",
		kimariji: "なにはが"
	},
	{
		id: "20",
		name: "Motoyoshi Shinno",
		first_verse: "わびぬればいまはたおなじなにはなる",
		second_verse_raw: "みをつくしてもあはむとぞおもふ",
		second_verse_card: "みをつくしてもあはむとそおもふ",
		second_verse_answer: "みをつくしても",
		kimariji: "わび"
	},
	{
		id: "21",
		name: "Sosei Hoshi",
		first_verse: "いまこむといひしばかりにながつきの",
		second_verse_raw: "ありあけのつきをまちいでつるかな",
		second_verse_card: "ありあけのつきをまちてつるかな",
		second_verse_answer: "あり",
		kimariji: "いまこ"
	},
	{
		id: "22",
		name: "Fun'ya no Yasuhide",
		first_verse: "ふくからにあきのくさきのしをるれば",
		second_verse_raw: "むべやまかぜをあらしといふらむ",
		second_verse_card: "むへやまかせをあらしといふらむ",
		second_verse_answer: "むへ",
		kimariji: "ふ"
	},
	{
		id: "23",
		name: "Oe no Chisato",
		first_verse: "つきみればちぢにものこそかなしけれ",
		second_verse_raw: "わがみひとつのあきにはあらねど",
		second_verse_card: "わかみひとつのあきにはあらねと",
		second_verse_answer: "わかみひ",
		kimariji: "つき"
	},
	{
		id: "24",
		name: "Kan Ke",
		first_verse: "このたびはぬさもとりあへずたむけやま",
		second_verse_raw: "もみぢのにしきかみのまにまに",
		second_verse_card: "もみちのにしきかみのまにまに",
		second_verse_answer: "もみ",
		kimariji: "この"
	},
	{
		id: "25",
		name: "Sanjo Udaijin",
		first_verse: "なにしおはばあふさかやまのさねかづら",
		second_verse_raw: "ひとにしられでくるよしもがな",
		second_verse_card: "ひとにしられてくるよしもかな",
		second_verse_answer: "ひとにし",
		kimariji: "なにし"
	},
	{
		id: "26",
		name: "Teishin Ko",
		first_verse: "をぐらやまみねのもみぢばこころあらば",
		second_verse_raw: "いまひとたびのみゆきまたなむ",
		second_verse_card: "いまひとたひのみゆきまたなむ",
		second_verse_answer: "いまひとたひのみ",
		kimariji: "をぐ"
	},
	{
		id: "27",
		name: "Chunagon Kanesuke",
		first_verse: "みかのはらわきてながるるいづみがは",
		second_verse_raw: "いつみきとてかこひしかるらむ",
		second_verse_card: "いつみきとてかこひしかるらむ",
		second_verse_answer: "いつみ",
		kimariji: "みかの"
	},
	{
		id: "28",
		name: "Minamoto no Muneyuki Ason",
		first_verse: "やまざとはふゆぞさびしさまさりける",
		second_verse_raw: "ひとめもくさもかれぬとおもへば",
		second_verse_card: "ひとめもくさもかれぬとおもへは",
		second_verse_answer: "ひとめ",
		kimariji: "やまざ"
	},
	{
		id: "29",
		name: "Oshikochi no Mitsune",
		first_verse: "こころあてにをらばやをらむはつしもの",
		second_verse_raw: "おきまどはせるしらぎくのはな",
		second_verse_card: "おきまとはせるしらきくのはな",
		second_verse_answer: "お",
		kimariji: "こころあ"
	},
	{
		id: "30",
		name: "Mibu no Tadamine",
		first_verse: "ありあけのつれなくみえしわかれより",
		second_verse_raw: "あかつきばかりうきものはなし",
		second_verse_card: "あかつきはかりうきものはなし",
		second_verse_answer: "あか",
		kimariji: "ありあ"
	},
	{
		id: "31",
		name: "Sakanoue no Korenori",
		first_verse: "あさぼらけありあけのつきとみるまでに",
		second_verse_raw: "よしののさとにふれるしらゆき",
		second_verse_card: "よしののさとにふれるしらゆき",
		second_verse_answer: "よし",
		kimariji: "あさぼらけあ"
	},
	{
		id: "32",
		name: "Harumichi no Tsuraki",
		first_verse: "やまがはにかぜのかけたるしがらみは",
		second_verse_raw: "ながれもあへぬもみぢなりけり",
		second_verse_card: "なかれもあへぬもみちなりけり",
		second_verse_answer: "なかれ",
		kimariji: "やまが"
	},
	{
		id: "33",
		name: "Ki no Tomonori",
		first_verse: "ひさかたのひかりのどけきはるのひに",
		second_verse_raw: "しづごころなくはなのちるらむ",
		second_verse_card: "しつこころなくはなのちるらむ",
		second_verse_answer: "しつ",
		kimariji: "ひさ"
	},
	{
		id: "34",
		name: "Fujiwara no Okikaze",
		first_verse: "たれをかもしるひとにせむたかさごの",
		second_verse_raw: "まつもむかしのともならなくに",
		second_verse_card: "まつもむかしのともならなくに",
		second_verse_answer: "まつも",
		kimariji: "たれ"
	},
	{
		id: "35",
		name: "Ki no Tsurayuki",
		first_verse: "ひとはいさこころもしらずふるさとは",
		second_verse_raw: "はなぞむかしのかににほひける",
		second_verse_card: "はなそむかしのかににほひける",
		second_verse_answer: "はなそ",
		kimariji: "ひとは"
	},
	{
		id: "36",
		name: "Kiyohara no Fukayabu",
		first_verse: "なつのよはまだよひながらあけぬるを",
		second_verse_raw: "くものいづこにつきやどるらむ",
		second_verse_card: "くものいつこにつきやとるらむ",
		second_verse_answer: "くもの",
		kimariji: "なつ"
	},
	{
		id: "37",
		name: "Fun'ya no Asayasu",
		first_verse: "しらつゆにかぜのふきしくあきののは",
		second_verse_raw: "つらぬきとめぬたまぞちりける",
		second_verse_card: "つらぬきとめぬたまそちりける",
		second_verse_answer: "つ",
		kimariji: "しら"
	},
	{
		id: "38",
		name: "Ukon",
		first_verse: "わすらるるみをばおもはずちかひてし",
		second_verse_raw: "ひとのいのちのをしくもあるかな",
		second_verse_card: "ひとのいのちのをしくもあるかな",
		second_verse_answer: "ひとの",
		kimariji: "わすら"
	},
	{
		id: "39",
		name: "Sangi Hitoshi",
		first_verse: "あさぢふのをののしのはらしのぶれど",
		second_verse_raw: "あまりてなどかひとのこひしき",
		second_verse_card: "あまりてなとかひとのこひしき",
		second_verse_answer: "あまり",
		kimariji: "あさぢ"
	},
	{
		id: "40",
		name: "Taira no Kanemori",
		first_verse: "しのぶれどいろにいでにけりわがこひは",
		second_verse_raw: "ものやおもふとひとのとふまで",
		second_verse_card: "ものやおもふとひとのとふまて",
		second_verse_answer: "もの",
		kimariji: "しの"
	},
	{
		id: "41",
		name: "Mibu no Tadami",
		first_verse: "こひすてふわがなはまだきたちにけり",
		second_verse_raw: "ひとしれずこそおもひそめしか",
		second_verse_card: "ひとしれすこそおもひそめしか",
		second_verse_answer: "ひとし",
		kimariji: "こひ"
	},
	{
		id: "42",
		name: "Kiyohara no Motosuke",
		first_verse: "ちぎりきなかたみにそでをしぼりつつ",
		second_verse_raw: "すゑのまつやまなみこさじとは",
		second_verse_card: "すゑのまつやまなみこさしとは",
		second_verse_answer: "す",
		kimariji: "ちぎりき"
	},
	{
		id: "43",
		name: "Gon Chunagon Atsutada",
		first_verse: "あひみてののちのこころにくらぶれば",
		second_verse_raw: "むかしはものをおもはざりけり",
		second_verse_card: "むかしはものをおもはさりけり",
		second_verse_answer: "むか",
		kimariji: "あひ"
	},
	{
		id: "44",
		name: "Chunagon Asatada",
		first_verse: "あふことのたえてしなくはなかなかに",
		second_verse_raw: "ひとをもみをもうらみざらまし",
		second_verse_card: "ひとをもみをもうらみさらまし",
		second_verse_answer: "ひとを",
		kimariji: "あふ"
	},
	{
		id: "45",
		name: "Kentoku Ko",
		first_verse: "あはれともいふべき人は思ほえで",
		second_verse_raw: "身のいたづらになりぬべきかな",
		second_verse_card: "身のいたつらになりぬへきかな",
		second_verse_answer: "身",
		kimariji: "あはれ"
	},
	{
		id: "46",
		name: "Sone no Yoshitada",
		first_verse: "ゆらのとをわたるふなびとかぢをたえ",
		second_verse_raw: "ゆくへもしらぬこひのみちかな",
		second_verse_card: "ゆくへもしらぬこひのみちかな",
		second_verse_answer: "ゆく",
		kimariji: "ゆら"
	},
	{
		id: "47",
		name: "Egyo Hoshi",
		first_verse: "やへむぐらしげれるやどのさびしきに",
		second_verse_raw: "ひとこそみえねあきはきにけり",
		second_verse_card: "ひとこそみえねあきはきにけり",
		second_verse_answer: "ひとこそみ",
		kimariji: "やへ"
	},
	{
		id: "48",
		name: "Minamoto no Shigeyuki",
		first_verse: "かぜをいたみいはうつなみのおのれのみ",
		second_verse_raw: "くだけてものをおもふころかな",
		second_verse_card: "くたけてものをおもふころかな",
		second_verse_answer: "くた",
		kimariji: "かぜを"
	},
	{
		id: "49",
		name: "Onakatomi no Yoshinobu Ason",
		first_verse: "みかきもりゑじのたくひのよるはもえ",
		second_verse_raw: "ひるはきえつつものをこそおもへ",
		second_verse_card: "ひるはきえつつものをこそおもへ",
		second_verse_answer: "ひる",
		kimariji: "みかき"
	},
	{
		id: "50",
		name: "Fujiwara no Yoshitaka",
		first_verse: "きみがためをしからざりしいのちさへ",
		second_verse_raw: "ながくもがなとおもひけるかな",
		second_verse_card: "なかくもかなとおもひけるかな",
		second_verse_answer: "なかく",
		kimariji: "きみがためを"
	},
	{
		id: "51",
		name: "Fujiwara no Sanekata Ason",
		first_verse: "かくとだにえやはいぶきのさしもぐさ",
		second_verse_raw: "さしもしらじなもゆるおもひを",
		second_verse_card: "さしもしらしなもゆるおもひを",
		second_verse_answer: "さ",
		kimariji: "かく"
	},
	{
		id: "52",
		name: "Fujiwara no Michinobu Ason",
		first_verse: "あけぬればくるるものとはしりながら",
		second_verse_raw: "なほうらめしきあさぼらけかな",
		second_verse_card: "なほうらめしきあさほらけかな",
		second_verse_answer: "なほう",
		kimariji: "あけ"
	},
	{
		id: "53",
		name: "Udaisho Michitsuna no Haha",
		first_verse: "なげきつつひとりぬるよのあくるまは",
		second_verse_raw: "いかにひさしきものとかはしる",
		second_verse_card: "いかにひさしきものとかはしる",
		second_verse_answer: "いか",
		kimariji: "なげき"
	},
	{
		id: "54",
		name: "Gido Sanshi no Haha",
		first_verse: "わすれじのゆくすゑまではかたければ",
		second_verse_raw: "けふをかぎりのいのちともがな",
		second_verse_card: "けふをかきりのいのちともかな",
		second_verse_answer: "けふを",
		kimariji: "わすれ"
	},
	{
		id: "55",
		name: "Dainagon Kinto",
		first_verse: "たきのおとはたえてひさしくなりぬれど",
		second_verse_raw: "なこそながれてなほきこえけれ",
		second_verse_card: "なこそなかれてなほきこえけれ",
		second_verse_answer: "なこ",
		kimariji: "たき"
	},
	{
		id: "56",
		name: "Izumi Shikibu",
		first_verse: "あらざらむこのよのほかのおもひでに",
		second_verse_raw: "いまひとたびのあふこともがな",
		second_verse_card: "いまひとたひのあふこともかな",
		second_verse_answer: "いまひとたひのあ",
		kimariji: "あらざ"
	},
	{
		id: "57",
		name: "Murasaki Shikibu",
		first_verse: "めぐりあひてみしやそれともわかぬまに",
		second_verse_raw: "くもがくれにしよはのつきかな",
		second_verse_card: "くもかくれにしよはのつきかな",
		second_verse_answer: "くもか",
		kimariji: "め"
	},
	{
		id: "58",
		name: "Daini no Sanmi",
		first_verse: "ありまやまゐなのささはらかぜふけば",
		second_verse_raw: "いでそよひとをわすれやはする",
		second_verse_card: "いてそよひとをわすれやはする",
		second_verse_answer: "いて",
		kimariji: "ありま"
	},
	{
		id: "59",
		name: "Akazome Emon",
		first_verse: "やすらはでねなましものをさよふけて",
		second_verse_raw: "かたぶくまでのつきをみしかな",
		second_verse_card: "かたふくまてのつきをみしかな",
		second_verse_answer: "かた",
		kimariji: "やす"
	},
	{
		id: "60",
		name: "Koshikibu no Naishi",
		first_verse: "おほえやまいくののみちのとほければ",
		second_verse_raw: "まだふみもみずあまのはしだて",
		second_verse_card: "またふみもみすあまのはしたて",
		second_verse_answer: "また",
		kimariji: "おほえ"
	},
	{
		id: "61",
		name: "Ise no Osuke",
		first_verse: "いにしへのならのみやこのやへざくら",
		second_verse_raw: "けふここのへににほひぬるかな",
		second_verse_card: "けふここのへににほひぬるかな",
		second_verse_answer: "けふこ",
		kimariji: "いに"
	},
	{
		id: "62",
		name: "Sei Shonagon",
		first_verse: "よをこめてとりのそらねははかるとも",
		second_verse_raw: "よにあふさかのせきはゆるさじ",
		second_verse_card: "よにあふさかのせきはゆるさし",
		second_verse_answer: "よに",
		kimariji: "よを"
	},
	{
		id: "63",
		name: "Sakyo no Daibu Michimasa",
		first_verse: "いまはただおもひたえなむとばかりを",
		second_verse_raw: "ひとづてならでいふよしもがな",
		second_verse_card: "ひとつてならていふよしもかな",
		second_verse_answer: "ひとつ",
		kimariji: "いまは"
	},
	{
		id: "64",
		name: "GonChunagon Sadayori",
		first_verse: "あさぼらけうぢのかはぎりたえだえに",
		second_verse_raw: "あらはれわたるせぜのあじろぎ",
		second_verse_card: "あらはれわたるせせのあしろき",
		second_verse_answer: "あら",
		kimariji: "あさぼらけう"
	},
	{
		id: "65",
		name: "Sagami",
		first_verse: "うらみわびほさぬそでだにあるものを",
		second_verse_raw: "こひにくちなむなこそをしけれ",
		second_verse_card: "こひにくちなむなこそをしけれ",
		second_verse_answer: "こひに",
		kimariji: "うら"
	},
	{
		id: "66",
		name: "Daisojo Gyoson",
		first_verse: "もろともにあはれとおもへやまざくら",
		second_verse_raw: "はなよりほかにしるひともなし",
		second_verse_card: "はなよりほかにしるひともなし",
		second_verse_answer: "はなよ",
		kimariji: "もろ"
	},
	{
		id: "67",
		name: "Suo no Naishi",
		first_verse: "はるのよのゆめばかりなるたまくらに",
		second_verse_raw: "かひなくたたむなこそをしけれ",
		second_verse_card: "かひなくたたむなこそをしけれ",
		second_verse_answer: "かひ",
		kimariji: "はるの"
	},
	{
		id: "68",
		name: "Sanjo In",
		first_verse: "こころにもあらでうきよにながらへば",
		second_verse_raw: "こひしかるべきよはのつきかな",
		second_verse_card: "こひしかるへきよはのつきかな",
		second_verse_answer: "こひし",
		kimariji: "こころに"
	},
	{
		id: "69",
		name: "Noin Hoshi",
		first_verse: "あらしふくみむろのやまのもみぢばは",
		second_verse_raw: "たつたのかはのにしきなりけり",
		second_verse_card: "たつたのかはのにしきなりけり",
		second_verse_answer: "たつ",
		kimariji: "あらし"
	},
	{
		id: "70",
		name: "Ryosen Hoshi",
		first_verse: "さびしさにやどをたちいでてながむれば",
		second_verse_raw: "いづこもおなじあきのゆふぐれ",
		second_verse_card: "いつこもおなしあきのゆふくれ",
		second_verse_answer: "いつこ",
		kimariji: "さ"
	},
	{
		id: "71",
		name: "Dainagon Tsunenobu",
		first_verse: "ゆふさればかどたのいなばおとづれて",
		second_verse_raw: "あしのまろやにあきかぜぞふく",
		second_verse_card: "あしのまろやにあきかせそふく",
		second_verse_answer: "あし",
		kimariji: "ゆふ"
	},
	{
		id: "72",
		name: "Yushi Naishinno-ke no Kii",
		first_verse: "おとにきくたかしのはまのあだなみは",
		second_verse_raw: "かけじやそでのぬれもこそすれ",
		second_verse_card: "かけしやそてのぬれもこそすれ",
		second_verse_answer: "かけ",
		kimariji: "おと"
	},
	{
		id: "73",
		name: "GonChunagon Masafusa",
		first_verse: "たかさごのをのへのさくらさきにけり",
		second_verse_raw: "とやまのかすみたたずもあらなむ",
		second_verse_card: "とやまのかすみたたすもあらなむ",
		second_verse_answer: "と",
		kimariji: "たか"
	},
	{
		id: "74",
		name: "Minamoto no Toshiyori Ason",
		first_verse: "うかりけるひとをはつせのやまおろしよ",
		second_verse_raw: "はげしかれとはいのらぬものを",
		second_verse_card: "はけしかれとはいのらぬものを",
		second_verse_answer: "はけ",
		kimariji: "うか"
	},
	{
		id: "75",
		name: "Fujiwara no Mototoshi",
		first_verse: "ちぎりおきしさせもがつゆをいのちにて",
		second_verse_raw: "あはれことしのあきもいぬめり",
		second_verse_card: "あはれことしのあきもいぬめり",
		second_verse_answer: "あはれ",
		kimariji: "ちぎりお"
	},
	{
		id: "76",
		name: "Hoshoji no Nyudo Kanpaku Dajodaijin",
		first_verse: "わたのはらこぎいでてみればひさかたの",
		second_verse_raw: "くもゐにまがふおきつしらなみ",
		second_verse_card: "くもゐにまかふおきつしらなみ",
		second_verse_answer: "くもゐ",
		kimariji: "わたのはらこ"
	},
	{
		id: "77",
		name: "Sutoku In",
		first_verse: "せをはやみいはにせかるるたきがはの",
		second_verse_raw: "われてもすゑにあはむとぞおもふ",
		second_verse_card: "われてもすゑにあはむとそおもふ",
		second_verse_answer: "われ",
		kimariji: "せ"
	},
	{
		id: "78",
		name: "Minamoto no Kanemasa",
		first_verse: "あはぢしまかよふちどりのなくこゑに",
		second_verse_raw: "いくよねざめぬすまのせきもり",
		second_verse_card: "いくよねさめぬすまのせきもり",
		second_verse_answer: "いく",
		kimariji: "あはぢ"
	},
	{
		id: "79",
		name: "Sakyo no Daibu Akisuke",
		first_verse: "あきかぜにたなびくくものたえまより",
		second_verse_raw: "もれいづるつきのかげのさやけさ",
		second_verse_card: "もれいつるつきのかけのさやけさ",
		second_verse_answer: "もれ",
		kimariji: "あきか"
	},
	{
		id: "80",
		name: "Taiken Moin no Horikawa",
		first_verse: "ながからむこころもしらずくろかみの",
		second_verse_raw: "みだれてけさはものをこそおもへ",
		second_verse_card: "みたれてけさはものをこそおもへ",
		second_verse_answer: "みたれて",
		kimariji: "ながか"
	},
	{
		id: "81",
		name: "Go Tokudaiji no Sadaijin",
		first_verse: "ほととぎすなきつるかたをながむれば",
		second_verse_raw: "ただありあけのつきぞのこれる",
		second_verse_card: "たたありあけのつきそのこれる",
		second_verse_answer: "たた",
		kimariji: "ほ"
	},
	{
		id: "82",
		name: "Doin Hoshi",
		first_verse: "おもひわびさてもいのちはあるものを",
		second_verse_raw: "うきにたへぬはなみだなりけり",
		second_verse_card: "うきにたへぬはなみたなりけり",
		second_verse_answer: "うき",
		kimariji: "おも"
	},
	{
		id: "83",
		name: "Kotaigogu no Daibu Toshinari",
		first_verse: "よのなかよみちこそなけれおもひいる",
		second_verse_raw: "やまのおくにもしかぞなくなる",
		second_verse_card: "やまのおくにもしかそなくなる",
		second_verse_answer: "やま",
		kimariji: "よのなかよ"
	},
	{
		id: "84",
		name: "Fujiwara no Kiyosuke Ason",
		first_verse: "ながらへばまたこのごろやしのばれむ",
		second_verse_raw: "うしとみしよぞいまはこひしき",
		second_verse_card: "うしとみしよそいまはこひしき",
		second_verse_answer: "うし",
		kimariji: "ながら"
	},
	{
		id: "85",
		name: "Shun'e Hoshi",
		first_verse: "よもすがらものおもふころはあけやらで",
		second_verse_raw: "ねやのひまさへつれなかりけり",
		second_verse_card: "ねやのひまさへつれなかりけり",
		second_verse_answer: "ね",
		kimariji: "よも"
	},
	{
		id: "86",
		name: "Saigyo Hoshi",
		first_verse: "なげけとてつきやはものをおもはする",
		second_verse_raw: "かこちがほなるわがなみだかな",
		second_verse_card: "かこちかほなるわかなみたかな",
		second_verse_answer: "かこ",
		kimariji: "なげけ"
	},
	{
		id: "87",
		name: "Jakuren Hoshi",
		first_verse: "むらさめのつゆもまだひぬまきのはに",
		second_verse_raw: "きりたちのぼるあきのゆふぐれ",
		second_verse_card: "きりたちのほるあきのゆふくれ",
		second_verse_answer: "き",
		kimariji: "む"
	},
	{
		id: "88",
		name: "Koka Moin no Betto",
		first_verse: "なにはえのあしのかりねのひとよゆゑ",
		second_verse_raw: "みをつくしてやこひわたるべき",
		second_verse_card: "みをつくしてやこひわたるへき",
		second_verse_answer: "みをつくしてや",
		kimariji: "なにはえ"
	},
	{
		id: "89",
		name: "Shokushi Naishinno",
		first_verse: "たまのをよたえなばたえねながらへば",
		second_verse_raw: "しのぶることのよわりもぞする",
		second_verse_card: "しのふることのよわりもそする",
		second_verse_answer: "しの",
		kimariji: "たま"
	},
	{
		id: "90",
		name: "Inpu Moin no Taifu",
		first_verse: "みせばやなをじまのあまのそでだにも",
		second_verse_raw: "ぬれにぞぬれしいろはかはらず",
		second_verse_card: "ぬれにそぬれしいろはかはらす",
		second_verse_answer: "ぬ",
		kimariji: "みせ"
	},
	{
		id: "91",
		name: "Go Kyogoku no Sessho Dajodaijin",
		first_verse: "きりぎりすなくやしもよのさむしろに",
		second_verse_raw: "ころもかたしきひとりかもねむ",
		second_verse_card: "ころもかたしきひとりかもねむ",
		second_verse_answer: "ころもか",
		kimariji: "きり"
	},
	{
		id: "92",
		name: "Nijo In no Sanuki",
		first_verse: "わがそではしほひにみえぬおきのいしの",
		second_verse_raw: "ひとこそしらねかわくまもなし",
		second_verse_card: "ひとこそしらねかわくまもなし",
		second_verse_answer: "ひとこそし",
		kimariji: "わがそ"
	},
	{
		id: "93",
		name: "Kamakura no Udaijin",
		first_verse: "よのなかはつねにもがもななぎさこぐ",
		second_verse_raw: "あまのをぶねのつなでかなしも",
		second_verse_card: "あまのをふねのつなてかなしも",
		second_verse_answer: "あまの",
		kimariji: "よのなかは"
	},
	{
		id: "94",
		name: "Sangi Masatsune",
		first_verse: "みよしののやまのあきかぜさよふけて",
		second_verse_raw: "ふるさとさむくころもうつなり",
		second_verse_card: "ふるさとさむくころもうつなり",
		second_verse_answer: "ふる",
		kimariji: "みよ"
	},
	{
		id: "95",
		name: "Saki no Daisojo Jien",
		first_verse: "おほけなくうきよのたみにおほふかな",
		second_verse_raw: "わがたつそまにすみぞめのそで",
		second_verse_card: "わかたつそまにすみそめのそて",
		second_verse_answer: "わかた",
		kimariji: "おほけ"
	},
	{
		id: "96",
		name: "Nyudo Saki no Dajodaijin",
		first_verse: "はなさそふあらしのにはのゆきならで",
		second_verse_raw: "ふりゆくものはわがみなりけり",
		second_verse_card: "ふりゆくものはわかみなりけり",
		second_verse_answer: "ふり",
		kimariji: "はなさ"
	},
	{
		id: "97",
		name: "GonChunagon Sadaie",
		first_verse: "こぬひとをまつほのうらのゆふなぎに",
		second_verse_raw: "やくやもしほのみもこがれつつ",
		second_verse_card: "やくやもしほのみもこかれつつ",
		second_verse_answer: "やく",
		kimariji: "こぬ"
	},
	{
		id: "98",
		name: "Junii Ietaka",
		first_verse: "かぜそよぐならのをがはのゆふぐれは",
		second_verse_raw: "みそぎぞなつのしるしなりける",
		second_verse_card: "みそきそなつのしるしなりける",
		second_verse_answer: "みそ",
		kimariji: "かぜそ"
	},
	{
		id: "99",
		name: "Gotoba In",
		first_verse: "ひともをしひともうらめしあぢきなく",
		second_verse_raw: "よをおもふゆゑにものおもふみは",
		second_verse_card: "よをおもふゆゑにものおもふみは",
		second_verse_answer: "よをお",
		kimariji: "ひとも"
	},
	{
		id: "100",
		name: "Juntoku In",
		first_verse: "ももしきやふるきのきばのしのぶにも",
		second_verse_raw: "なほあまりあるむかしなりけり",
		second_verse_card: "なほあまりあるむかしなりけり",
		second_verse_answer: "なほあ",
		kimariji: "もも"
	}
]);