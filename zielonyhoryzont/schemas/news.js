export default {
  name: 'news',
  title: 'Etapy',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nazwa',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Zdjęcia',
      type: 'array',
      of: [
        {
          type: 'newsMedia',
        },
      ],
    },
    {
      name: "icon",
      title: "Ikonka",
      type: "image",
    },
    {
      name: 'isActive',
      title: 'Czy aktywować na stronie aktualności?',
      description: 'Jeśli nie, to etap będzie wyszarzony na stronie aktualności',
      type: 'boolean',
    },
    {
      name: 'isMain',
      title: 'Czy pokazywać etap jako pierwszy po załadowaniu strony?',
      description: 'Wybierz jeden etap, który będzie pokazywany jako pierwszy po załadowaniu strony aktualności',
      type: 'boolean',
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
      title: 'name',
      media: 'logo',
    },
  },
};
