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
export default class ListItem extends Component {
  routeToDetail = () => {
   //添加到播放列表，立即播放
  }
  render() {
    return (
      <View
        style={{width:dataStore.screen.width,height:'90px',padding:'10px 25px 0',flexDirection:'row',display:'flex'}}
        className={this.props.className}
        onTouchStart={this.routeToDetail}
      >
        {this.props.img?( <Image src={this.props.img} style={{width:'70px',height:'70px',borderRadius:15}}/>):<Text style={{width:'30px',height:'70px',fontSize:'14px',color:color.gray,display:'flex',justifyContent:'center',alignItems:'center'}}>{this.props.index}</Text>}
        <View style={{flex:1,flexDirection:'column',display:'flex',paddingLeft:'20px'}} >
          <Text style={{fontSize:'16px',padding:'10px'}}>{this.props.title}</Text>
          <Text  style={{fontSize:'12px',paddingLeft:'10px'}}>孙燕姿 * {this.props.album}</Text>
        </View>
        <Text style={{height:'70px',display:'flex',flexDirection:'column',justifyContent:'center',color:color.gray}}> > </Text>
      </View>
    )
  }
}
