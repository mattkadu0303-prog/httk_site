export default {
  name: 'siteSettings',
  title: 'サイト設定',
  type: 'document',
  // シングルトン（1件のみ）
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'heroEyebrow',
      title: 'ヒーロー：小見出し',
      type: 'string',
      description: '例: secret code for office workers',
    },
    {
      name: 'heroSub',
      title: 'ヒーロー：サブタイトル（強調部分）',
      type: 'string',
      description: '例: 本当は定時で帰りたい',
    },
    {
      name: 'heroSubSuffix',
      title: 'ヒーロー：サブタイトル（後半）',
      type: 'string',
      description: '例: — でも言えない、全員の本音',
    },
    {
      name: 'heroCta1',
      title: 'ヒーロー：ボタン1テキスト',
      type: 'string',
      description: '例: アイテムを見る',
    },
    {
      name: 'heroCta2',
      title: 'ヒーロー：ボタン2テキスト',
      type: 'string',
      description: '例: 暗号を解読する',
    },
    {
      name: 'ticker',
      title: 'ティッカー（流れるテキスト）',
      type: 'array',
      of: [{ type: 'string' }],
      description: '流れるテキストのリスト',
    },
    {
      name: 'footerTagline',
      title: 'フッター：タグライン',
      type: 'string',
      description: '例: 本当は定時で帰りたい — みんなで帰れば恐くない',
    },
  ],
}
