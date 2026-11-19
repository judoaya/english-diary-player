// ===== シャドーイング用の文データ =====
// 毎週はこのファイルだけを貼り替えます（index.htmlはそのまま）。
// 1行 = 1文。   en: 英語 / ja: 日本語訳 / cat: 場面 / keep: true = 入れ替えない固定の文
// lang: "ru-RU" = ロシア語の声で読む（英語の文には不要）
// isNew: true = 今回新しく入った文（なくても動きます）
// player: 選手名（Notion「東京GS2026 選手メモ」の一言メモから作った文。表示用のメモで、なくても動きます）
// 文字の中に " を使うときは \" と書きます。行の最後のカンマは消さないでください。
//
// アスタナ用の文は sentences_astana.js に保管しています（読み込まれません）。

const SENTENCES_WEEK = "グランドスラム東京2026 取材用（12月5日・6日）全98文";

const SENTENCES = [

  // --- 聞き返し・確認 ---
  { en: "Sorry, could you say that again?", ja: "すみません、もう一度言ってもらえますか？", cat: "聞き返し", keep: true },
  { en: "Could you speak a little more slowly, please?", ja: "もう少しゆっくり話してもらえますか？", cat: "聞き返し", keep: true },
  { en: "Sorry, my English isn't perfect.", ja: "すみません、英語が完璧ではなくて。", cat: "聞き返し", keep: true },
  { en: "Sorry, how do you pronounce your name?", ja: "すみません、お名前はどう発音しますか？", cat: "聞き返し", keep: true },
  { en: "Could you write your name here for me?", ja: "ここにお名前を書いてもらえますか？", cat: "聞き返し", keep: true },
  { en: "I'm not sure I understood. Could you write it down?", ja: "よく分からなかったので、書いてもらえますか？", cat: "聞き返し", keep: true },

  // --- 自己紹介・名刺 ---
  { en: "Здравствуйте", ja: "こんにちは", cat: "自己紹介", keep: true, lang: "ru-RU" },
  { en: "Hi, I'm Aya from eJudo, a Japanese judo website.", ja: "こんにちは、日本の柔道サイトeJudoのアヤです。", cat: "自己紹介" },
  { en: "I introduce overseas players to Japanese judo fans.", ja: "海外の選手を日本の柔道ファンに紹介しています。", cat: "自己紹介" },
  { en: "I'm not a judo expert, I'm just a huge fan.", ja: "柔道の専門家ではなく、ただの大ファンです。", cat: "自己紹介", keep: true },
  { en: "I write a weekly column about overseas judo players.", ja: "海外の柔道選手について週一でコラムを書いています。", cat: "自己紹介", keep: true },
  { en: "Here's my card. You can scan the QR code.", ja: "名刺をどうぞ。QRコードを読み取れます。", cat: "自己紹介" },
  { en: "Do you have a minute for a quick question?", ja: "少しだけ質問してもいいですか？", cat: "自己紹介" },
  { en: "Can I walk with you and ask one quick question?", ja: "歩きながら、ひとつだけ質問してもいいですか？", cat: "自己紹介" },
  { en: "Thank you so much for your time.", ja: "お時間をいただき、ありがとうございました。", cat: "自己紹介" },

  // --- 許可・共通の質問 ---
  { en: "Do you mind if I record this?", ja: "録音してもいいですか？", cat: "許可と共通の質問" },
  { en: "Would it be okay if I quote you in my article?", ja: "お話を記事で使ってもいいですか？", cat: "許可と共通の質問" },
  { en: "Can I quote you on that?", ja: "今のお話を記事で使ってもいいですか？", cat: "許可と共通の質問" },
  { en: "Is it okay if I take a photo of you?", ja: "写真を撮ってもいいですか？", cat: "許可と共通の質問" },
  { en: "How does it feel right now?", ja: "今の気持ちはどうですか？", cat: "許可と共通の質問" },
  { en: "What do you like about Japan?", ja: "日本のどんなところが好きですか？", cat: "許可と共通の質問" },
  { en: "What's your impression of Japanese fans?", ja: "日本のファンの印象はどうですか？", cat: "許可と共通の質問" },
  { en: "How do you feel about today's result?", ja: "今日の結果をどう感じていますか？", cat: "許可と共通の質問" },
  { en: "How do you like Tokyo so far?", ja: "東京はどうですか？", cat: "許可と共通の質問" },
  { en: "Could you say a few words to your fans in Japan?", ja: "日本のファンにひと言お願いできますか？", cat: "許可と共通の質問" },
  { en: "What's your favourite Japanese word?", ja: "好きな日本語は何ですか？", cat: "許可と共通の質問" },
  { en: "What did you have for breakfast today?", ja: "今朝は何を食べましたか？", cat: "許可と共通の質問", keep: true, isNew: true },
  { en: "Just one last question.", ja: "最後にひとつだけ質問させてください。", cat: "許可と共通の質問" },

  // --- 選手ごとの話題 ---
  { en: "Did your family come to watch you today?", ja: "今日はご家族が応援に来ていますか？", cat: "選手ごとの話題" },
  { en: "Your family must be so proud of you.", ja: "ご家族もきっと誇りに思っていますね。", cat: "選手ごとの話題" },
  { en: "What's your favourite Japanese food?", ja: "好きな日本の食べ物は何ですか？", cat: "選手ごとの話題" },
  { en: "How many times have you been to Japan?", ja: "日本に来るのは何度目ですか？", cat: "選手ごとの話題", isNew: true },
  { en: "Is there anything you want to do in Tokyo?", ja: "東京でやってみたいことはありますか？", cat: "選手ごとの話題" },

  // --- 選手別（Notion 選手メモの一言メモから） ---
  { en: "Your grandfather is a judo legend. Do you feel any pressure?", ja: "ヨネヅカ選手。おじいさんは柔道界のレジェンドですね。プレッシャーはありますか？", cat: "選手別", player: "Jack YONEZUKA", isNew: true },
  { en: "I watch your YouTube channel. Your dad is so powerful!", ja: "ジョナサン・ヤン選手。YouTubeチャンネル見ています。お父さん、すごくパワフルですね！", cat: "選手別", player: "Jonathan YANG", isNew: true },
  { en: "Does he inspire you? What do you respect most about him?", ja: "ジョナサン・ヤン選手。お父さんから刺激を受けますか？一番尊敬するところはどこですか？", cat: "選手別", player: "Jonathan YANG", isNew: true },
  { en: "The LA Olympics will be at home for you. Are you aiming for them?", ja: "ラボルデ選手。ロス五輪は地元開催ですね。目指していますか？", cat: "選手別", player: "Maria Celia LABORDE" },
  { en: "You're always at the top of your weight class. What's your secret?", ja: "ゴティエドラポー選手。いつも階級のトップにいますね。秘訣は何ですか？", cat: "選手別", player: "Francois GAUTHIER DRAPEAU", isNew: true },
  { en: "Congratulations on your wedding!", ja: "ジェフェン・プリモ選手。ご結婚おめでとうございます！", cat: "選手別", player: "Gefen PRIMO", isNew: true },
  { en: "Your husband is a football player. How do you manage meals when you're cutting weight?", ja: "ジェフェン・プリモ選手。旦那さんはサッカー選手ですね。減量中、食事はどうしていますか？", cat: "選手別", player: "Gefen PRIMO", isNew: true },
  { en: "Congratulations on your world silver! Did you do anything special to celebrate?", ja: "ケレム・プリモ選手。世界選手権の銀メダルおめでとうございます！何か特別なお祝いはしましたか？", cat: "選手別", player: "Kerem PRIMO", isNew: true },
  { en: "Congratulations on getting married!", ja: "ネルソンレヴィ選手。ご結婚おめでとうございます！", cat: "選手別", player: "Timna NELSON LEVY", isNew: true },
  { en: "Your teammates Tamar and Gefen got married too.", ja: "ネルソンレヴィ選手。チームメイトのタマルさんもジェフェンさんも結婚しましたね。", cat: "選手別", player: "Timna NELSON LEVY", isNew: true },
  { en: "You all look so happy. It makes me happy too!", ja: "ネルソンレヴィ選手。みんな幸せそうで、見ていて私もうれしいです！", cat: "選手別", player: "Timna NELSON LEVY", isNew: true },
  { en: "How's married life?", ja: "ネルソンレヴィ選手。新婚生活はどうですか？", cat: "選手別", player: "Timna NELSON LEVY", isNew: true },
  { en: "You're the new star of Israeli judo. How does that feel?", ja: "アシュピズ選手。イスラエル柔道の新しいスターですね。どんな気持ちですか？", cat: "選手別", player: "Izhak ASHPIZ" },
  { en: "You compete at almost every tournament! Don't you get tired?", ja: "ヘルシュコ選手。ほとんどの大会に出ていますね！疲れませんか？", cat: "選手別", player: "Raz HERSHKO" },
  { en: "Congratulations on your world title and your wedding! What a year!", ja: "ツノダ選手。世界一とご結婚、おめでとうございます！最高の一年ですね！", cat: "選手別", player: "Ai TSUNODA ROUSTANT" },
  { en: "You're even bigger in person! How tall are you?", ja: "ナシボフ選手。実物はさらに大きいですね！身長は何センチですか？", cat: "選手別", player: "Kanan NASIBOV" },
  { en: "I saw in a JudoTV interview that you're studying English.", ja: "コツォイエフ選手。JUDO TVのインタビューで、英語を勉強中だと見ました。", cat: "選手別",
