import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const getAllContacts = async () => {
  let allContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    allContacts = JSON.parse(data);
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.warn(`Can't find ${PATH_DB} creating new`);
    }
    console.error('error:', err);
  }
  return allContacts;
};

console.log(await getAllContacts());