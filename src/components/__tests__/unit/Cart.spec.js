import { mount } from '@vue/test-utils';
import * as cartHooks from '@/composables/useCart';
import Cart from '@/components/Cart.vue';
import { describe, it, expect, vi, afterEach } from 'vitest'

const toggleBtnSelector = '.cart__total';
const cardListSelector = '.cart__list';
const cartListItemSelector = '.cart__list-item';
const itemSelector = {
    title: '[data-testid=title]',
    price: '[data-testid=price]',
    quantity: '[data-testid=quantity]',
    total: '[data-testid=total]',
    removeBtn: 'button'
}
const removeAllBtn = "[data-testid=remove-all]";

const cartItems = [
    { id: 1, title: 'Pizza', price: '10.00', quantity: 2 },
    { id: 2, title: 'Burger', price: '5.0', quantity: 1 },
];

describe('Cart component', () => {
    const useCartSpy = vi.spyOn(cartHooks, 'useCart');

    afterEach(() => {
        useCartSpy.mockClear()
    })

    it('toggles display', async () => {
        const wrapper = mount(Cart);
        const toggleBtn = wrapper.find(toggleBtnSelector);

        expect(wrapper.find(cardListSelector).isVisible()).toBe(false);

        await toggleBtn.trigger('click');

        expect(wrapper.find(cardListSelector).attributes('style')).toBe('');
    })

    it('renders no cart item', async() => {
        const wrapper = mount(Cart);
        const toggleBtn = wrapper.find(toggleBtnSelector);

        expect(toggleBtn.text()).toBe('Cart: 0');
        await toggleBtn.trigger('click');

        expect(wrapper.find("p").text()).toContain('No item in cart')        
    })

    it('renders cart items', async() => {
        useCartSpy.mockReturnValueOnce({
            items: cartItems,
            remove: vi.fn(),
            clear: vi.fn(),
            update: vi.fn(),
            add: vi.fn(),
            total: cartItems.length
        })

        const wrapper = mount(Cart);
        const toggleBtn = wrapper.find(toggleBtnSelector);

        expect(toggleBtn.text()).toBe(`Cart: ${cartItems.length}`);
        await toggleBtn.trigger('click');

        expect(wrapper.find("p").text()).toContain('In your cart');
        expect(wrapper.findAll(cartListItemSelector).length).toBe(cartItems.length);     
    })

    it('triggers remove per item', async () => {
        const removeMock = vi.fn()
        useCartSpy.mockReturnValueOnce({
            items: cartItems,
            remove: removeMock,
            clear: vi.fn(),
            update: vi.fn(),
            add: vi.fn(),
            total: cartItems.length
        })
        
        const wrapper = mount(Cart);
        const firstItem = wrapper.findAll(cartListItemSelector).at(0);

        await firstItem.find(itemSelector.removeBtn).trigger('click');
        expect(removeMock).toBeCalledTimes(1);
        expect(removeMock).toBeCalledWith(cartItems[0].id);

    })

    it('triggers remove all', async () => {
        const removeAllMock = vi.fn()
        useCartSpy.mockReturnValueOnce({
            items: cartItems,
            remove: vi.fn(),
            clear: removeAllMock,
            update: vi.fn(),
            add: vi.fn(),
            total: cartItems.length
        })

        const wrapper = mount(Cart);

        await wrapper.find(removeAllBtn).trigger('click');

        expect(removeAllMock).toBeCalled();

    })
});
