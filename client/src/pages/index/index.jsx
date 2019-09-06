import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import MySlider from '../../components/slider/MySlider'
import SongList from '../../components/SongList/SongList'
import List from '../../components/List/List'
import './index.css'
import dataStore from '../../store/dataStore';
import {getInTheaters} from '../../components/utils/api'
import MusicPlayer from '../../components/MusicPlayer/MusicPlayer'
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(){
    super()
    this.state = {
      songList:{
        title:'',
        list:[
          // {
          //   title: '逆光',
          //   src:require('../../assets/img/niguang.jpg'),
          //   id:'001',
          //   list:[
          //     {
          //       "name":"intro",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":"逆光",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":"梦游",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":"咕叽咕叽",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":"我怀念的",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":"安宁",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":"飘着",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":"爱情的花样",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":"漩涡",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":"需要你",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":"关于",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":"outro",
          //       "src":"",
          //       "lrc":""
          //     }
          //   ],
          //   introduction:'这是燕姿的第10张录音室专辑，',
          //   time:'2007.3.22'
          // },
          // {
          //   title: '是时候',
          //   src:require('../../assets/img/shishihou.jpg'),
          //   id:'002',
          //   list:[
          //     {
          //       "name":'世说心语',
          //       "src":'',
          //       "lrc":''
          //     },
          //     {
          //       "name":'追',
          //       "src":'',
          //       "lrc":''
          //     },
          //     {
          //       "name":'当冬夜渐暖',
          //       "src":'',
          //       "lrc":''
          //     },
          //     {
          //       "name":'时光小偷',
          //       "src":'',
          //       "lrc":''
          //     },
          //     {
          //       "name":'空口言',
          //       "src":'',
          //       "lrc":''
          //     },
          //     {
          //       "name":'明天的记忆',
          //       "src":'',
          //       "lrc":''
          //     },
          //     {
          //       "name":"180度",
          //       "src":"",
          //       "lrc":""
          //     },
          //     {
          //       "name":'快疯了',
          //       "src":'',
          //       "lrc":''
          //     },
          //     {
          //       "name":'愚人的国度',
          //       "src":'',
          //       "lrc":''
          //     },
          //     {
          //       name:'是时候',
          //       src:'',
          //       lrc:''
          //     }
          //   ],
          //   introduction:'这是燕姿的第11张录音室专辑，',
          //   time:'2011.3.8'
          // },
          // {
          //   title: '我要的幸福',
          //   src:require('../../assets/img/woyaodxingfu.jpg'),
          //   id:'003',
          //   list:[
          //     {
          //       name:'世说心语',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'追',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'当冬夜渐暖',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'时光小偷',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'空口言',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'明天的记忆',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'180度',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'快疯了',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'愚人的国度',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'是时候',
          //       src:'',
          //       lrc:''
          //     }
          //   ],
          //   introduction:'这是燕姿的第11张录音室专辑，',
          //   time:'2011.3.8'
          // },
          // {
          //   title: '克卜勒',
          //   src:require('../../assets/img/kepule.jpg'),
          //   id:'004',
          //   list:[
          //     {
          //       name:'世说心语',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'追',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'当冬夜渐暖',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'时光小偷',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'空口言',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'明天的记忆',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'180度',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'快疯了',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'愚人的国度',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'是时候',
          //       src:'',
          //       lrc:''
          //     }
          //   ],
          //   introduction:'这是燕姿的第11张录音室专辑，',
          //   time:'2011.3.8'
          // },
          // {
          //   title: '风筝',
          //   src:require('../../assets/img/fengzheng.jpg'),
          //   id:'005',
          //   list:[
          //     {
          //       name:'世说心语',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'追',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'当冬夜渐暖',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'时光小偷',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'空口言',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'明天的记忆',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'180度',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'快疯了',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'愚人的国度',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'是时候',
          //       src:'',
          //       lrc:''
          //     }
          //   ],
          //   introduction:'这是燕姿的第11张录音室专辑，',
          //   time:'2011.3.8'
          // },
          // {
          //   title: '跳舞的梵谷',
          //   src:require('../../assets/img/tiaowudfangu.jpg'),
          //   id:'006',
          //   list:[
          //     {
          //       name:'世说心语',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'追',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'当冬夜渐暖',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'时光小偷',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'空口言',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'明天的记忆',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'180度',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'快疯了',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'愚人的国度',
          //       src:'',
          //       lrc:''
          //     },
          //     {
          //       name:'是时候',
          //       src:'',
          //       lrc:''
          //     }
          //   ],
          //   introduction:'这是燕姿的第11张录音室专辑，',
          //   time:'2011.3.8'
          // },

        ]
      },
      hostList:[
        {
          id:1,
          name:'逆光',
          src:'',
          lrc:'',
          album:'逆光',
          imgsrc:require('../../assets/img/niguang.jpg'),
        },
        {
          id:2,
          name:'梦游',
          src:'',
          lrc:'',
          album:'逆光',
          imgsrc:require('../../assets/img/niguang.jpg'),
        },
        {
          id:3,
          name:'咕叽咕叽',
          src:'',
          lrc:'',
          album:'逆光',
          imgsrc:require('../../assets/img/niguang.jpg'),
        },
        {
          id:4,
          name:'我怀念的',
          src:'',
          lrc:'',
          imgsrc:require('../../assets/img/niguang.jpg'),
        },
        {
          id:5,
          name:'安宁',
          src:'',
          lrc:'',
          album:'逆光',
          imgsrc:require('../../assets/img/niguang.jpg'),
        },
        {
          id:6,
          name:'飘着',
          src:'',
          lrc:'',
          album:'逆光',
          imgsrc:require('../../assets/img/niguang.jpg'),
        },
        {
          id:7,
          name:'爱情的花样',
          src:'',
          lrc:'',
          album:'逆光',
          imgsrc:require('../../assets/img/niguang.jpg'),
        },
        {
          id:8,
          name:'漩涡',
          src:'',
          lrc:'',
          album:'逆光',
          imgsrc:require('../../assets/img/niguang.jpg'),
        },
        {
          id:9,
          name:'需要你',
          src:'',
          lrc:'',
          album:'逆光',
          imgsrc:require('../../assets/img/niguang.jpg'),
        },
        {
          id:10,
          name:'关于',
          src:'',
          lrc:'',
          album:'克卜勒',
          imgsrc:require('../../assets/img/niguang.jpg'),
        },
        {
          id:11,
          name:'outro',
          src:'',
          lrc:'',
          album:'跳舞的梵谷',
          imgsrc:require('../../assets/img/niguang.jpg'),
        }
      ],
    }
  }
  componentWillMount() {
    console.log('hello')
    Taro.getSystemInfo({
      success: res => {
        let screen = {
          width: res.screenWidth,
          height: res.screenHeight,
          statusBar: res.statusBarHeight,
        }
        dataStore.changeScreen(screen)
        // console.log(dataStore.screen)
      }
    })
      .then(res => console.log(res))

    Taro.getSetting()
      .then(res=>{
       // console.log(res)
      })
      .then(res=>{
        return Taro.getUserInfo();
      })
      .then(res=>{
        // console.log(res.userInfo)
        Taro.setStorage({
          key: 'user',
          data: res.userInfo
        })
        //请求服务器资源
        this.getList();
      })
      .catch(err=>{
        console.log(err)
      })
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }
  getList = async (name) => {
    const res = await getInTheaters('/index');
    res.data.map((item,i)=>{
      res.data[i].list = JSON.parse(item.list)
      // console.log(res.data[i])
    })
    let songList = {
      title:'专辑',
      list:res.data
    }
    console.log(songList)
    this.setState({
      songList: songList
    });
  }
  render() {
    return (
      <View className='index' >
        <MySlider />
        <SongList title={this.state.songList.title} list={this.state.songList.list}/>
        <SongList title={this.state.songList.title} list={this.state.songList.list}/>
        <List title='热门歌曲' list={this.state.hostList}/>
        <MusicPlayer/>
      </View>
    )
  }
}

export default Index
