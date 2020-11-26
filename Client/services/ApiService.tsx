import { Alert } from 'react-native';
import fetch from 'node-fetch';
import { User, Entry, UserInput } from '../interfaces';

interface Options {
  method: string;
  headers?: { [key: string]: string };
  body?: string;
}

export const BASE_URL = 'http://10.197.0.223:3002';

export const postEntryRequest = (entry: Entry): Promise<Entry[]> => {
  return fetcher('/entries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(entry),
  });
};

export const deleteEntryRequest = (id: number): Promise<any> => {
  const res = fetcher(`entries/${id}`, {
    method: 'DELETE',
  });
  console.log('Result in apiservice --->', res);
  return res;
};

export const registerUserRequest = (user: UserInput): Promise<User[]> => {
  return fetcher('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};

export const loginUserRequest = (user: UserInput): Promise<User[]> => {
  return fetcher('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  });
};

export const getUserEntries = (id: number): Promise<User[]> => {
  return fetcher(`/users/${id}`);
};

const fetcher = (ext: string, options?: Options) => {
  return fetch(BASE_URL + ext, options)
    .then((res) => (res.status < 400 ? res : Promise.reject()))
    .then((res) => (res.status !== 204 ? res.json() : res))
    .then((res) => (res.status === 400 ? Alert.alert('Username already taken') : res))
    .then((res) => (res.status === 401 ? Alert.alert('User does not exist') : res))
    .catch((err) => {
      console.error('fetch request didnt work :( Error: ', err);
    });
};
