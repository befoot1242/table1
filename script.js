// 1722779168.0190542
$(document).ready(function() {
// JSONデータ
var jsonData = [
[152, 0, 0, 0, 0, 'きお']
,[151, 0, 0, 0, 0, 'てこもと']
,[150, 3, 0, 0, 0, '急遽猫を噛む']
,[149, 0, 3, 0, 0, '夜警']
,[148, 0, 0, 0, 0, '青猫爆弾']
,[147, 0, 0, 0, 0, '卒業さん']
,[146, 0, 0, 3, 0, 'たか']
,[145, 0, 0, 0, 0, 'TwistNight']
,[144, 0, 0, 0, 0, 'みーん']
,[143, 0, 0, 0, 0, '神聖な大木']
,[142, 2, 0, 0, 2, 'エコノミー']
,[141, 0, 0, 0, 0, 'きりまる']
,[140, 0, 0, 0, 0, '物数']
,[139, 0, 0, 0, 0, 'スライムダンク']
,[138, 0, 0, 0, 0, '九人の侍']
,[137, 0, 0, 0, 0, 'さえずりの三つ巴']
,[136, 0, 0, 2, 0, 'シルバータント']
,[135, 0, 0, 0, 0, '家臣くん']
,[134, 0, 0, 0, 3, 'おお龍馬']
,[133, 0, 0, 0, 0, 'ニャン志']
,[132, 3, 0, 0, 0, 'のとさわ']
,[131, 3, 0, 0, 0, 'Nagomi']
,[130, 0, 0, 0, 0, 'ガルマッゾ']
,[129, 0, 0, 0, 0, 'まるお']
,[128, 0, 0, 0, 0, '家雨']
,[127, 0, 0, 0, 2, '空飛ぶタイヤ']
,[126, 0, 0, 0, 0, '新人ＱＰ']
,[125, 0, 0, 0, 0, 'ノビッタ']
,[124, 0, 2, 0, 0, 'POPOJI']
,[123, 0, 4, 0, 0, 'ラパス']
,[122, 0, 0, 0, 0, '確率論のパラテママ']
,[121, 0, 0, 0, 0, 'ぴよはる']
,[120, 2, 0, 0, 2, 'ミソ吉']
,[119, 0, 0, 0, 0, '三ル貝']
,[118, 0, 0, 0, 2, 'ジャスミン']
,[117, 2, 0, 0, 0, '蒼空便箋']
,[116, 2, 2, 3, 3, '含有量']
,[115, 0, 0, 0, 0, 'はさあかた']
,[114, 3, 0, 0, 0, '瀧山グングニル']
,[113, 0, 2, 2, 2, 'ボチョムキン']
,[112, 0, 0, 0, 0, '八子八百']
,[111, 0, 0, 4, 3, 'Sierra']
,[111, 0, 0, 4, 3, '馬to量子化']
,[110, 0, 0, 0, 0, 'メメント茂里町']
,[109, 0, 2, 0, 2, 'りーち']
,[108, 2, 0, 0, 0, 'あかしやきいも']
,[107, 0, 2, 0, 0, '仁義']
,[106, 0, 0, 0, 0, 'えのきときのこ']
,[105, 2, 2, 0, 2, 'まっこい']
,[104, 0, 0, 0, 0, 'どくバリー']
,[104, 0, 0, 0, 0, '止まれ']
,[103, 0, 0, 0, 0, 'グシャグシャバキバキ']
,[102, 0, 0, 0, 0, 'モノカルチャー']
,[101, 0, 0, 0, 0, 'マイマイル']
,[100, 0, 0, 0, 0, 'トドのつまみ']
,[99, 2, 3, 0, 0, 'ジャージの顔']
,[98, 0, 0, 2, 0, 'きまぐれ']
,[97, 0, 2, 0, 0, 'ラスター']
,[96, 0, 0, 0, 0, 'virus菌']
,[95, 0, 0, 0, 3, '9月が終わったら起こして']
,[94, 0, 0, 0, 0, 'ちきちきた']
,[93, 2, 0, 0, 2, 'ていく']
,[92, 0, 0, 0, 0, '粉石鹸']
,[91, 2, 0, 0, 0, 'あとひとつ流星群']
,[90, 0, 0, 0, 0, '阿吽']
,[89, 0, 0, 0, 0, '田中アオジル']
,[88, 0, 4, 0, 0, '南鳥。']
,[87, 0, 0, 0, 0, 'カーヴァー']
,[86, 0, 0, 0, 0, 'おうか']
,[85, 0, 0, 0, 0, 'カカ']
,[84, 0, 2, 0, 2, 'ゆうへぱおたのしみでしたね']
,[83, 0, 3, 0, 3, '煮込みVUITTON']
,[82, 3, 0, 0, 0, '笑うモールス信号']
,[81, 0, 0, 0, 0, '伝説商店街']
,[80, 0, 0, 0, 2, 'アガリブル']
,[79, 2, 0, 0, 0, 'くすも']
,[78, 0, 0, 0, 0, 'ぬー']
,[78, 0, 0, 0, 0, 'シャンプー剤']
,[77, 2, 0, 0, 0, '顔面激戦区']
,[76, 0, 0, 0, 0, '泣きゾーマ']
,[75, 0, 0, 0, 0, 'かねかわ']
,[74, 2, 2, 2, 2, 'KYネーネー']
,[73, 0, 0, 0, 0, 'スシトレイン']
,[72, 3, 0, 0, 2, '伯林']
,[71, 0, 0, 0, 0, '米(おこめ)']
,[70, 0, 0, 0, 0, 'いさむ']
,[69, 3, 0, 4, 0, 'すでにショーン']
,[68, 2, 0, 0, 0, '否定から入るオンザビーチ']
,[67, 0, 0, 0, 0, 'アキラ♪シゲル']
,[66, 0, 0, 0, 2, '農園']
,[65, 3, 2, 2, 3, 'げら']
,[64, 0, 0, 0, 0, 'せんだい']
,[63, 0, 2, 0, 2, 'ギャル']
,[62, 0, 0, 0, 2, 'さんれ']
,[61, 2, 0, 0, 3, '埼玉県民']
,[60, 0, 0, 0, 0, 'bmo']
,[59, 2, 0, 0, 3, 'たたかう']
,[58, 0, 0, 0, 0, '鶴bay']
,[57, 2, 0, 0, 0, 'ママまじん']
,[56, 2, 0, 0, 0, 'ミスチル']
,[55, 2, 0, 0, 0, '田口']
,[54, 0, 0, 0, 0, 'かすとろ']
,[53, 0, 0, 0, 0, 'SLIME']
,[52, 0, 0, 0, 0, 'pomio']
,[51, 0, 0, 0, 0, 'ブルックス']
,[50, 0, 0, 0, 0, 'たこ焼きボンバー']
,[49, 2, 2, 2, 2, 'かごめ']
,[49, 2, 2, 2, 2, 'ぱんだサーカス']
,[48, 0, 0, 0, 0, 'エネ彦']
,[47, 2, 0, 0, 0, '西園']
,[46, 0, 0, 0, 0, 'かえんのちき']
,[45, 0, 0, 0, 0, 'にとる']
,[44, 0, 0, 0, 2, 'みちる']
,[43, 2, 3, 0, 0, 'キミテル']
,[42, 3, 3, 0, 0, 'くとぅるふ']
,[41, 0, 0, 0, 0, '烈風ぺんぎん']
,[40, 0, 0, 0, 0, 'guniguni']
,[39, 0, 0, 0, 0, 'ベビーパンピー']
,[38, 0, 0, 0, 0, 'foo']
,[37, 0, 2, 0, 0, 'ジョイントコルテス']
,[36, 0, 0, 0, 0, 'ペドラザ']
,[35, 0, 0, 0, 4, '水山']
,[34, 0, 3, 0, 0, 'やる時々やるみ']
,[33, 0, 0, 0, 0, 'ふんりゅうおうのちゃんこ']
,[32, 2, 0, 2, 0, 'ゆう☆ポンデ']
,[31, 0, 0, 0, 0, 'kak']
,[30, 2, 4, 0, 0, 'YUDE.']
,[29, 2, 0, 0, 0, 'Y-Not']
,[28, 3, 0, 0, 2, '伸ちゃん']
,[27, 0, 2, 0, 0, 'さくらんぼソフト']
,[26, 0, 0, 0, 0, 'とおる']
,[25, 0, 0, 0, 0, 'モモス']
,[24, 0, 2, 0, 0, '飯田']
,[23, 2, 2, 2, 2, 'GRay']
,[22, 0, 0, 0, 0, '床屋みの竜レグナード']
,[21, 0, 0, 0, 0, 'とくめい']
,[20, 0, 0, 0, 0, 'すいほ']
,[19, 0, 3, 0, 0, 'あんざい@グライシンガー']
,[18, 0, 0, 0, 0, '苑苑']
,[17, 0, 0, 0, 0, '真似き猫']
,[16, 2, 2, 2, 3, 'ドスパラのゲーミング饅頭']
,[15, 0, 0, 0, 0, '中岡フェニックス']
,[14, 0, 3, 0, 3, 'がんばりま翔']
,[13, 2, 0, 0, 0, 'みくも']
,[12, 0, 0, 0, 2, 'チンカス本舗']
,[11, 0, 0, 0, 0, '依田']
,[10, 0, 0, 2, 0, '林原よしき']
,[9, 0, 0, 0, 0, 'のっぺ']
,[8, 3, 0, 0, 0, 'おせわがかり']
,[7, 0, 0, 0, 0, '昭和亭れとろ']
,[6, 2, 0, 0, 0, 'アトリエ']
,[5, 0, 0, 0, 0, 'ここから']
,[5, 0, 0, 0, 0, '光浦靖子（偽物）']
,[4, 2, 3, 0, 0, 'すいみんちゃん']
,[3, 0, 0, 0, 0, 'かにちゃん']
,[2, 0, 0, 0, 0, 'ロンパ']
        // 他のデータ...
    ];
    // DataTableの初期化
    $('#example').DataTable({
        data: jsonData,
        scrollY: "70vh",
        displayLength: 101,
        order: [ [ 0, "desc" ] ],
        columns: [
            { title: "Column" },
            { title: "バサラ大将" },
            { title: "坂本" },
            { title: "尊敬ラーメン屋" },
            { title: "ゆっけ" },
            { title: "voter" }
        ]
    });
});

