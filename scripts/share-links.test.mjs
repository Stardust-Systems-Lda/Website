import { test } from 'node:test';
import assert from 'node:assert/strict';
import { shareLink } from '../public/links/share.js';

const data = { title: 'RenovAR — Links e contactos', url: 'https://renovar-systems.com/links/' };

test('opens the device share API synchronously, preserving click activation and receiver', async () => {
  const calls = [];
  const device = {
    canShare(value) { assert.equal(this, device); return value === data; },
    share(value) { assert.equal(this, device); calls.push(value); return Promise.resolve(); },
  };
  const result = shareLink(data, device);
  assert.deepEqual(calls, [data]);
  assert.equal(await result, 'opened');
});

test('URL sharing still works when a browser has share but no canShare', async () => {
  assert.equal(await shareLink(data, { share: async () => {} }), 'opened');
});

test('unsupported browsers and non-shareable data select the manual alternative', async () => {
  assert.equal(await shareLink(data, {}), 'unavailable');
  assert.equal(await shareLink(data, {
    canShare: () => false,
    share: () => assert.fail('The device must not be called for unsupported data.'),
  }), 'unavailable');
});

test('cancelling the device sheet does not trigger a second share or clipboard fallback', async () => {
  const device = {
    share: async () => { throw new DOMException('Cancelled', 'AbortError'); },
    clipboard: { writeText: () => assert.fail('Never copy silently after cancellation.') },
  };
  assert.equal(await shareLink(data, device), 'cancelled');
});

test('blocked policy and device failures are handled without unhandled rejections', async () => {
  for (const name of ['NotAllowedError', 'DataError', 'InvalidStateError']) {
    assert.equal(await shareLink(data, {
      share: async () => { throw new DOMException('Device unavailable', name); },
    }), 'unavailable');
  }
});
