// ===== シャドーイング用の文データ =====
// 毎週はこのファイルだけを貼り替えます（index.htmlはそのまま）。
// 1行 = 1文。   en: 英語 / ja: 日本語訳 / cat: 場面 / keep: true = 入れ替えない固定の文
// lang: "ru-RU" = ロシア語の声で読む（英語の文には不要）
// isNew: true = 今回新しく入った文（なくても動きます）
// player: 選手名（Notion「東京GS2026 選手メモ」の一言メモから作った文。表示用のメモで、なくても動きます）
// 文字の中に " を使うときは \" と書きます。行の最後のカンマは消さないでください。
//
// アスタナ用の文は sentences_astana.js に保管しています（読み込まれません）。

const SENTENCES_WEEK = "グランドスラム東京2026 取材用（12月5日・6日）全95文";

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
  { en: "I saw in a JudoTV interview that you're studying English.", ja: "コツォイエフ選手。JUDO TVのインタビューで、英語を勉強中だと見ました。", cat: "選手別", player: "Zelym KOTSOIEV", isNew: true },
  { en: "I'm studying too, but it's really hard!", ja: "コツォイエフ選手。私も勉強中ですが、すごく難しいです！", cat: "選手別", player: "Zelym KOTSOIEV", isNew: true },
  { en: "Your brother Aslan is really strong too. What's the secret?", ja: "コツォイエフ選手。弟のアスランもとても強いですよね。強さの秘密は何ですか？", cat: "選手別", player: "Zelym KOTSOIEV", isNew: true },
  { en: "Your kids are so cute!", ja: "ツカエフ選手。お子さん、めちゃくちゃかわいいですね！", cat: "選手別", player: "Zelim TCKAEV" },
  { en: "You and your wife both do judo. Do you think your kids will too?", ja: "ツカエフ選手。ご両親とも柔道家だから、お子さんも柔道をやりそうですか？", cat: "選手別", player: "Zelim TCKAEV" },
  { en: "I heard you speak Japanese. Can I ask my question in Japanese?", ja: "ヤン・ユンウェイ選手。日本語が話せると聞きました。日本語で質問してもいいですか？", cat: "選手別", player: "Yung Wei YANG" },
  { en: "I'll never forget your waza-ari against Abe Hifumi!", ja: "キム・チャンニョン選手。阿部一二三選手から技ありを取った試合、忘れられません！", cat: "選手別", player: "Channyeong KIM" },
  { en: "Honestly, I think it was your ippon.", ja: "キム・チャンニョン選手。正直、あれはあなたの一本だったと思っています。", cat: "選手別", player: "Channyeong KIM" },
  { en: "I love your couple channel. I've subscribed!", ja: "キム・チャンニョン選手。カップルチャンネルも面白くて、登録しています！", cat: "選手別", player: "Channyeong KIM" },
  { en: "Did your girlfriend come to Japan with you this time?", ja: "キム・チャンニョン選手。今回も彼女さんと一緒に来日していますか？", cat: "選手別", player: "Channyeong KIM" },
  { en: "You and your rival are such good friends. It's lovely to see.", ja: "キム・ハユン選手。代表を争うライバルとも仲がいいですね。見ていてうれしいです。", cat: "選手別", player: "Hayun KIM" },
  { en: "Why are Mongolian women so strong at judo?", ja: "アリウンザヤ選手。なぜモンゴル女子はそんなに強いんですか？", cat: "選手別", player: "Ariunzaya TERBISH", isNew: true },
  { en: "Your teammates are also your rivals. Is that hard sometimes?", ja: "ガンハイチ選手。チームメイトがライバルでもあるのは、大変なときもありますか？", cat: "選手別", player: "Gankhaich BOLD" },
  { en: "I love your dancing! Why are Mongolians so good at dancing?", ja: "エンフリーレン選手。あなたのダンス、大好きです！モンゴルの人はどうしてそんなにダンスが上手なんですか？", cat: "選手別", player: "Enkhriilen LKHAGVATOGOO", isNew: true },
  { en: "The Chinese team is so strong these days. What's the secret?", ja: "アイマン選手。最近の中国チームはとても強いですね。秘密は何ですか？", cat: "選手別", player: "Jinesinuer AYIMAN", isNew: true },
  { en: "You're so tall! Were you tall as a child too?", ja: "ソルディル選手。すごく背が高いですね！小さい頃から大きかったんですか？", cat: "選手別", player: "Jakub SORDYL", isNew: true },
  { en: "I call you the queen of armlocks!", ja: "シマンスカ選手。私はあなたを「関節技の女王」と呼んでいます！", cat: "選手別", player: "Angelika SZYMANSKA" },
  { en: "You often come to Japan to train.", ja: "ザホバ選手。よく日本に出稽古に来ていますね。", cat: "選手別", player: "Renata ZACHOVA", isNew: true },
  { en: "Have you ever had any trouble with the food here?", ja: "ザホバ選手。日本で食事に困ったことはありませんか？", cat: "選手別", player: "Renata ZACHOVA", isNew: true },
  { en: "My editor at eJudo calls you the judo computer. Do you like that nickname?", ja: "カッセ選手。eJudoの編集長は、あなたを「柔道コンピューター」と呼んでいます。このあだ名、気に入りましたか？", cat: "選手別", player: "Matthias CASSE" },
  { en: "Your ura-nage is so exciting to watch!", ja: "エリクソン選手。あなたの裏投げは見ていてワクワクします！", cat: "選手別", player: "Ida ERIKSSON" },
  { en: "Your o-goshi is my favourite throw!", ja: "テルツィドゥ選手。あなたの大腰、大好きな技です！", cat: "選手別", player: "Elisavet TELTSIDOU" },
  { en: "You've been doing great since you were a cadet. How did you get so strong?", ja: "アクタシュ選手。カデの頃から大活躍ですね。どうやってそんなに強くなったんですか？", cat: "選手別", player: "Emma-Melis AKTAS", isNew: true },
  { en: "What's the secret to your strength?", ja: "アクタシュ選手。あなたの強さの秘密を教えてください。", cat: "選手別", player: "Emma-Melis AKTAS", isNew: true },
  { en: "I love the Portuguese judo team!", ja: "ピナ選手。ポルトガルの柔道チームが大好きです！", cat: "選手別", player: "Tais PINA", isNew: true },
  { en: "It's a small team, but so strong. How do you do it?", ja: "ピナ選手。少数精鋭なのに、とても強いですね。どうやってそんなに強くなるんですか？", cat: "選手別", player: "Tais PINA", isNew: true },
  { en: "I read the EJU story about how you two met. I wrote about it in my column!", ja: "ドゥッカリ選手。お二人の出会いの話、欧州柔道連盟の記事で読みました。私のコラムでも書いたんです！", cat: "選手別", player: "Hassan DOUKKALI", isNew: true },

  // --- 負けた直後の選手へ ---
  { en: "Sorry, I know this is a hard moment.", ja: "つらいときにすみません。", cat: "負けた選手へ" },
  { en: "You fought really well today.", ja: "今日は本当にいい試合でした。", cat: "負けた選手へ" },
  { en: "I'm a big fan, and I'll keep supporting you.", ja: "大ファンです。これからも応援しています。", cat: "負けた選手へ" },
  { en: "Please get some rest.", ja: "ゆっくり休んでくださいね。", cat: "負けた選手へ" },
  { en: "No questions today. I just wanted to say thank you.", ja:
