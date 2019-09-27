import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import ListItem from '../../components/List/ListItem'
import dataStore from "../../store/dataStore";
import color from '../../components/utils/color'
import SongItem from "../../components/SongList/SongItem";
import * as api from "../../components/utils/api";
export default class SongListDetail extends Component {
  render() {
    let list = this.$router.params.list
    list = JSON.parse(list)
    console.log(typeof this.$router.params.changeCurrent)
    return (
      <View className='index'>
        <View style={{width:dataStore.screen.width+'px',height:'240px',backgroundColor:'#35498c',display:'flex',flexDirection:'row',alignItems:'center',flex:1}}>
          <View style={{marginLeft:'20px'}}>
            <Image  src={api.domin+api.img+this.$router.params.imgsrc} style={{width:'100px',height:'100px',borderRadius:'10px'}}/>
          </View>
          <View style={{ display:'flex',flexDirection:'column',flex:1,marginLeft:'20px'}}>
            <View style={{margin:'0 20px 20px'}}><Text  style={{color:'white',fontSize:'16px',fontWeight:'bold'}}>{this.$router.params.title}</Text></View>
            <View>
              <Text style={{color:'white',fontSize:'12px'}}>
              {this.$router.params.intro.length<48?this.$router.params.intro:this.$router.params.intro.slice(0,46)+'...'}
            </Text>
              <Image src={require('../../assets/img/icon/next.png')} style={{width:'14px',height:'12px'}}/>
            </View>
            <View style={{marginTop:'20px'}}><Text  style={{color:'white',fontSize:'12px'}}>发行时间：{this.$router.params.time}</Text></View>
          </View>
        </View>
        <View>
          <View style={{width:dataStore.screen.width,height:'40px',alignItems:'center',display:'flex',flexDirection:'row'}}>
            <Image src={require('../../assets/img/icon/play.png')} style={{width:'20px',height:'20px',marginLeft:'20px'}}/>
            <Text style={{marginLeft:'20px'}}>播放全部</Text>
          </View>
          {list.map((item,index) =>(
            <ListItem
              title={item.name}
              key={index+1}
              index={index+1}
              className='at-col at-col-4'
              id={item.id}
              src={item.src}
              album={this.$router.params.title}
              imgsrc={this.$router.params.imgsrc}
              changeCurrent={this.$router.params.changeCurrent}
            />
          ))}
        </View>
      </View>
    )
  }
}
