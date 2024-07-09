import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let currentContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    currentContacts = JSON.parse(data);
    console.log(` Current you have: ${currentContacts.length} contacts`);
  } catch (error) {
    console.error(`error of reading ${PATH_DB}`, error);
  }
  const oneContact = createFakeContact();
  currentContacts.push(oneContact);
  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(currentContacts, null, 2),
      'utf-8',
    );
    console.log('Successful adding one more contact!');
  } catch (error) {
    console.error(`error to add contact to ${PATH_DB}`, error);
  }
};

addOneContact();