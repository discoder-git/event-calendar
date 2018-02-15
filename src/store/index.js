import Vue  from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
      accommodations: {
        "20": {
          add_beds: 3,
          adults: 4,
          available: [
            {
              accommodation_id:21,
              amount:10,
              created_at:"2018-02-15 10:36:36",
              date:"2018-03-24",
              days_book_min:1,
              days_cancel:null,
              discount_percent:"0.00",
              id:404,
              price_special_gel:null,
              price_special_usd:null,
              updated_at:"2018-02-15 10:36:36"
            },
            {
              accommodation_id:21,
              amount:10,
              created_at:"2018-02-15 10:36:36",
              date:"2018-03-24",
              days_book_min:1,
              days_cancel:null,
              discount_percent:"0.00",
              id:404,
              price_special_gel:null,
              price_special_usd:null,
              updated_at:"2018-02-15 10:36:36"
            }
          ],
          created_at: "2018-02-15 10:36:36",
          currency: {
            active: false,
            code: "GEL",
            created_at: "2018-02-15 10:35:16",
            exchange_rate: "2.446769",
            format: "1 0,00 Lari",
            id: 1,
            name: "Georgia, Lari",
            symbol: "Lari",
            updated_at: "2018-02-15 10:00:00"
          },
          currency_id:1,
          duration:null,
          hotel:"ООО Нефть",
          id:21,
          kids:2,
          local_price:95.23,
          price:"233",
          published:false,
          room:"ООО Компания IT",
          thumb_id:null,
          tour_id:6
        },
        "21": {
          add_beds: 3,
          adults: 4,
          available: [
            {
              accommodation_id:21,
              amount:10,
              created_at:"2018-02-15 10:36:36",
              date:"2018-03-24",
              days_book_min:1,
              days_cancel:null,
              discount_percent:"0.00",
              id:404,
              price_special_gel:null,
              price_special_usd:null,
              updated_at:"2018-02-15 10:36:36"
            },
            {
              accommodation_id:21,
              amount:10,
              created_at:"2018-02-15 10:36:36",
              date:"2018-03-24",
              days_book_min:1,
              days_cancel:null,
              discount_percent:"0.00",
              id:404,
              price_special_gel:null,
              price_special_usd:null,
              updated_at:"2018-02-15 10:36:36"
            }
          ],
          created_at: "2018-02-15 10:36:36",
          currency: {
            active: false,
            code: "GEL",
            created_at: "2018-02-15 10:35:16",
            exchange_rate: "2.446769",
            format: "1 0,00 Lari",
            id: 1,
            name: "Georgia, Lari",
            symbol: "Lari",
            updated_at: "2018-02-15 10:00:00"
          },
          currency_id:1,
          duration:null,
          hotel:"ООО Нефть",
          id:21,
          kids:2,
          local_price:95.23,
          price:"233",
          published:false,
          room:"ООО Компания IT",
          thumb_id:null,
          tour_id:6
        }
      }
    },
    mutations: {

    },
    actions: {

    },
    getters: {
      accommodations (state) {
        return state.accommodations
      }
    }
});
