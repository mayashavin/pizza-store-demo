import { test, expect } from '@playwright/experimental-ct-vue';

import Cart from "../src/components/Cart.vue";
import {useCart} from "../src/composables/useCart";

test('should toggle cart display', async ({ mount }) => {
    const component = await mount(Cart);

    await expect(component).toContainText('Cart')

    await expect(component.getByText('No item in cart')).not.toBeVisible();

    await component.getByRole('button').click();

    await expect(component).toContainText('No item in cart');
})

test.skip('should display with items', async({ mount }) => {
    const cart = useCart();

    cart.add({
        id: "1",
        title: "Pina Colada Pizza",
        price: "10.00",
        description:
        "A delicious combination of pineapple, coconut, and coconut milk.",
        image:
        "https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/pina_colada_pizza.jpg",
        quantity: 1,
    })

    const component = await mount(Cart);

    await expect(component).toContainText('Cart')

    await component.getByRole('button').click();

    await expect(component).toContainText('In your cart:');
})

test.skip('shoud remove items', () => {});
