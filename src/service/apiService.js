export default class Apisevice {

    async getPostsApi () {
        return fetch('http://jsonplaceholder.typicode.com/posts')
    }

    async getUsersApi () {
        return fetch('http://jsonplaceholder.typicode.com/users')
    }
}