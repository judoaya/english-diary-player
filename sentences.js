// ===== シャドーイング用の文データ =====
// 毎週はこのファイルだけを貼り替えます（index.htmlはそのまま）。
// 1行 = 1文。   en: 英語 / ja: 日本語訳 / cat: 場面 / keep: true = 入れ替えない固定の文
// lang: "ru-RU" = ロシア語の声で読む（英語の文には不要）
// isNew: true = 今回新しく入った文（なくても動きます）
// player: 選手名（Notion「東京GS2026 選手メモ」の一言メモから作った文。表示用のメモで、なくても動きます）
// 文字の中に " を使うときは \" と書きます。行の最後のカンマは消さないでください。
//
// アスタナ用の文は sentences_astana.js に保管しています（読み込まれません）。

const SENTENCES_WEEK = "グランドスラム東京2026 取材用（12月5日・6日）全80文";

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
  { en: "What's your favourite Japanese word?", ja: "好きな日本語は何ですか？", cat: "許可と共通の質問", isNew: true },
  { en: "What did you have for breakfast today?", ja: "今朝は何を食べましたか？", cat: "許可と共通の質問", keep: true, isNew: true },
  { en: "Just one last question.", ja: "最後にひとつだけ質問させてください。", cat: "許可と共通の質問" },

  // --- 選手ごとの話題 ---
  { en: "Did your family come to watch you today?", ja: "今日はご家族が応援に来ていますか？", cat: "選手ごとの話題" },
  { en: "Your family must be so proud of you.", ja: "ご家族もきっと誇りに思っていますね。", cat: "選手ごとの話題" },
  { en: "What's your favourite Japanese food?", ja: "好きな日本の食べ物は何ですか？", cat: "選手ごとの話題" },
  { en: "Is this your first time in Japan?", ja: "日本は初めてですか？", cat: "選手ごとの話題" },
  { en: "Is there anything you want to do in Tokyo?", ja: "東京でやってみたいことはありますか？", cat: "選手ごとの話題" },

  // --- 選手別（Notion 選手メモの一言メモから） ---
  { en: "I love your YouTube channel! Is Japan special to you because of your family?", ja: "ヨネヅカ選手。YouTube、大好きです！ご家族の関係で、日本は特別な場所ですか？", cat: "選手別", player: "Jack YONEZUKA", isNew: true },
  { en: "I watch your dad's YouTube channel! Do your brothers give you advice?", ja: "ジョナサン・ヤン選手。お父さんのYouTube見ています！ご兄弟からアドバイスはもらいますか？", cat: "選手別", player: "Jonathan YANG", isNew: true },
  { en: "The LA Olympics will be at home for you. Are you aiming for them?", ja: "ラボルデ選手。ロス五輪は地元開催ですね。目指していますか？", cat: "選手別", player: "Maria Celia LABORDE", isNew: true },
  { en: "Many Canadian players have retired. Do you feel more responsibility now?", ja: "ゴティエドラポー選手。カナダは引退した選手が多いですね。責任を感じますか？", cat: "選手別", player: "Francois GAUTHIER DRAPEAU", isNew: true },
  { en: "Congratulations on your wedding! Is it nice to travel with your sister?", ja: "ジェフェン・プリモ選手。ご結婚おめでとうございます！妹さんと一緒に遠征できるのはうれしいですか？", cat: "選手別", player: "Gefen PRIMO", isNew: true },
  { en: "Congratulations on your world silver! Do you and your sister train together?", ja: "ケレム・プリモ選手。世界選手権の銀メダルおめでとうございます！お姉さんと一緒に練習しますか？", cat: "選手別", player: "Kerem PRIMO", isNew: true },
  { en: "Congratulations on getting married! How's married life?", ja: "ネルソンレヴィ選手。ご結婚おめでとうございます！新婚生活はどうですか？", cat: "選手別", player: "Timna NELSON LEVY", isNew: true },
  { en: "You're the new star of Israeli judo. How does that feel?", ja: "アシュピズ選手。イスラエル柔道の新しいスターですね。どんな気持ちですか？", cat: "選手別", player: "Izhak ASHPIZ", isNew: true },
  { en: "You compete at almost every tournament! Don't you get tired?", ja: "ヘルシュコ選手。ほとんどの大会に出ていますね！疲れませんか？", cat: "選手別", player: "Raz HERSHKO", isNew: true },
  { en: "Congratulations on your world title and your wedding! What a year!", ja: "ツノダ選手。世界一とご結婚、おめでとうございます！最高の一年ですね！", cat: "選手別", player: "Ai TSUNODA ROUSTANT", isNew: true },
  { en: "You're even bigger in person! How tall are you?", ja: "ナシボフ選手。実物はさらに大きいですね！身長は何センチですか？", cat: "選手別", player: "Kanan NASIBOV", isNew: true },
  { en: "I heard you're studying English. Shall we talk in English or Russian?", ja: "コツォイエフ選手。英語を勉強中だと聞きました。英語とロシア語、どちらで話しましょうか？", cat: "選手別", player: "Zelym KOTSOIEV", isNew: true },
  { en: "Your kids are so cute on Instagram! Do they like judo too?", ja: "ツカエフ選手。インスタのお子さん、すごくかわいいです！お子さんも柔道が好きですか？", cat: "選手別", player: "Zelim TCKAEV", isNew: true },
  { en: "I heard you speak Japanese. Can I ask my question in Japanese?", ja: "ヤン・ユンウェイ選手。日本語が話せると聞きました。日本語で質問してもいいですか？", cat: "選手別", player: "Yung Wei YANG", isNew: true },
  { en: "I'll never forget your waza-ari against Abe Hifumi!", ja: "キム・チャンニョン選手。阿部一二三選手から技ありを取った試合、忘れられません！", cat: "選手別", player: "Channyeong KIM", isNew: true },
  { en: "You and your rival are such good friends. It's lovely to see.", ja: "キム・ハユン選手。代表を争うライバルとも仲がいいですね。見ていてうれしいです。", cat: "選手別", player: "Hayun KIM", isNew: true },
  { en: "Mongolian women's judo is so strong. How do you stay motivated?", ja: "アリウンザヤ選手。モンゴル女子は本当に層が厚いですね。モチベーションはどう保っていますか？", cat: "選手別", player: "Ariunzaya TERBISH", isNew: true },
  { en: "Your teammates are also your rivals. Is that hard sometimes?", ja: "ガンハイチ選手。チームメイトがライバルでもあるのは、大変なときもありますか？", cat: "選手別", player: "Gankhaich BOLD", isNew: true },
  { en: "I love your dance videos! Where did you learn to dance?", ja: "エンフリーレン選手。ダンス動画、大好きです！ダンスはどこで覚えたんですか？", cat: "選手別", player: "Enkhriilen LKHAGVATOGOO", isNew: true },
  { en: "There are so many strong players in your team. What keeps you going?", ja: "アイマン選手。チームに強い選手がたくさんいますね。何が支えになっていますか？", cat: "選手別", player: "Jinesinuer AYIMAN", isNew: true },
  { en: "The fight for a place on your national team is really tough. How do you handle it?", ja: "ソルディル選手。国内の代表争いは本当に厳しいですね。どう向き合っていますか？", cat: "選手別", player: "Jakub SORDYL", isNew: true },
  { en: "I call you the queen of armlocks!", ja: "シマンスカ選手。私はあなたを「関節技の女王」と呼んでいます！", cat: "選手別", player: "Angelika SZYMANSKA", isNew: true },
  { en: "You often come to Japan to train. What do you like most about it?", ja: "ザホバ選手。よく日本に出稽古に来ていますね。日本の一番好きなところは何ですか？", cat: "選手別", player: "Renata ZACHOVA", isNew: true },
  { en: "I call you the judo computer. Do you like that nickname?", ja: "カッセ選手。私はあなたを「柔道コンピューター」と呼んでいます。このあだ名、気に入りましたか？", cat: "選手別", player: "Matthias CASSE", isNew: true },
  { en: "Your ura-nage is so exciting to watch!", ja: "エリクソン選手。あなたの裏投げは見ていてワクワクします！", cat: "選手別", player: "Ida ERIKSSON", isNew: true },
  { en: "Your o-goshi is my favourite throw!", ja: "テルツィドゥ選手。あなたの大腰、大好きな技です！", cat: "選手別", player: "Elisavet TELTSIDOU", isNew: true },
  { en: "You're so young and already at a Grand Slam. How does it feel?", ja: "アクタシュ選手。その若さでグランドスラム出場、どんな気持ちですか？", cat: "選手別", player: "Emma-Melis AKTAS", isNew: true },
  { en: "You're one of Portugal's rising stars. What's your dream?", ja: "ピナ選手。ポルトガルの期待の若手ですね。夢は何ですか？", cat: "選手別", player: "Tais PINA", isNew: true },
  { en: "I read the EJU story about how you two met. I wrote about it in my column!", ja: "ドゥッカリ選手。お二人の出会いの話、欧州柔道連盟の記事で読みました。私のコラムでも書いたんです！", cat: "選手別", player: "Hassan DOUKKALI", isNew: true },
  // --- 負けた直後の選手へ ---
  { en: "Sorry, I know this is a hard moment.", ja: "つらいときにすみません。", cat: "負けた選手へ" },
  { en: "You fought really well today.", ja: "今日は本当にいい試合でした。", cat: "負けた選手へ" },
  { en: "I'm a big fan, and I'll keep supporting you.", ja: "大ファンです。これからも応援しています。", cat: "負けた選手へ" },
  { en: "Please get some rest.", ja: "ゆっくり休んでくださいね。", cat: "負けた選手へ" },
  { en: "No questions today. I just wanted to say thank you.", ja: "質問はありません。お礼を言いたかっただけです。", cat: "負けた選手へ" },
  { en: "Thank you for the great match.", ja: "素晴らしい試合をありがとうございました。", cat: "負けた選手へ" },
  { en: "Good luck at your next tournament.", ja: "次の大会も頑張ってください。", cat: "負けた選手へ" },

  // --- スタッフ・受付 ---
  { en: "Excuse me, do you have a few minutes?", ja: "すみません、少しお時間ありますか？", cat: "スタッフと受付" },
  { en: "What's the hardest part of your job?", ja: "お仕事で一番大変なことは何ですか？", cat: "スタッフと受付" },
  { en: "What do you enjoy most about this work?", ja: "この仕事で一番やりがいを感じるのはどんなときですか？", cat: "スタッフと受付" },
  { en: "Thank you for all your hard work.", ja: "いつもお疲れさまです。", cat: "スタッフと受付" },
  { en: "Would it be okay to put your name and photo in my article?", ja: "お名前と写真を記事に載せてもいいですか？", cat: "スタッフと受付" },
  { en: "Is it okay if I use your first name only?", ja: "下の名前だけ載せてもいいですか？", cat: "スタッフと受付" },
  { en: "Where can I pick up my media pass?", ja: "メディアパスはどこで受け取れますか？", cat: "スタッフと受付" },
  { en: "Which areas am I allowed to go into?", ja: "私はどのエリアに入れますか？", cat: "スタッフと受付" },
  { en: "Am I allowed to take photos from here?", ja: "ここから写真を撮ってもいいですか？", cat: "スタッフと受付" },
  { en: "Are there any rules about recording interviews?", ja: "インタビューの録音について、決まりはありますか？", cat: "スタッフと受付" },
  { en: "Could you tell me where the mixed zone is?", ja: "ミックスゾーンはどこか教えてもらえますか？", cat: "スタッフと受付" },
  { en: "Where is the media working room?", ja: "メディア用の作業部屋はどこですか？", cat: "スタッフと受付" },

];

// ===== 選手ごとの1問の枠（読み込まれません） =====
// Notionの「東京GS2026 選手メモ」にSNSの話題が入ったら、{{ }} の部分を差し替えて上の「選手ごとの話題」に追加します。
// { en: "I saw your post about {{ここにSNSの話題}}. {{ひと言の感想}}", ja: "{{SNSの話題}}の投稿を見ました。{{ひと言の感想}}", cat: "選手ごとの話題" },
// { en: "I saw on Instagram that you {{ここにSNSの話題}}. {{ひとつだけ質問}}", ja: "インスタで{{SNSの話題}}と見ました。{{ひとつだけ質問}}", cat: "選手ごとの話題" },
// { en: "How is {{ここにペットや家族の話題}} doing?", ja: "{{ペットや家族の話題}}は元気ですか？", cat: "選手ごとの話題" },
// { en: "Congratulations on {{ここに時事ネタ}}!", ja: "{{時事ネタ}}、おめでとうございます！", cat: "選手ごとの話題" },
