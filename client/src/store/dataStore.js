import {
    observable
} from 'mobx'

const dataStore = observable({
    screen: {},
    changeScreen(obj) {
        this.screen = obj
    },


})
export default dataStore