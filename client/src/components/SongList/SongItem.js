import Taro, {
  Component
} from '@tarojs/taro'
import {
  View,
  Button,
  Text,
  Image
} from '@tarojs/components'
import dataStore from "../../store/dataStore";
import * as api from '../utils/api'
export default class SongItem extends Component {
  routeToDetail = () => {
    let songlist = JSON.stringify(this.props.songlist)
     Taro.navigateTo({

      url:`/pages/songdetail/SongListDetail?title=${this.props.title}&list=${songlist}&intro=${this.props.intro}&imgsrc=${api.domin+api.img+this.props.imgsrc}&time=${this.props.time}`
    })
  }
  render() {
    // console.log(this.props.time)
    let src = api.domin+api.img+this.props.imgsrc
    return (
      <View
        style={{width:(dataStore.screen.width)/3,height:(dataStore.screen.width)/3,padding:'20px 5px 0'}}
        className={this.props.className}
        onTouchStart={this.routeToDetail}
      >
        <Image src={src} style={{width:'95px',height:'95px',borderRadius:'5px'}} />
        <View style={{display: 'flex',flexDirection:'row',justifyContent:'center',marginTop:'5px'}}>
          <Text style={{fontSize:'12px'}}>{this.props.title}</Text>
        </View>
      </View>
    )
  }
}
