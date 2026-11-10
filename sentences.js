// ===== シャドーイング用の文データ =====
// 毎週はこのファイルだけを貼り替えます（index.htmlはそのまま）。
// 1行 = 1文。   en: 英語 / ja: 日本語訳 / cat: 場面 / keep: true = 入れ替えない固定の文
// lang: "ru-RU" = ロシア語の声で読む（英語の文には不要）
// isNew: true = 今回新しく入った文（なくても動きます）
// 文字の中に " を使うときは \" と書きます。行の最後のカンマは消さないでください。
//
// アスタナ用の文は sentences_astana.js に保管しています（読み込まれません）。

const SENTENCES_WEEK = "グランドスラム東京2026 取材用（12月5日・6日）全52文";

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
  { en: "Hi, I'm Aya from eJudo, a Japanese judo website.", ja: "こんにちは、日本の柔道サイトeJudoのアヤです。", cat: "自己紹介", isNew: true },
  { en: "I introduce overseas players to Japanese judo fans.", ja: "海外の選手を日本の柔道ファンに紹介しています。", cat: "自己紹介", isNew: true },
  { en: "I'm not a judo expert, I'm just a huge fan.", ja: "柔道の専門家ではなく、ただの大ファンです。", cat: "自己紹介", keep: true },
  { en: "I write a weekly column about overseas judo players.", ja: "海外の柔道選手について週一でコラムを書いています。", cat: "自己紹介", keep: true },
  { en: "Here's my card. You can scan the QR code.", ja: "名刺をどうぞ。QRコードを読み取れます。", cat: "自己紹介", isNew: true },
  { en: "Do you have a minute for a quick question?", ja: "少しだけ質問してもいいですか？", cat: "自己紹介", isNew: true },
  { en: "Can I walk with you and ask one quick question?", ja: "歩きながら、ひとつだけ質問してもいいですか？", cat: "自己紹介", isNew: true },
  { en: "Thank you so much for your time.", ja: "お時間をいただき、ありがとうございました。", cat: "自己紹介", isNew: true },

  // --- 許可・共通の質問 ---
  { en: "Do you mind if I record this?", ja: "録音してもいいですか？", cat: "許可と共通の質問", isNew: true },
  { en: "Would it be okay if I quote you in my article?", ja: "お話を記事で使ってもいいですか？", cat: "許可と共通の質問", isNew: true },
  { en: "Can I quote you on that?", ja: "今のお話を記事で使ってもいいですか？", cat: "許可と共通の質問" },
  { en: "Is it okay if I take a photo of you?", ja: "写真を撮ってもいいですか？", cat: "許可と共通の質問", isNew: true },
  { en: "How does it feel right now?", ja: "今の気持ちはどうですか？", cat: "許可と共通の質問", isNew: true },
  { en: "What do you like about Japan?", ja: "日本のどんなところが好きですか？", cat: "許可と共通の質問", isNew: true },
  { en: "What's your impression of Japanese fans?", ja: "日本のファンの印象はどうですか？", cat: "許可と共通の質問", isNew: true },
  { en: "How do you feel about today's result?", ja: "今日の結果をどう感じていますか？", cat: "許可と共通の質問", isNew: true },
  { en: "How do you like Tokyo so far?", ja: "東京はどうですか？", cat: "許可と共通の質問", isNew: true },
  { en: "Could you say a few words to your fans in Japan?", ja: "日本のファンにひと言お願いできますか？", cat: "許可と共通の質問" },
  { en: "Just one last question.", ja: "最後にひとつだけ質問させてください。", cat: "許可と共通の質問", isNew: true },

  // --- 選手ごとの話題 ---
  { en: "I saw your post about your dog. He's so cute!", ja: "犬の投稿を見ました。すごくかわいいですね！", cat: "選手ごとの話題", isNew: true },
  { en: "I saw on Instagram that you love ramen. Have you had any in Tokyo?", ja: "インスタでラーメンが好きだと見ました。東京で食べましたか？", cat: "選手ごとの話題", isNew: true },
  { en: "Did your family come to watch you today?", ja: "今日はご家族が応援に来ていますか？", cat: "選手ごとの話題", isNew: true },
  { en: "Your family must be so proud of you.", ja: "ご家族もきっと誇りに思っていますね。", cat: "選手ごとの話題", isNew: true },
  { en: "What's your favourite Japanese food?", ja: "好きな日本の食べ物は何ですか？", cat: "選手ごとの話題", isNew: true },
  { en: "Is this your first time in Japan?", ja: "日本は初めてですか？", cat: "選手ごとの話題", isNew: true },
  { en: "Is there anything you want to do in Tokyo?", ja: "東京でやってみたいことはありますか？", cat: "選手ごとの話題", isNew: true },

  // --- 負けた直後の選手へ ---
  { en: "Sorry, I know this is a hard moment.", ja: "つらいときにすみません。", cat: "負けた選手へ", isNew: true },
  { en: "You fought really well today.", ja: "今日は本当にいい試合でした。", cat: "負けた選手へ", isNew: true },
  { en: "I'm a big fan, and I'll keep supporting you.", ja: "大ファンです。これからも応援しています。", cat: "負けた選手へ", isNew: true },
  { en: "Please get some rest.", ja: "ゆっくり休んでくださいね。", cat: "負けた選手へ", isNew: true },
  { en: "No questions today. I just wanted to say thank you.", ja: "質問はありません。お礼を言いたかっただけです。", cat: "負けた選手へ", isNew: true },
  { en: "Thank you for the great match.", ja: "素晴らしい試合をありがとうございました。", cat: "負けた選手へ", isNew: true },
  { en: "Good luck at your next tournament.", ja: "次の大会も頑張ってください。", cat: "負けた選手へ", isNew: true },

  // --- スタッフ・受付 ---
  { en: "Excuse me, do you have a few minutes?", ja: "すみません、少しお時間ありますか？", cat: "スタッフと受付", isNew: true },
  { en: "What's the hardest part of your job?", ja: "お仕事で一番大変なことは何ですか？", cat: "スタッフと受付", isNew: true },
  { en: "What do you enjoy most about this work?", ja: "この仕事で一番やりがいを感じるのはどんなときですか？", cat: "スタッフと受付", isNew: true },
  { en: "Thank you for all your hard work.", ja: "いつもお疲れさまです。", cat: "スタッフと受付", isNew: true },
  { en: "Would it be okay to put your name and photo in my article?", ja: "お名前と写真を記事に載せてもいいですか？", cat: "スタッフと受付", isNew: true },
  { en: "Is it okay if I use your first name only?", ja: "下の名前だけ載せてもいいですか？", cat: "スタッフと受付", isNew: true },
  { en: "Where can I pick up my media pass?", ja: "メディアパスはどこで受け取れますか？", cat: "スタッフと受付", isNew: true },
  { en: "Which areas am I allowed to go into?", ja: "私はどのエリアに入れますか？", cat: "スタッフと受付", isNew: true },
  { en: "Am I allowed to take photos from here?", ja: "ここから写真を撮ってもいいですか？", cat: "スタッフと受付", isNew: true },
  { en: "Are there any rules about recording interviews?", ja: "インタビューの録音について、決まりはありますか？", cat: "スタッフと受付", isNew: true },
  { en: "Could you tell me where the mixed zone is?", ja: "ミックスゾーンはどこか教えてもらえますか？", cat: "スタッフと受付" },
  { en: "Where is the media working room?", ja: "メディア用の作業部屋はどこですか？", cat: "スタッフと受付", isNew: true },

];

// ===== 選手ごとの1問の枠（読み込まれません） =====
// Notionの「東京GS2026 選手メモ」にSNSの話題が入ったら、{{ }} の部分を差し替えて上の「選手ごとの話題」に追加します。
// { en: "I saw your post about {{ここにSNSの話題}}. {{ひと言の感想}}", ja: "{{SNSの話題}}の投稿を見ました。{{ひと言の感想}}", cat: "選手ごとの話題" },
// { en: "I saw on Instagram that you {{ここにSNSの話題}}. {{ひとつだけ質問}}", ja: "インスタで{{SNSの話題}}と見ました。{{ひとつだけ質問}}", cat: "選手ごとの話題" },
// { en: "How is {{ここにペットや家族の話題}} doing?", ja: "{{ペットや家族の話題}}は元気ですか？", cat: "選手ごとの話題" },
// { en: "Congratulations on {{ここに時事ネタ}}!", ja: "{{時事ネタ}}、おめでとうございます！", cat: "選手ごとの話題" },
