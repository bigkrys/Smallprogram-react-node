import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'


export default class SongListDetail extends Component {


  constructor(){
    super()

  }
  componentWillMount() {
    console.log(this.$router.params)
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
        <Text>songlisrt detai;</Text>
      </View>
    )
  }
}

