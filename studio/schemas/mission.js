export default {
  name: 'mission',
  title: 'ミッション',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'statNumber',
      title: '大きな数字・時刻',
      type: 'string',
      description: '例: 6:00',
    },
    {
      name: 'statLabel',
      title: '数字の説明',
      type: 'string',
      description: '例: それが、本当の定時退社時刻',
    },
    {
      name: 'bodyText',
      title: '本文（段落）',
      type: 'array',
      of: [{ type: 'text' }],
      description: '段落ごとに追加してください',
    },
    {
      name: 'listItems',
      title: 'リスト項目',
      type: 'array',
      of: [{ type: 'string' }],
      description: '例: 定時退社を、ポジティブに再定義する',
    },
  ],
}
