import {stringify} from 'qs';
import request from './request';
export async function getInTheaters(route) {
  return request('http://localhost:3000'+route);
}
