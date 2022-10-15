import React from 'react';

import {
  AiFillInstagram,
  AiFillFacebook,
  AiOutlineCopyright,
} from 'react-icons/ai';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p>
        <span>
          <AiOutlineCopyright />
        </span>{' '}
        2022 Makasa Store Headphones. All rights reserved.
      </p>
      <p className='icons'>
        <a
          href='https://www.facebook.com/misho.makasarashvili.58'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillFacebook />
        </a>
        <a
          href='https://www.instagram.com/m.makasa/'
          target='_blank'
          rel='noreferrer'
        >
          <AiFillInstagram />
        </a>
      </p>
    </div>
  );
};

export default Footer;
