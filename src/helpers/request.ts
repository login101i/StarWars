import axios from 'axios';
import applyMiddleware from 'axios-case-converter';

const request = axios.create({
  baseURL: 'https://swapi.dev/api'
});

export const axiosInstanceWithMapCaseMiddleware = applyMiddleware(request, { ignoreHeaders: true, preservedKeys: [] });
