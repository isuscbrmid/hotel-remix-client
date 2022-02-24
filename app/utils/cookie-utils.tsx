import Cookies, { CookieChangeOptions } from 'universal-cookie';

const cookies = new Cookies();

export const setCookie = ({ name, value, options = {} }: CookieChangeOptions): void =>
  cookies.set(name, value, Object.assign({
    path: '/',
    secure: window.location.protocol === 'https:'
  }, options));

export const getCookie = (name:string): string|undefined => cookies.get(name);

export const deleteCookie = (name:string): void => cookies.remove(name, { path: '/' });
