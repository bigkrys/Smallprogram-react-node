import Taro, {
  Component
} from '@tarojs/taro'
import {
  View,
  Button,
  Text
} from '@tarojs/components'
import color from '../../components/utils/color'
import ListItem from './ListItem'
import dataStore from "../../store/dataStore";
export default class List extends Component {
  clickMore(){
    console.log('我被点击了')
  }
  componentDidMount() {
    // console.log(this.props.list)
  }

  render() {
    return (
      <View style={{padding:'10px',width:dataStore.screen.width}}>
        <View style={{display:'flex',flexDirection:'row',justifyContent:'space-between',padding:'10px 25px'}}>
          <Text style={{fontSize:'14px',fontWeight:'bold'}}>{this.props.title}</Text>
        </View>
        <View  style={{flex:1}}>
          {this.props.list?this.props.list.map((item,index) =>(
            <ListItem
              title={item.name}
              src={item.src}
              key={index+1}
              index={index}
              className='at-col at-col-4'
              id={item.id}
              album={item.album}
              img={item.imgsrc}
            />
          )):null}
        </View>

      </View>
    )
  }
}
