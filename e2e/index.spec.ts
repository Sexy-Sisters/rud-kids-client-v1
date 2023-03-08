import { expect, test } from '@playwright/test';

// npx playwright test
// yarn playwright show-report

test('intial test', async ({ page }) => {
  expect('intial commit').toEqual('intial commit');
});
