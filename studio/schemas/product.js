export default {
  name: 'product',
  title: '商品',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: '商品名',
      type: 'string',
      validation: Rule => Rule.required(),
    },
    {
      name: 'description',
      title: '説明',
      type: 'text',
      rows: 2,
    },
    {
      name: 'price',
      title: '価格（円）',
      type: 'number',
      validation: Rule => Rule.required().min(0),
    },
    {
      name: 'emoji',
      title: '絵文字アイコン',
      type: 'string',
      description: '例: 👕 🔑 🧢（Tシャツはhttk文字表示のため空欄でOK）',
    },
    {
      name: 'badge',
      title: 'バッジ',
      type: 'string',
      options: {
        list: [
          { title: 'なし', value: '' },
          { title: 'BESTSELLER', value: 'bestseller' },
          { title: 'NEW', value: 'new' },
          { title: 'POPULAR', value: 'popular' },
          { title: 'LIMITED', value: 'limited' },
        ],
      },
    },
    {
      name: 'order',
      title: '表示順',
      type: 'number',
      description: '小さい数字が先に表示されます',
    },
    {
      name: 'isVisible',
      title: '公開する',
      type: 'boolean',
      initialValue: true,
    },
  ],
  orderings: [
    {
      title: '表示順',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
}
