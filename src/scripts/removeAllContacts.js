import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const removeAllContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, '[]');
  } catch (error) {
    console.error(error);
  }
};

await removeAllContacts();
