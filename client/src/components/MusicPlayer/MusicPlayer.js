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
import './index.css'
import dataStore from "../../store/dataStore";
var _this
export default class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      playState:true,//0为暂停，1为播放
      playTime:'00:00',//当前播放的时间
      allTime:'03:54',//音频总的时间
      percent:0,
      currentMusic:{
        img:'',
        title:'',
        src:''
      }
    }
    _this = this
    this.music = null
  }
  componentWillMount() {
    this.music = Taro.createInnerAudioContext()
    this.Play()
  }
  componentDidMount() {
    this.props.onRef(this)
  }

  Play = () => {
    let src = api.domin+api.img+_this.props.currentMusic.src
    _this.music.src = src
    _this.music.onPlay(()=>{
      console.log('我在播放')
    })
    _this.music.onError((e)=>{
      console.log(e)
    })
    _this.music.onCanplay = (()=>{
      let duration1 = Math.floor(_this.music.duration/60)
      let duration2 = Math.floor(_this.music.duration%60)
      _this.setState({
        allTime:duration1+' : '+duration2
      })
    })
    _this.music.onTimeUpdate(()=>{
      console.log(_this.music)
      _this.getCurrentTime()
    })
    _this.setState({
      currentMusic:_this.props.currentMusic,
      playTime:'00:00',
      allTime:'00:00',
    })
  }
  getCurrentTime = () => {
    let duration1 = Math.floor(_this.music.duration/60)
    let duration2 = Math.floor(_this.music.duration%60)
    let currentTime1 = Math.floor(_this.music.currentTime/60)
    let currentTime2 = Math.floor(_this.music.currentTime%60)
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
    let percent = _this.music.currentTime/_this.music.duration
    percent = (percent*100).toFixed(2)
    _this.setState({
      allTime:duration1+' : '+duration2,
      playTime:currentTime1+' : '+currentTime2,
      percent:percent
    })
  }

  dealPlay = () =>{
    let {playState} = _this.state
    if (!playState){
      _this.music.pause()
    }else {
      _this.music.play()
    }
    _this.setState({
      playState:!playState
    })
  }
  ToPlay(){
    _this.Play()
    _this.setState({
      playState:true
    },()=>{
      _this.dealPlay()
    })
  }
  render() {
    return (
      <View style={{
        width:dataStore.screen.width+'px',position:'fixed',height:'80px',backgroundColor:'#3a6197',bottom:'0px',
        display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'center',borderRadius:'5px'
      }}>
        <View style={{position:'relative',marginLeft:'10px'}} onClick={this.dealPlay}>
          <Image src={this.state.currentMusic.img? (api.domin+api.img+this.state.currentMusic.img):require('../../assets/img/woyaodxingfu.jpg')}  className={this.state.playState?'pause':'rotate'}/>
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
                <Text  style={{fontWeight:'bold',color:'white',fontSize:'16px',marginRight:'10px'}}>{this.state.currentMusic.title}</Text>
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
