import axios, { CanceledError } from 'axios';

export default axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
  //   headers: {
  //     // 有些后端需要在每次http请求时要求要有某些信息，如api-key
  //     // 'api-key': '...',
  //   },
});

export { CanceledError };
