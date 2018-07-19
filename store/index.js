import Vuex from 'vuex';
const createStore = () => {
  return new Vuex.Store({
    state: {
      cartTotal: 0,
      cart: [
        {
          id: '13124214',
          name: 'Khaki Suede Polish Work Boots',
          price: 149.99,
          count: 1,
          img: 'http://www.aaebike.com:9090/data/img/2ada81_1513910170835.jpg'
        },
        {
          id: '34312',
          name: 'Khaki Suede Polish Work Boots',
          price: 149.99,
          count: 1,
          img: 'http://www.aaebike.com:9090/data/img/2ada81_1513910170835.jpg'
        }
      ],
      sale: false,
      // 喜欢的商品
      loves: [],
      products: [
        {
          name: 'Khaki Suede Polish Work Boots',
          price: 149.99,
          category: 'women',
          sale: true,
          article: 'shoe',
          img: 'shoe1.png'
        },
        {
          name: 'Camo Fang Backpack Jungle',
          price: 39.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'jacket1.png'
        },
        {
          name: 'Parka and Quilted Liner Jacket',
          price: 49.99,
          category: 'men',
          sale: true,
          article: 'jacket',
          img: 'jacket2.png'
        },
        {
          name: 'Cotton Black Cap',
          price: 12.99,
          category: 'men',
          sale: true,
          article: 'hats',
          img: 'hat1.png'
        },
        {
          name: 'Knit Sweater with Zips',
          price: 29.99,
          category: 'women',
          sale: false,
          article: 'sweater',
          img: 'sweater1.png'
        },
        {
          name: 'Long Linen-blend Shirt',
          price: 18.99,
          category: 'men',
          sale: false,
          article: 'shirt',
          img: 'shirt1.png'
        },
        {
          name: 'Knit Orange Sweater',
          price: 28.99,
          category: 'men',
          sale: false,
          article: 'sweater',
          img: 'sweater2.png'
        },
        {
          name: 'Cotton Band-collar Blouse',
          price: 49.99,
          category: 'men',
          sale: false,
          article: 'shirt',
          img: 'shirt2.png'
        },
        {
          name: 'Camo Fang Backpack Jungle',
          price: 59.99,
          category: 'women',
          sale: true,
          article: 'jacket',
          img: 'jacket3.png'
        },
        {
          name: 'Golden Pilot Jacket',
          price: 129.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'jacket4.png'
        },
        {
          name: 'Spotted Patterned Sweater',
          price: 80.99,
          category: 'women',
          sale: false,
          article: 'jacket',
          img: 'sweater4.png'
        },
        {
          name: 'Double Knit Sweater',
          price: 59.99,
          category: 'men',
          sale: true,
          article: 'jacket',
          img: 'sweater5.png'
        }
      ]
    },
    getters: {
      women: state => filter(state.products, 'category', 'women'),
      men: state => filter(state.products, 'category', 'men'),
      sale: state => filter(state.products, 'sale', true)
    },
    mutations: {
      set(state, params) {
        const keys = Object.keys(params);
        keys.forEach(x => {
          const val = params[x];
          // db.set(x, val).write();
          state[x] = val;
        });
      },
      switchSale: state => {
        state.sale = !state.sale;
      },
      clearCartCount: state => {
        state.cartTotal = 0;
      },
      clearCartContents: state => {
        state.cart = {};
      },
      addItem: (state, item) => {
        console.log(item)
        const { id, name, sale_price, img_list } = item
        const index = state.cart.findIndex(x => x.id === id)
        if (index > -1) {
          console.log(state.cart[index].count)
          state.cart[index].count = state.cart[index].count + 1
        } else {
          state.cart.push(
            {
              id: id,
              name: name,
              price: sale_price,
              count: 1,
              img: img_list[0]
            }
          )
        }
      },
      minusItem: (state, item) => {
        const { id } = item
        const index = state.cart.findIndex(x => x.id === id)
        const count = state.cart[index].count
        if (count === 1) {
          state.cart.splice(index, 1)
        } else {
          state.cart[index].count = count - 1
        }
      }
    }
  });
};

export default createStore;

// helper
const filter = (array, key, value) => array.filter(item => item[key] === value);
