import axios from 'axios';

const KEY = 'AIzaSyBLlrs6ZAdpNCjvVRCZXlM8a2seSH_CScg';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    key: KEY
  }
})
