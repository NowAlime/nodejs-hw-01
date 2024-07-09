import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([]), 'utf-8');
    console.log(`Fail ${PATH_DB} clean successful!`);
  } catch (err) {
    console.error(`Can't clean: ${err}`);
  }
};

removeAllContacts();