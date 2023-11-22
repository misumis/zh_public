export default {
  name: 'portfolio',
  title: 'Portfolio',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tytuł',
      type: 'string',
    },
    {
      name: 'street',
      title: 'Ulica',
      type: 'string',
    },
    {
      name: 'body',
      title: 'Opis',
      type: 'localeBlockContent',
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
    },
    {
      name: "order",
      title: "Order",
      type: "number",
      hidden: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
};
