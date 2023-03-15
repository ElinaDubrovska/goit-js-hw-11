import axios from 'axios';


const BASE_URL = 'https://pixabay.com/api/';
const searchParams = new URLSearchParams({
  key: '34443697-d9f859220b94cfe4401518737',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: 'true',
  per_page: 40,
});

export default class ImgApiSrv {
  constructor() {
    this.SearchQuery = '';
    this.page = 1;
  }

  async getImages() {
    try {
      const response = await axios.get(
        `${BASE_URL}?${searchParams}&q=${this.SearchQuery}&page=${this.page}`
      );
      this.page += 1;
      return response;
    } catch (error) {
      console.log(error);
    }
  }

  resetPage() {
    this.page = 1;
  }

  get query() {
    return this.SearchQuery;
  }
  set query(newSearchQueary) {
    return (this.SearchQuery = newSearchQueary);
  }
}