import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import './index.css'
@inject('userStore')
@observer
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props){
    super(props)

  }

  componentWillMount () {
    Taro.setStorage({ key: 'key', data: 'value' })
      .then(res => console.log(res))
    Taro.getStorage({ key: 'key' })
      .then(res => console.log(res.data))
  }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='index'>
        <Text>Hello world!</Text>
      </View>
    )
  }
}
