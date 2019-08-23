import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import MySlider from '../../components/slider/MySlider'
import SongList from '../../components/SongList/SongList'
import './index.css'
import dataStore from '../../store/dataStore';


class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(){
    super()
    this.state = {
      songList:{
        title:'专辑',
        list:[
          {
            title: '逆光',
            src:require('../../assets/img/niguang.jpg')
          },
          {
            title: '是时候',
            src:require('../../assets/img/shishihou.jpg')
          },
          {
            title: '我要的幸福',
            src:require('../../assets/img/woyaodxingfu.jpg')
          },
          {
            title: '克卜勒',
            src:require('../../assets/img/kepule.jpg')
          },
          {
            title: '风筝',
            src:require('../../assets/img/fengzheng.jpg')
          },
          {
            title: '跳舞的梵谷',
            src:require('../../assets/img/tiaowudfangu.jpg')
          },

        ]
      },
      songList2:[
        {
          title: '逆光',
          src:require('../../assets/img/niguang.jpg'),

        }
      ]
    }
  }
  componentWillMount() {
    Taro.getSystemInfo({
      success: res => {
        let screen = {
          width: res.screenWidth,
          height: res.screenHeight,
          statusBar: res.statusBarHeight,
        }
        dataStore.changeScreen(screen)
        console.log(dataStore.screen)
      }
    })
      .then(res => console.log(res))
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
        <MySlider />
        <SongList title={this.state.songList.title} list={this.state.songList.list}/>
        <SongList title={this.state.songList.title} list={this.state.songList.list}/>
      </View>
    )
  }
}

export default Index
