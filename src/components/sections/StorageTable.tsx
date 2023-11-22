import React, { useEffect, useState, VFC } from 'react';

import client from '@/lib/client';
import clsxm from '@/lib/clsxm';

import PDF from '~/svg/pdf.svg';
const headers = ['NUMER', 'PIĘTRO', 'POWIERZCHNIA', 'RZUT KOMÓRKI', 'STATUS'];

const TableRow: VFC<Apartment> = ({ area, floor, status, title, url }) => {
  return (
    <tr className='hover:bg-gray-100 '>
      <td className='whitespace-nowrap py-4 px-6 text-base font-medium text-gray-900 '>
        {title}
      </td>
      <td className='whitespace-nowrap py-4 px-6 text-base font-medium text-gray-500 '>
        {floor}
      </td>
      <td className='whitespace-nowrap py-4 px-6 text-base font-medium text-gray-900 '>
        {`${area}m²`}
      </td>
      <td className='whitespace-nowrap py-4 px-6 text-center text-base font-medium'>
        <a target='_blank' href={url} rel='noreferrer'>
          <PDF width={40} height={40} />
        </a>
      </td>
      <td
        className={clsxm(
          'whitespace-nowrap py-4 px-6 text-base font-medium text-gray-900 ',
          status === 'Dostępne' && 'text-primary-600',
          status === 'Rezerwacja' && 'text-yellow-600',
          status === 'Sprzedane' && 'text-red-600',
        )}
      >
        <span></span>
        {status}
      </td>
    </tr>
  );
};

interface Apartment {
  area: string;
  floor: string;
  rooms: string;
  status: string;
  title: string;
  url: string;
}

const StoragesTable = () => {
  const [storages, setstorages] = useState<Apartment[]>([]);

  useEffect(() => {
    if (storages.length === 0) {
      client
        .fetch(
          `*[_type == 'storage'] {
          title,
          floor,
          area,
          status,
      "url": plan.asset->url
    }`,
        )
        .then((res) => {
          setstorages(res);
        });
    }
  }, [storages.length]);

  return (
    <section className='my-16 lg:my-36'>
      <h2 className='mb-8'>Komórki lokatorskie</h2>
      <div className='flex flex-col'>
        <div className='overflow-x-auto shadow-md sm:rounded-lg'>
          <div className='inline-block min-w-full align-middle'>
            <div className='overflow-hidden '>
              <table className='min-w-full table-fixed divide-y divide-gray-200'>
                <thead className='bg-gray-100 '>
                  <tr>
                    {headers.map((header) => (
                      <th
                        key={header}
                        scope='col'
                        className='py-3 px-6 text-left font-normal uppercase tracking-wider text-gray-700 '
                      >
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200 bg-white '>
                  {storages
                    .sort(
                      (a, b) =>
                        Number(a.title.replace(/\D/g, '')) -
                        Number(b.title.replace(/\D/g, '')),
                    )
                    .map((apartment) => (
                      <TableRow key={apartment.title} {...apartment} />
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StoragesTable;
