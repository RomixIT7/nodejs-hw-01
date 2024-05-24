import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const countContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const parsedData = JSON.parse(data);

    return parsedData.length;
  } catch (error) {
    console.error(error);
  }
};

console.log(await countContacts());
