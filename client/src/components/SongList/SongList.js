import Taro, {
    Component
} from '@tarojs/taro'
import {
    View,
    Button,
    Text
} from '@tarojs/components'
import color from '../../components/utils/color'
import SongItem from './SongItem'
import dataStore from "../../store/dataStore";
export default class SongList extends Component {
  clickMore(){
    console.log('我被点击了')
  }
    render() {
        return (
          <View style={{padding:'20px 10px',width:dataStore.screen.width}}>
            <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between'}}>
              <Text style={{fontSize:'16px',fontWeight:'bold',margin:'10px'}}>{this.props.title}</Text>
              <Text style={{fontSize:'16px',fontWeight:'bold',margin:'10px',color:color.theme}} onClick={this.clickMore}>更多></Text>
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
