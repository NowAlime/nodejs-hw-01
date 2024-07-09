import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeLastContact = async () => {
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    const contactsArray = JSON.parse(data);

    if (contactsArray.length === 0) {
      console.log('There are no contacts to delete!');
    }
    contactsArray.pop();
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(contactsArray, null, 2),
      'utf-8',
    );
    console.log('Delete was successful!');
  } catch (err) {
    console.error(`error is: ${err}`);
  }
};

removeLastContact();