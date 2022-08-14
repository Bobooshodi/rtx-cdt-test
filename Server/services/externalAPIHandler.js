'use strict';

import fetch from 'node-fetch';
import config from '../config.js';

export const getListFromAPI = async () => {
  try {
    const path = '/search/sgsg';

    const res = await fetch(`${config.source.url}${path}`, {
      compress: true,
      timeout: 60e3, // 60s timeout as default
      follow: 0,
      headers: {
        'content-type': 'application/json',
      },
    });

    // 7. Return response from external API
    return res.json();
  } catch (err) {
    console.log('Some error!');
    throw err;
  }
};
