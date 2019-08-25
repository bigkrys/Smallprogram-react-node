import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'


export default class SongDetail extends Component {


  constructor(){
    super()

  }
  componentWillMount() {

  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>

      </View>
    )
  }
}

