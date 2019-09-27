import {stringify} from 'qs';
import request from './request';
export async function getInTheaters(route) {
  return request('https://liangzebra.xyz:3000'+route);
}
export const domin = 'https://liangzebra.xyz:3000'
export const img = '/public'

