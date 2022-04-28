import axios from 'axios';
import io from 'socket.io-client'

const SERVER = 'https://api.chucknorris.io/jokes/random'
 
export default class UserService {
    static async  getChuckJoke(){
        const socket = io.connect(SERVER)
        await socket.emit('start')
        return axios.get(SERVER)
    }
}