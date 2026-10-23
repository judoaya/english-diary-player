// ===== シャドーイング用の文データ =====
// 毎週はこのファイルだけを貼り替えます（index.htmlはそのまま）。
// 1行 = 1文。   en: 英語 / ja: 日本語訳 / cat: 場面 / keep: true = 入れ替えない固定の文
// lang: "ru-RU" = ロシア語の声で読む（英語の文には不要）
// isNew: true = 今回新しく入った文（なくても動きます）
// 文字の中に " を使うときは \" と書きます。行の最後のカンマは消さないでください。

const SENTENCES_WEEK = "2026年10月 第4週（14文追加・全65文）";

const SENTENCES = [

  // --- 固定の挨拶（ロシア語） ---
  { en: "Здравствуйте", ja: "こんにちは", cat: "挨拶", keep: true, lang: "ru-RU" },

  // --- 挨拶 ---
  { en: "Hi Robin, it's lovely to finally meet you in person.", ja: "ロビン、やっと直接会えてうれしいです。", cat: "挨拶" },

  // --- 自己紹介 ---
  { en: "I'm Aya, from ejudo in Japan.", ja: "日本のejudoのアヤです。", cat: "自己紹介", keep: true },
  { en: "I write a weekly column about overseas judo players.", ja: "海外の柔道選手について週一でコラムを書いています。", cat: "自己紹介", keep: true },
  { en: "This is my first time covering a World Championships.", ja: "世界選手権の取材は今回が初めてです。", cat: "自己紹介" },
  { en: "I'm not a judo expert, I'm just a huge fan.", ja: "柔道の専門家ではなく、ただの大ファンです。", cat: "自己紹介", keep: true },
  { en: "I've been watching JudoTV almost every day since 2020.", ja: "2020年からほぼ毎日JUDO TVを見ています。", cat: "自己紹介" },

  // --- お礼 ---
  { en: "Thank you so much for your help with my accreditation.", ja: "取材証の件で助けていただき本当にありがとうございます。", cat: "お礼" },

  // --- 仕事 ---
  { en: "Where can I pick up my media pass?", ja: "メディアパスはどこで受け取れますか？", cat: "仕事" },
  { en: "Could you tell me where the mixed zone is?", ja: "ミックスゾーンはどこか教えてもらえますか？", cat: "仕事" },
  { en: "Is it okay if I record the interview?", ja: "インタビューを録音してもいいですか？", cat: "仕事" },
  { en: "Could I possibly speak to him after the medal ceremony?", ja: "表彰式の後に彼と話すことはできますか？", cat: "仕事" },
  { en: "I'll send you the article once it's published.", ja: "記事が公開されたらお送りします。", cat: "仕事" },
  { en: "Let me know if there's anything I should be careful about.", ja: "気をつけるべきことがあれば教えてください。", cat: "仕事" },
  { en: "Which seats are reserved for the press?", ja: "記者席はどこですか？", cat: "仕事" },
  { en: "Do I need to wear my pass at all times?", ja: "パスはずっと着けておく必要がありますか？", cat: "仕事" },
  { en: "When will the official photos be available?", ja: "公式写真はいつ公開されますか？", cat: "仕事" },
  { en: "Is there a quiet place where I can write?", ja: "記事を書ける静かな場所はありますか？", cat: "仕事" },
  { en: "Is the press conference in English or Russian?", ja: "記者会見は英語ですか、ロシア語ですか？", cat: "仕事", isNew: true },
  { en: "Where can I charge my laptop?", ja: "ノートパソコンを充電できる場所はどこですか？", cat: "仕事", isNew: true },
  { en: "What time does the venue open tomorrow?", ja: "明日、会場は何時に開きますか？", cat: "仕事", isNew: true },

  // --- 取材 ---
  { en: "Excuse me, do you have a minute for a quick interview?", ja: "すみません、少しインタビューの時間をいただけますか？", cat: "取材" },
  { en: "I'm writing for Japanese judo fans.", ja: "日本の柔道ファン向けに書いています。", cat: "取材" },
  { en: "What was going through your mind in the final?", ja: "決勝では何を考えていましたか？", cat: "取材" },
  { en: "How did you prepare for this tournament?", ja: "この大会に向けてどう準備しましたか？", cat: "取材" },
  { en: "Was it hard to make weight for this tournament?", ja: "この大会に向けての減量は大変でしたか？", cat: "取材" },
  { en: "Could you say a few words to your fans in Japan?", ja: "日本のファンにひと言お願いできますか？", cat: "取材" },
  { en: "Thank you so much, and good luck tomorrow.", ja: "ありがとうございました、明日も頑張ってください。", cat: "取材" },
  { en: "What does this medal mean to you?", ja: "このメダルはあなたにとってどんな意味がありますか？", cat: "取材" },
  { en: "Which match was the toughest today?", ja: "今日一番きつかった試合はどれですか？", cat: "取材" },
  { en: "What's your next goal?", ja: "次の目標は何ですか？", cat: "取材" },
  { en: "Can I quote you on that?", ja: "今のお話を記事で使ってもいいですか？", cat: "取材" },
  { en: "Your throw in the semi-final was incredible.", ja: "準決勝の投げはすごかったです。", cat: "取材", isNew: true },
  { en: "How's your knee? Is it okay now?", ja: "膝の具合はどうですか？もう大丈夫ですか？", cat: "取材", isNew: true },
  { en: "Could I take a quick photo with you?", ja: "一緒に写真を一枚撮ってもいいですか？", cat: "取材", isNew: true },
  { en: "Can I follow you on Instagram?", ja: "インスタをフォローしてもいいですか？", cat: "取材", isNew: true },

  // --- 聞き返し ---
  { en: "Sorry, could you say that again?", ja: "すみません、もう一度言ってもらえますか？", cat: "聞き返し", keep: true },
  { en: "Could you speak a little more slowly, please?", ja: "もう少しゆっくり話してもらえますか？", cat: "聞き返し", keep: true },
  { en: "Sorry, my English isn't perfect.", ja: "すみません、英語が完璧ではなくて。", cat: "聞き返し", keep: true },

  // --- 確認 ---
  { en: "So I should come back here at three o'clock, right?", ja: "じゃあ、3時にここに戻ってくればいいんですね？", cat: "確認" },
  { en: "How do you spell your name?", ja: "お名前のつづりを教えてもらえますか？", cat: "確認", keep: true },
  { en: "I'm not sure I understood. Could you write it down?", ja: "よく分からなかったので、書いてもらえますか？", cat: "確認", keep: true },

  // --- 雑談 ---
  { en: "The atmosphere in the arena is amazing.", ja: "会場の雰囲気がすごいですね。", cat: "雑談" },
  { en: "That was one of the best matches I've ever seen.", ja: "今まで見た中で最高の試合のひとつでした。", cat: "雑談" },
  { en: "Who do you think will win the mixed team event?", ja: "混合団体はどこが勝つと思いますか？", cat: "雑談" },
  { en: "I'm a big fan of the Georgian team.", ja: "ジョージアチームの大ファンなんです。", cat: "雑談" },
  { en: "It's my first time in Kazakhstan.", ja: "カザフスタンは初めてです。", cat: "雑談" },
  { en: "I'm originally from near Tokyo, but now I live in Akita, in the north of Japan.", ja: "東京の近くの出身で、今は日本の北にある秋田に住んでいます。", cat: "雑談", keep: true },
  { en: "How long have you been working for the IJF?", ja: "IJFで働いてどのくらいになりますか？", cat: "雑談" },
  { en: "Do you get any time off during the championships?", ja: "大会期間中にお休みはありますか？", cat: "雑談" },
  { en: "Have you had a chance to try any local food?", ja: "地元の料理は食べてみましたか？", cat: "雑談" },
  { en: "It's much warmer here than I expected.", ja: "思っていたよりずっと暖かいですね。", cat: "雑談" },
  { en: "I'm staying about twenty minutes' walk from the arena.", ja: "会場から歩いて20分くらいの所に泊まっています。", cat: "雑談" },
  { en: "Who's your favourite player to watch?", ja: "見ていて一番好きな選手は誰ですか？", cat: "雑談" },
  { en: "Your team does a great job with the live stream.", ja: "ライブ配信、いつも素晴らしいですね。", cat: "雑談", isNew: true },
  { en: "I often share IJF clips with Japanese fans.", ja: "IJFの動画をよく日本のファンに紹介しています。", cat: "雑談", isNew: true },
  { en: "I'm here until the very last day.", ja: "最終日までいます。", cat: "雑談", isNew: true },

  // --- 移動・生活 ---
  { en: "Could you take me to Barys Arena, please?", ja: "バリス・アリーナまでお願いします。", cat: "移動・生活", isNew: true },
  { en: "How long does it take to get to the airport?", ja: "空港までどのくらいかかりますか？", cat: "移動・生活", isNew: true },
  { en: "Is there a supermarket near here?", ja: "この近くにスーパーはありますか？", cat: "移動・生活", isNew: true },
  { en: "Can I pay by card?", ja: "カードで払えますか？", cat: "移動・生活", isNew: true },

  // --- 締め ---
  { en: "I really enjoyed working with you this week.", ja: "今週一緒に仕事ができて本当に楽しかったです。", cat: "締め" },
  { en: "I hope to see you again at the Tokyo Grand Slam.", ja: "東京グランドスラムでまた会えるといいですね。", cat: "締め" },
  { en: "Take care, and have a safe trip home.", ja: "お元気で、気をつけて帰ってください。", cat: "締め" },
  { en: "Thanks for everything. I couldn't have done it without you.", ja: "いろいろありがとう。あなたがいなかったらできませんでした。", cat: "締め" },

];

