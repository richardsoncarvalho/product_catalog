import client from "../../clients/http/config"

export default {
  getProducts: () => client.get('products')
}
