export default {
  name: 'decode',
  title: 'httk解読セクション',
  type: 'document',
  __experimental_actions: ['update', 'publish'],
  fields: [
    {
      name: 'letters',
      title: '各文字の解説',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'char', title: '文字', type: 'string', description: '例: h' },
            { name: 'reading', title: '読み', type: 'string', description: '例: 本当は' },
            { name: 'romaji', title: 'ローマ字', type: 'string', description: '例: hontou wa' },
          ],
          preview: {
            select: { title: 'char', subtitle: 'reading' },
          },
        },
      ],
    },
    {
      name: 'sectionTitle',
      title: 'セクションタイトル',
      type: 'string',
      description: '例: 誰もが持つ言えない本音',
    },
    {
      name: 'bodyText',
      title: '本文',
      type: 'array',
      of: [{ type: 'text' }],
      description: '段落ごとに追加。**テキスト** で太字になります',
    },
  ],
}
