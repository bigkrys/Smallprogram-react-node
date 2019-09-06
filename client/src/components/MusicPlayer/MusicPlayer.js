import Taro, {
  Component
} from '@tarojs/taro'
import {
  View,
  Text,
  Image,
  Progress
} from '@tarojs/components'
import * as api from '../../components/utils/api'

import dataStore from "../../store/dataStore";
export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState:true,//0为暂停，1为播放
      playTime:'00:00',//当前播放的时间
      allTime:'03:54',//音频总的时间
      percent:0
    }
    this.music = null
  }
  componentWillMount() {
    this.music = Taro.createInnerAudioContext()
   this.Play()
  }
  Play = () => {
    let _this = this
    // this. music.src = api.domin+api.img+'/music/跳舞的梵谷/孙燕姿 - 跳舞的梵谷.mp3'
    this.music.src = 'http://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E06DCBDC9AB7C49FD713D632D313AC4858BACB8DDD29067D3C601481D36E62053BF8DFEAF74C0A5CCFADD6471160CAF3E6A&fromtag=46'
    this.music.onPlay(()=>{
      console.log('我在播放')
    })
    this.music.onPlay = (()=>{
      let duration1 = Math.floor(_this.music.duration/60)
      let duration2 = Math.floor(_this.music.duration%60)
      this.setState({
        allTime:duration1+' : '+duration2
      })
    })
    this.music.onTimeUpdate(()=>{
      this.getCurrentTime()
    })
  }
  getCurrentTime = () => {
    let duration1 = Math.floor(this.music.duration/60)
    let duration2 = Math.floor(this.music.duration%60)
    let currentTime1 = Math.floor(this.music.currentTime/60)
    let currentTime2 = Math.floor(this.music.currentTime%60)
    if (duration1<10){
      duration1 = '0'+duration1
    }
    if (duration2<10){
      duration2 = '0'+duration2
    }
    if (currentTime1<10){
      currentTime1 = '0'+currentTime1
    }
    if (currentTime2<10){
      currentTime2 = '0'+currentTime2
    }
    let percent = this.music.currentTime/this.music.duration
    percent = (percent*100).toFixed(2)
    this.setState({
      allTime:duration1+' : '+duration2,
      playTime:currentTime1+' : '+currentTime2,
      percent:percent
    })
  }

  dealPlay = () =>{
    let {playState} = this.state
    if (!playState){
      this.music.pause()
    }else {
      this.music.play()
    }
    this.setState({
      playState:!playState
    })
  }
  render() {
    return (
      <View style={{
        width:dataStore.screen.width+'px',position:'fixed',height:'80px',backgroundColor:'#3a6197',bottom:'0px',
        display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:'5px'
      }}>
        <View style={{position:'relative',marginLeft:'10px'}} onClick={this.dealPlay}>
          <Image src={require('../../assets/img/woyaodxingfu.jpg')} style={{width:'60px',height:'60px',borderRadius:'30px',}}/>
          {this.state.playState?  <Image src={require('../../assets/img/icon/play2.png')}
                                         style={{width:'25px',height:'25px',position:'absolute',top:'20px',left:'20px'}}
          />:
            (
              <Image src={require('../../assets/img/icon/pause.png')}
                     style={{width:'25px',height:'25px',position:'absolute',top:'20px',left:'15px'}}
              />
            )
          }
        </View>
        <View style={{display:"flex",flexDirection:'column',flex:1,height:'80px',justifyContent:'space-between'}}>
            <View style={{display:"flex",flexDirection:'row',marginTop:'10px'}}>
              <View style={{ display:'flex',flexDirection:'column',flex:1,height:'40px',paddingLeft:'20px'}}>
                <Text  style={{fontWeight:'bold',color:'white',fontSize:'16px',marginRight:'10px'}}>平日快乐</Text>
                <Text style={{color:'white',fontSize:'14px',marginTop:'5px',marginBottom:'5px'}}>孙燕姿</Text>
              </View>
              <View style={{flex:1,height:'20px',color:'white'}}>
                {this.state.playTime+'/'+this.state.allTime}
              </View>
            </View>
          <View style={{paddingLeft:'20px',paddingRight:'20px',marginBottom:'15px'}}>
            <Progress percent={this.state.percent}  strokeWidth={2}  activeColor='#55E377' />
          </View>
        </View>

      </View>
    )
  }
}
