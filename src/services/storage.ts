import { ChampionListType } from '../types';

export const setStorage = (info: ChampionListType[]) => {
  localStorage.setItem('apiResult', JSON.stringify(info));
};

export const getStorage = () => {
  return JSON.parse(localStorage.getItem('apiResult') as string);
};
