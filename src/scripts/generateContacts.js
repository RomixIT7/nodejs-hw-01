import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

import { createFakeContact } from '../utils/createFakeContact.js';

const generateContacts = async (number) => {
  try {
    const data = await fs.readFile(PATH_DB);
    const parsedData = JSON.parse(data);

    for (let i = 0; i < number; i++) {
      parsedData.push(createFakeContact());
    }

    const newData = JSON.stringify(parsedData, null, 2);

    await fs.writeFile(PATH_DB, newData);
  } catch (error) {
    console.error(error);
  }
};

await generateContacts(5);
