import fs from 'fs/promises';
import { createFakeContact } from '../utils/createFakeContact.js';
import { PATH_DB } from '../constants/contacts.js';

const generateContacts = async (number) => {
  let currentContacts = [];

  try {
    const data = await fs.readFile(PATH_DB, 'utf-8');
    currentContacts = data ? JSON.parse(data) : []; 
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn(`File ${PATH_DB} not found, will create a new one.`);
    } else {
      console.error(`Error occurred while reading the file ${PATH_DB}`, error);
      return; 
    }
  }

  console.log('Current contacts:', currentContacts);

  const newContacts = [];
  for (let i = 0; i < number; i++) {
    newContacts.push(createFakeContact());
  }

  const updatedContacts = [...currentContacts, ...newContacts];

  try {
    await fs.writeFile(PATH_DB, JSON.stringify(updatedContacts, null, 2), 'utf-8');
    console.log('New contacts added successfully!');
  } catch (error) {
    console.error(`Error when trying to write to the file ${PATH_DB}`, error);
  }
};

generateContacts(5);