// ===== お休み中の文（読み込まれません。あとで戻すとき用） =====
// { en: "Thanks for the email last week. It was really helpful.", ja: "先週のメールありがとう。とても助かりました。", cat: "お礼" },
// { en: "What time does the final block start today?", ja: "今日の決勝ブロックは何時に始まりますか？", cat: "仕事" },
// { en: "Am I allowed to take photos from here?", ja: "ここから写真を撮ってもいいですか？", cat: "仕事" },
// { en: "Is there Wi-Fi in the media centre?", ja: "メディアセンターにWi-Fiはありますか？", cat: "仕事" },
// { en: "Would you be able to help me with translation?", ja: "通訳を手伝ってもらえますか？", cat: "仕事" },
// { en: "It'll only take two or three minutes.", ja: "2、3分で終わります。", cat: "取材" },
// { en: "You have a lot of fans in Japan.", ja: "日本にはあなたのファンがたくさんいます。", cat: "取材" },
// { en: "Congratulations on your medal!", ja: "メダルおめでとうございます！", cat: "取材" },
// { en: "How are you feeling right now?", ja: "今の気持ちはどうですか？", cat: "取材" },
// { en: "Who would you like to thank today?", ja: "今日は誰に感謝したいですか？", cat: "取材" },
// { en: "Just to check, is that today or tomorrow?", ja: "念のため、それは今日ですか明日ですか？", cat: "確認" },
// { en: "The Kazakh fans are so loud!", ja: "カザフスタンのファンの応援はすごい音量ですね！", cat: "雑談" },
// { en: "I didn't expect that result at all.", ja: "あの結果はまったく予想していませんでした。", cat: "雑談" },
// { en: "Have you been to Astana before?", ja: "アスタナには前に来たことがありますか？", cat: "雑談" },
// { en: "You must be exhausted after such a long day.", ja: "長い一日で疲れたでしょう。", cat: "雑談" },
