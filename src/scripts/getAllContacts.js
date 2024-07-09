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
    } else {
      console.error('error:', err);
    }
  }
  return allContacts;
};

const showAllContacts = async () => {
  const contacts = await getAllContacts();
  console.log(contacts);
};

showAllContacts();
