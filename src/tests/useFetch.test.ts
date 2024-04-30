import { useFetch } from "@/composables/useFetch";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { flushPromises } from '@vue/test-utils'
import { createApp, type App } from "vue";

const withSetup = (composable: Function): [any, App<Element>] => {
  let result;

  const app = createApp({
    setup() {
      result = composable();
      return () => {};
    },
  });

  app.mount(document.createElement('div'));

  return [result, app];
};

describe('useFetch', () => {
  const fetchSpy = vi.spyOn(global, 'fetch');

  beforeEach(() => {
    fetchSpy.mockClear()
  });

  it('should fetch data from the given url', async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ data: 'test' })
    } as any);

    const [result, app] = withSetup(() => useFetch('your-test-url'));

    await flushPromises();

    expect(result?.data.value).toEqual({ data: 'test' });
    expect(fetchSpy).toHaveBeenCalledWith('your-test-url');

    app.unmount();
  });

  it('should change loading value', async () => {
    fetchSpy.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve({ data: 'test' })
    } as any);
  
    const [result, app] = withSetup(() => useFetch('your-test-url'));
  
    expect(result.loading.value).toBe(true);
  
    await flushPromises();
  
    expect(result.loading.value).toBe(false);
  
    app.unmount();
  });

  it('should change error value', async () => {
    fetchSpy.mockRejectedValueOnce(new Error('test error'));

    const [result, app] = withSetup(() => useFetch('your-test-url'));

    expect(result.error.value).toBe(null);

    await flushPromises();

    expect(result.error.value).toEqual('test error');

    app.unmount();
  });
});
