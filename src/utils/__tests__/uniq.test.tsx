import { describe, expect, test } from 'vitest';

import { uniq } from '../uniq';

describe('uniq', () => {
  test('removes duplicates from array of objects', () => {
    const arrayWithDuplicates = [{ id: 0 }, { id: 1 }, { id: 2 }, { id: 2 }];
    expect(arrayWithDuplicates.length).toBe(4);
    const uniqueArray = uniq(arrayWithDuplicates);
    expect(uniqueArray.length).toBe(3);
  });
});
