'use strict'

import fetch from "node-fetch";
import config from '../../config.js';

const functions = {
  getListFromAPI: async function () {
    const path = '/search/sgsg';
  
    const res = await fetch(`${config.source.url}${path}`, {
      compress: true,
      timeout: 60e3, // 60s timeout as default
      follow: 0,
      headers: {
        'content-type': 'application/json'
      }
    }).catch(err => {
      console.log('Some error!');
      throw err
    })

    // 7. Return response from external API

  }
}

export default functions;

