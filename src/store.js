import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cart: [],
    products: [{
      name: "Crewneck T-Shirt",
      id: 53362,
      price: 9.5,
      color: "white",
      size: "small",
      gender: "men",
      quantity: 10,
      dateAdded: "Tue Mar 24 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
      category: "Shirts",
      details: {
        material: "cotton",
        fit: "regular",
        maintenance: "machine wash",
        additional: "Some colors feature different-colored yarns for a heathered effect."
      },
      images: [
        't-shirt-1.jpg',
        't-shirt-2.jpg',
        't-shirt-3.jpg',
      ]
    },
    {
      name: "Cardigan Sweater",
      id: 53363,
      price: 49.5,
      color: "red",
      size: "medium",
      gender: "women",
      quantity: 8,
      dateAdded: "Mon Mar 23 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
      category: "Sweaters",
      details: {
        material: "cotton",
        fit: "regular",
        maintenance: "machine wash cold, air dry",
        additional: ""
      },
      images: [
        'card-1.jpg',
        'card-2.jpg',
        'card-3.jpg',
        'card-4.jpg',
        'card-5.jpg',
      ]
    },
    {
      name: "Slim Fit Jeans",
      id: 53364,
      price: 29.5,
      color: "navy",
      size: {
        waist: 32,
        length: 32,
      },
      gender: "men",
      quantity: 5,
      dateAdded: "Wed Mar 25 2015 20:00:00 GMT-0400 (Eastern Daylight Time)",
      category: "Pants",
      details: {
        material: "denim",
        fit: "slim",
        maintenance: "machine wash cold with like colors, air dry",
        additional: ""
      },
      images: [
        "slimJ-1.jpg",
        "slimJ-2.jpg",
        "slimJ-3.jpg",
        "slimJ-4.jpg",
        "slimJ-5.jpg"
      ]
    },
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    product: (state) => (id) => {
      return state.products.filter(p => p.id === Number(id))[0]
    }
  }
});
