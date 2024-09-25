import { test, expect } from 'vitest';
import { render } from 'vitest-browser-vue';
import SearchBox from "@/components/SearchBox.vue";
import router from '@/router';
import { page } from '@vitest/browser/context';

test("should get the search term from outside", async () => {

    const component = await render(SearchBox, {
        props: {
            searchTerm: "hello",
            items: []
        },
            global: {
                plugins: [router]
            }
    });
    const elem = await component.getByTestId('search-input');
    const label = await component.baseElement.querySelector('label');
    await expect(label.textContent).toContain('Search')
    // await expect(elem.getByText('hello')).toBeTruthy()
    await expect(elem.element()).toHaveValue('hello')
})

test('should update the search term to query params', async () => {
    const component = await render(SearchBox);

    const elem = await component.getByTestId('search-input');
    // const elem = await component.getByLabelText('Search')

    await elem.screenshot({ path: 'e2e/screenshots/searchbox_default_full.png', fullPage: false });
    await page.screenshot({ path: 'e2e/screenshots/searchbox_page.png', fullPage: true });

    // await expect(elem.query().querySelector('#searchbox')).toBe('Search')
    await elem.fill('hello')
    // userEvent.fill(elem, 'hello')

    await expect(elem.getByText('hello')).toBeTruthy()
    // await expect(page.screenshot).toContain('/?search=hello')
})

