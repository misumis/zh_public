export default {
  name: 'garage',
  title: 'Garaże',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Numer',
      type: 'string',
    },
    {
      name: 'plan',
      title: 'Plan',
      type: 'file',
      accept: 'pdf',
    },
    {
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: ['Rezerwacja', 'Dostępne', 'Sprzedane'],
      },
    },
  ],
  preview: {
    select: {
      title: 'title',
      media: 'logo',
    },
  },
};
