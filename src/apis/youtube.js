import axios from 'axios';

const KEY = 'AIzaSyBxzwT3OvtkH8P_0Nt4yI99bRfiaDxgKwE';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
