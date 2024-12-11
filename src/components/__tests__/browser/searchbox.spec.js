import {
    test,
    expect
} from 'vitest';
import SearchBox from "@/components/SearchBox.vue";
import {
    render
} from 'vitest-browser-vue';
import {
    page
} from '@vitest/browser/context';
import {
    routes
} from '@/router';
import {
    createRouter,
    createWebHistory
} from 'vue-router';

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
})

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
    const label = await component.getByText('Search');

    // const screenshot = await elem.screenshot({
    //     path: 'screenshots/searchbox_default_full.png',
    //     fullPage: true,
    // })

    // await page.screenshot({
    //     path: 'screenshots/searchbox_page.png',
    //     fullPage: false,
    // })

    await expect(page).toHaveScreenshot({
        path: 'screenshots/searchbox_page.png',
    });
    await expect(component).toHaveScreenshot();


    await expect(label.element()).toBeTruthy()
    await expect(elem.element()).toHaveValue('hello')

    elem.fill('world')
})