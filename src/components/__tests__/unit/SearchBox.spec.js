import { mount } from '@vue/test-utils';
import SearchBox from '@/components/SearchBox.vue';
import { describe, it, expect } from 'vitest'
import { routes } from '@/router';
import { createRouter, createWebHistory } from 'vue-router';

describe("SearchBox component", () => {
    const inputSelector = "[data-testid=search-input]";
    
    const router = createRouter({
        history: createWebHistory(),
        routes: routes,
      })

    it("should get the search term from outside", () => {
        const wrapper = mount(SearchBox, {
            props: {
                searchTerm: "hello",
                items: []
            },
            global: {
                plugins: [router]
            }
        });

        expect(wrapper.find(inputSelector).element.value).toBe("hello");
        expect(wrapper.emitted()).toHaveProperty('update-items')

        const itemsEvent = wrapper.emitted('update-items');

        expect(itemsEvent.length).toBe(1)
    })

    it("should match snapshot", () => {
        const wrapper = mount(SearchBox, {
            props: {
                searchTerm: "",
                items: []
            },
            global: {
                plugins: [router]
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    })
})