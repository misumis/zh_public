export default {
  name: 'newsMedia',
  title: 'Aktualnosci - Zdjęcia',
  type: 'object',
  fields: [
    { name: "title",
      title: "Tytuł",
      type: "string",
    },
    {
      name: 'date',
      title: 'Data zdjęcia',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Zdjęcie',
      type: 'image',
    },
    { 
      name: 'size',
      title: 'Rozmiar karty',
      type: 'string',
      initialValue: 'medium',
      options: {
        list: [
          { title: 'Mała', value: 'small' },
          { title: 'Średnia', value: 'medium' },
          { title: 'Duża', value: 'large' },
        ],
      },
    },
  ],
};
