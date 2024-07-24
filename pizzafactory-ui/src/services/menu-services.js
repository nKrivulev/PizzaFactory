import axios from 'axios'

const API_URL = 'http://localhost:8081/'

class MenuServices {
  filterMenus (perPage, currentPage, item) {
    return axios.get(API_URL + 'menu/filter', {
      params: {
        perPage: perPage,
        currentPage: currentPage,
        item: item
      }
    })
  }

  fetchMenusItem () {
    return axios.get(API_URL + 'menu/fetch')
  }
}

export default new MenuServices()
