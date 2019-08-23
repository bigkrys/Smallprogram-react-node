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
export default class SongItem extends Component {
  render() {
    return (
      <View style={{width:(dataStore.screen.width-50)/3,height:(dataStore.screen.width-50)/3,margin:'20px 5px 0'}} className={this.props.className}>
        <Image src={this.props.src} style={{width:'95px',height:'95px',borderRadius:'5px'}}/>
        <View style={{display: 'flex',flexDirection:'row',justifyContent:'center',marginTop:'5px'}}>
          <Text style={{fontSize:'12px'}}>{this.props.title}</Text>
        </View>
      </View>
    )
  }
}
