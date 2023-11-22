import Link, { LinkProps } from 'next/link';
import * as React from 'react';

import clsxm from '@/lib/clsxm';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
  isActive?: boolean;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  (
    { children, href, openNewTab, className, nextLinkProps, isActive, ...rest },
    ref,
  ) => {
    const isNewTab =
      openNewTab !== undefined
        ? openNewTab
        : href && !href.startsWith('/') && !href.startsWith('#');

    if (!isNewTab) {
      return (
        <Link href={href} {...nextLinkProps} legacyBehavior>
          <a
            ref={ref}
            {...rest}
            className={clsxm(
              'transition ease-in-out',
              isActive && 'border-b-2 border-green-500',
              className,
            )}
          >
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target='_blank'
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={clsxm('cursor-newtab', className)}
      >
        {children}
      </a>
    );
  },
);

export default UnstyledLink;
