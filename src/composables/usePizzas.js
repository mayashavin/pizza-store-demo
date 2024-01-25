import { ref } from "vue";

export function usePizzas() {
  return {
    pizzas: ref([
      {
        id: "1",
        title: "Pina Colada Pizza",
        price: "10.00",
        description:
          "A delicious combination of pineapple, coconut, and coconut milk.",
        image:
          "https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/pina_colada_pizza.jpg",
        quantity: 1,
      },
      {
        id: "2",
        title: "Pepperoni Pizza",
        price: "12.00",
        description:
          "A delicious combination of pepperoni, cheese, and pineapple.",
        image:
          "https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/pepperoni_pizza.jpg",
        quantity: 2,
      },
      {
        id: "3",
        title: "Veggie Pizza",
        price: "9.00",
        description:
          "A delicious combination of mushrooms, onions, and peppers.",
        image:
          "https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/veggie_pizza.jpg",
        quantity: 1,
        },
      {
        id: "4",
        title: "Hawaiian Pizza",
        price: "11.00",
        description:
          "A delicious combination of ham, pineapple, and pineapple.",
        quantity: 5,
        image:
          "https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/hawaiian_pizza.jpg",
      },
      {
        id: "5",
        title: "Meat Lovers Pizza",
        price: "13.00",
        description:
          "A delicious combination of pepperoni, sausage, and bacon.",
        quantity: 3,
        image:
          "https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/meat_lovers_pizza.jpg",
      },
      {
        id: "6",
        title: "Supreme Pizza",
        price: "15.00",
        description:
          "A delicious combination of pepperoni, sausage, bacon, and pepperoni.",
        quantity: 1,
        image:
          "https://res.cloudinary.com/mayashavin/image/upload/v1643005556/Demo/supreme_pizza.jpg",
      },
    ]),
  };
}
