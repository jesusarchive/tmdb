import { describe, expect, test } from 'vitest';

import { makeRequest } from '../make-request';

describe('makeRequest', () => {
  test('make request using fetch', async () => {
    expect(await makeRequest('invalidUrl')).toBeNull();
    expect(await makeRequest('https://dummyjson.com/products')).toBeTruthy();
  });
});
