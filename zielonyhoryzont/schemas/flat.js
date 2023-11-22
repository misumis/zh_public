export default {
  name: 'flat',
  title: 'Mieszkania',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Numer',
      type: 'string',
    },
    {
      name: 'floor',
      title: 'Piętro',
      type: 'string',
    },
    {
      name: 'area',
      title: 'Powierzchnia w m^2',
      type: 'string',
    },
    {
      name: 'rooms',
      title: 'Ilość pokoi',
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
