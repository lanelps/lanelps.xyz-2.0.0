import React, { useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import tw, { css } from 'twin.macro';

import Go from '../components/Go';

const MobileHeader = () => {
  const {
    sanityContactDetails: { contactItems }
  } = useStaticQuery(graphql`
    query ContactDetailsMobileNav {
      sanityContactDetails {
        contactItems {
          _key
          title
          name
          link
        }
      }
    }
  `);

  const pages = [
    {
      id: 1,
      url: `/`,
      name: `Home`
    },
    {
      id: 2,
      url: `/about`,
      name: `About`
    },
    {
      id: 3,
      url: `/work`,
      name: `Work`
    },
    {
      id: 4,
      url: `/contact`,
      name: `Contact`
    }
  ];

  const [menu, setMenu] = useState(false);

  return (
    <>
      <section
        css={[
          tw`absolute top-0 right-0 bottom-0 flex flex-col justify-between left-0 m-8 p-8 border bg-white dark:bg-black text-black dark:text-white z-20 transition-all duration-400`,
          menu
            ? tw`opacity-100 pointer-events-auto`
            : tw`opacity-0 pointer-events-none`
        ]}
        aria-hidden={!menu}
      >
        <nav>
          <ul tw="text-heading">
            {pages.map(page => (
              <li key={page.id} tw="mb-4">
                <Go to={page.url} onClick={() => setMenu(false)}>
                  {page.name}
                </Go>
              </li>
            ))}
          </ul>
        </nav>

        <footer>
          <ul tw="text-body">
            {contactItems.map((contactItem, index) => {
              return (
                <li key={`${contactItem._key} ${index}`} tw="mb-2">
                  <Go to={contactItem.link} newTab>
                    {contactItem.title}
                  </Go>
                </li>
              );
            })}
          </ul>
        </footer>
      </section>

      <button
        onClick={() => setMenu(!menu)}
        tw="absolute top-[0] right-8"
        aria-expanded={menu}
        aria-controls="mobile-menu"
      >
        {menu ? 'Close' : 'Menu'}
      </button>
    </>
  );
};

export default MobileHeader;
