import {observable,action} from "mobx";
import Taro from '@tarojs/taro'
class UserStore {
  //用户信息
  @observable user;
  //用户地理位置
  @observable addr;
  //是否已经登录
  @observable isLogin;

  /**
   * 获取缓冲区的内容
   * 参数：需要获取缓存的key
   */
  get = (key) => {
    let value
      Taro.getStorage({ key: key })
        .then(res => {
          value = res.data
          console.log(res.data)
        })
  };
  /**
   * 删除缓冲区的数据
   * 参数：key
   */
  delete = (key) =>  {
    Taro.removeStorage({ key: key })
      .then(res => console.log(res))
  };
  /**
   * 设置缓冲区的内容
   * 参数：key，value
   */
  set = (key,value) => {
    Taro.setStorage({ key: key, data: value })
      .then(res => console.log(res))
  };
  /**
   * 获取缓冲区的用户信息
   */
  @action
  getBufferUser = async () => {
    let user = await this.get('user')
    if (user){
      this.user = user
      this.isLogin = true
    }else {
      this.isLogin = false
    }
  };
  /**
   * 重新获取个人信息
   * 参数：用户id,用户token
   */
  @action
  getUserData = async (id,token) => {
    if (id == '' || token == '') return
    let obj = {
      usersid:id,
      usertoken:token
    }
    let json = await api.Post(api.domin+api.retrieveUser,obj)
    if (json.status == 1){
      this.user = json.data
      this.set('user',json.data)
    }else if (json.status == -97){
      this.isLogin = false
      this.user = {}
      this.delete('user')
    }
  };

  //退出登录
  @action
  logout = async () => {
    this.isLogin = false
    this.user = {}
    this.delete('user')
  };
  //清除本地缓存
  @action
  clearCache = () => {

    this.isLogin = false
    this.delete('user')
  };

}
const userStore = new UserStore()
export {userStore};
