import { reactive, computed } from 'vue';

const items = reactive([]);

const total = computed(() => {
    return items.reduce((acc, item) => {
        return acc + item.quantity
    }, 0)
});


const remove = (id) => {
    const index = items.findIndex(item => item.id === id)
    if (index > -1) {
        items.splice(index, 1)
    }
}
const update = ({ id, quantity }) => {
    const index = items.findIndex(item => item.id === id)
    if (index > -1) {
        items[index].quantity = quantity
    }
}

const add = (item) => {
    const index = items.findIndex(i => i.id === item.id)
    if (index > -1) {
        items[index].quantity += item.quantity
    } else {
        items.push(item)
    }
}

const clear = () => {
    items.length = 0
}

export function useCart() {    
    return {
        items,
        total,
        remove,
        update,
        add,
        clear
    }
}