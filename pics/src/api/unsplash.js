import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization:
      'Client-ID 34e39e5c2f447ce52009a515846ca2b6ccc35552bb63de59cf4a6d06728f3f7e'
  }
});
// '57e91a53579842185e81f78fbb0176fa337d9aa7501e3454a893b690729eaba1'
//'34e39e5c2f447ce52009a515846ca2b6ccc35552bb63de59cf4a6d06728f3f7e'