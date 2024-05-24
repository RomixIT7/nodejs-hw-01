import fs from 'node:fs/promises';

import { PATH_DB } from '../constants/contacts.js';

export const thanos = async () => {
  try {
    const data = await fs.readFile(PATH_DB);
    const parsedData = JSON.parse(data);

    const newArr = parsedData.filter(() => Math.random() < 0.5);

    const newData = JSON.stringify(newArr, null, 2);

    await fs.writeFile(PATH_DB, newData);
  } catch (error) {
    console.error(error);
  }
};

await thanos();
