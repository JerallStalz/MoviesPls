import axios from "axios"

const instance = axios.create({
  baseURL: "https://server-moviespls.herokuapp.com/api"
})

export default instance