// Call this directly from the click handler so the device keeps user activation.
export async function shareLink(data, navigatorApi = globalThis.navigator) {
  if (typeof navigatorApi?.share !== 'function') return 'unavailable';

  try {
    if (typeof navigatorApi.canShare === 'function' && !navigatorApi.canShare(data)) {
      return 'unavailable';
    }
    await navigatorApi.share(data);
    return 'opened';
  } catch (error) {
    // Cancelling the device sheet must not open another sharing flow.
    return error?.name === 'AbortError' ? 'cancelled' : 'unavailable';
  }
}
