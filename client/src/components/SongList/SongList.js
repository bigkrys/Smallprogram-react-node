import Taro, {
    Component
} from '@tarojs/taro'
import {
    View,
    Text
} from '@tarojs/components'
import color from '../../components/utils/color'
import SongItem from './SongItem'
import dataStore from "../../store/dataStore";
export default class SongList extends Component {
  clickMore(){
    //跳转到指定更多页面
    console.log('我被点击了')
  }
    render() {
        return (
          <View style={{padding:'10px',width:dataStore.screen.width}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'10px 20px'}}>
              <Text style={{fontSize:'14px',fontWeight:'bold'}}>{this.props.title}</Text>
              <Text style={{fontSize:'12px',fontWeight:'bold',color:color.gray}} onClick={this.clickMore}>更多></Text>
            </View>
            <View  style={{flex:1,display: 'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'center',alignItems:'center'}}>
              {this.props.list.map((item,index) =>(
                <SongItem
                  title={item.title}
                  src={item.src}
                  key={index}
                  className='at-col at-col-4'
                  id={item.id}
                  songlist={item.list}
                  intro={item.introduction}
                />
                ))}
            </View>

          </View>
        )
    }
}
