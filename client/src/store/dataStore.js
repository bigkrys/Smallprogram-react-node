import {
    observable
} from 'mobx'

const dataStore = observable({
    screen: {},
    currentMusic:{
      title:'',
      img:'',
      src:'',
    },
    changeScreen(obj) {
        this.screen = obj
    },
  changeCurrentMusic(obj){
      this.currentMusic = obj
    console.log(this.currentMusic.img)
  }


})
export default dataStore
