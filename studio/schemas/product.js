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
      name: 'image',
      title: '商品画像',
      type: 'image',
      options: { hotspot: true },
      description: '画像をアップロードしてください（画像がない場合は絵文字が表示されます）',
    },
    {
      name: 'emoji',
      title: '絵文字アイコン（画像なしの場合）',
      type: 'string',
      description: '例: 👕 🔑 🧢（画像をアップロードした場合は不要）',
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
      name: 'storesUrl',
      title: 'STORESの商品URL',
      type: 'url',
      description: '例: https://mkmkmkzika.com/items/xxxxxx',
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
