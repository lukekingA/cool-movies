//imports
import Post from '../../models/post.js'

//private
let _apiComments = axios.create({
  baseURL: '/'
})

let _state = {
  posts: []

}

let _subcribers = {
  posts: []
}

function setState(prop, val) {
  _state[prop] = val
  _subcribers.forEach(fn => fn())
}

//public
export default class PostService {
  constructor() {
    console.log('postSevice Built')
  }
  addSubscriber(prop, fn) {
    _subcribers[prop].push(fn)
  }

  get Posts() {
    return _state.posts.map(p => new Post(p))
  }


}