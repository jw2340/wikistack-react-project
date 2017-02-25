import axios from 'axios';

export const RECEIVE_WIKIPAGES = 'RECEIVE_WIKIPAGES';

export const receiveWikiPages = pages => ({
  type: RECEIVE_WIKIPAGES,
  receivedWikiPages: pages
});

export const loadWikiPages = () => {
  return (dispatch) => {
    axios.get('/api/wiki')
    .then(res => dispatch(receiveWikiPages(res.data)))
    .catch(console.error.bind(console));
  };
};
