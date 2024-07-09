import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';

export const addOneContact = async () => {
  let currentContacts = [];
  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    console.log('Data read from file:', data);
    currentContacts = JSON.parse(data);
    console.log(`Current you have: ${currentContacts.length} contacts`);
  } catch (error) {
    console.error(`Error reading ${PATH_DB}`, error);
  }

  const oneContact = createFakeContact();
  currentContacts.push(oneContact);

  try {
    await fs.writeFile(
      PATH_DB,
      JSON.stringify(currentContacts, null, 2),
      'utf-8'
    );
    console.log('Successfully added one more contact!');
  } catch (error) {
    console.error(`Error adding contact to ${PATH_DB}`, error);
  }
};

addOneContact();
