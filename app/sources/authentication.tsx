import axios from "axios";

export async function loginApi (username: string, password:string) {
    if(!username || !password) return {};
    const { data } = await axios['post'](
      'https://posada-del-angel-mid.herokuapp.com/api/token/',
      {
        username,
        password
      }
    );
    return {
      data
    }
}