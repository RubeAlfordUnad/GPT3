import React from 'react';
import { google, shopify, dropbox, atlassian, slack } from './imports';
import './brand.css';

function Brand() {
  return (
    <div className='gpt3__brand section__pading'>
      <div >
      <img src={google} alt="google" />
      </div>
      <div >
      <img src={shopify} alt="Shopify" />
      </div>
      <div >
      <img src={dropbox} alt="Dropbox" />
      </div>
      <div >
      <img src={atlassian} alt="Atlassian" />
      </div>
      <div >
      <img src={slack} alt="Slack" />
      </div>
    </div>
  )
}

export default Brand
