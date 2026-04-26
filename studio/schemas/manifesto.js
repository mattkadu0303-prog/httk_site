export default {
  name: 'manifesto',
  title: 'マニフェスト',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'mainText',
      title: 'メインテキスト（大きな文字）',
      type: 'text',
      rows: 4,
      description: '例: 定時退社はさぼりじゃない。\nそれは権利であり、\n賢さの証明だ。\n※改行はそのまま反映されます',
    },
    {
      name: 'underlineWords',
      title: '下線を引く単語',
      type: 'array',
      of: [{ type: 'string' }],
      description: '例: さぼりじゃない、権利、賢さ',
    },
    {
      name: 'subText',
      title: 'サブテキスト',
      type: 'text',
      rows: 3,
      description: '例: 残業が美徳とされてきた時代は終わった。...',
    },
    {
      name: 'ctaText',
      title: 'ボタンテキスト',
      type: 'string',
      description: '例: 今すぐ宣言する',
    },
  ],
}
