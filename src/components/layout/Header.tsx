import { useRouter } from 'next/router';
import React, { useState } from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink from '@/components/links/UnstyledLink';

import Button from '../buttons/Button';

import Logo from '~/svg/full_logo.svg';
import Hamburger from '~/svg/hamburger.svg';
import LogoType from '~/svg/logotype.svg';

const links = [
  { href: '/apartamenty', label: 'Znajdź Apartament' },
  { href: '/aktualnosci', label: 'Aktualności' },
  { href: '/realizacje', label: 'Nasze Realizacje' },
  { href: '/kontakt', label: 'Kontakt' },
];

const Header = () => {
  const { pathname } = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen((state) => !state);
  };

  return (
    <header className='sticky top-0 z-50 bg-white shadow'>
      <div className='container mx-auto flex items-center justify-between px-4 xs:h-16 md:h-36'>
        <UnstyledLink href='/'>
          <div className='xs:hidden md:block'>
            <Logo height='100%' width='12rem' />
          </div>
          <div className='xs:block md:hidden'>
            <LogoType height='100%' width='2rem' />
          </div>
        </UnstyledLink>
        <div className='xs:block md:hidden'>
          <Button variant='ghost' className='p-2' onClick={toggle}>
            <Hamburger className='text-2xl' />
          </Button>
        </div>
        <nav className='xs:hidden md:block'>
          <ul className='flex items-center justify-between space-x-4'>
            {links.map(({ href, label }) => (
              <li key={`${href}${label}`}>
                <UnstyledLink
                  href={href}
                  isActive={href === pathname}
                  className='font-regular text-md   hover:text-gray-600'
                >
                  {label}
                </UnstyledLink>
              </li>
            ))}
          </ul>
        </nav>
        <div
          className={clsxm(
            'fixed right-0 top-16 h-full w-full translate-x-full transition-all duration-200',
            isOpen && 'translate-x-0',
          )}
        >
          <nav className='h-full bg-white shadow-md xs:block md:hidden'>
            <ul className='flex flex-col'>
              {links.map(({ href, label }) => (
                <li className='p-2 text-center' key={`${href}${label}`}>
                  <UnstyledLink
                    href={href}
                    isActive={href === pathname}
                    className='font-regular inline-block p-2 text-xl'
                  >
                    {label}
                  </UnstyledLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
