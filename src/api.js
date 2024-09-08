import * as ownFetch from './fetchUtils.js';

const SERVER = 'https://panda-market-api.vercel.app/products';

async function getProducts(params = {}) {
  return await ownFetch.fetchGet(SERVER, params);
}

export { getProducts };
