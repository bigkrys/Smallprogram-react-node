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
import color from '../utils/color'
import * as api from "../utils/api";
export default class ListItem extends Component {
  routeToDetail = () => {
   //添加到播放列表，立即播放
    let obj = {
      title:this.props.title,
      img:this.props.img,
      src:this.props.src
    }

    console.log(typeof  this.props.changeCurrent)
    this.props.changeCurrent(obj)

  }
  render() {
    return (
      <View
        style={{width:dataStore.screen.width+'px',height:'90px',padding:'10px 25px 0',flexDirection:'row',display:'flex',}}
        className={this.props.className}
        onClick={this.routeToDetail}
      >
        {this.props.img?(
          <Image src={api.domin+api.img+this.props.img} style={{width:'70px',height:'70px',borderRadius:15}}/>)
          :(
            <View  style={{width:'40px',height:'70px',display:"flex",flexDirection:'row',alignItems:'center'}}>
              <Image src={require('../../assets/img/icon/album.png')} style={{width:'30px',height:'30px'}}/>
            </View>
          )
        }
        <View style={{flex:1,flexDirection:'column',display:'flex',paddingLeft:'20px'}} >
          <Text style={{fontSize:'16px',padding:'10px'}}>{this.props.title}</Text>
          <Text  style={{fontSize:'12px',paddingLeft:'10px'}}>孙燕姿{this.props.album?"--"+this.props.album:null}</Text>
        </View>
        <View style={{width:'80px',height:'70px',marginLeft:'-20px',display:'flex',justifyContent:'flex-start',alignItems:'center'}}>
          <Image src={require('../../assets/img/icon/right.png')} style={{width:'15px',height:'15px'}}/>
        </View>
        
      </View>
    )
  }
}
