import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const countContacts = async () => {
  let currentCountOfContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    currentCountOfContacts = JSON.parse(data);
    const count = currentCountOfContacts.length;
    const message = `Current number of contacts: ${count}`;
    return message;
  } catch (err) {
    console.error('error:', err);
    return -1;
  }
};

console.log(await countContacts());
