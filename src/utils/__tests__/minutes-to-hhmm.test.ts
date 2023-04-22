import { describe, expect, test } from 'vitest';

import { minutesToHHMM } from '../minutes-to-hhmm';

describe('minutesToHHMM', () => {
  test('formats minutes to hours and minutes', () => {
    expect(minutesToHHMM(92)).toBe('1h 32m');
  });
});
