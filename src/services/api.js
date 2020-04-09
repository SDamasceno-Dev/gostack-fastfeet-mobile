/**
 * @author: Sandro Damasceno <sdamasceno.dev@gmail.com>
 * @description: Api configuration to connect do DB
 */

// Importing dependencies
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.99:3028',
});

export default api;
