import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import ListItem from '../../components/List/ListItem'

export default class SongListDetail extends Component {


  constructor(){
    super()
    this.state = {
      list:[]
    }

  }
  componentWillMount() {
   let list = this.$router.params.list
    list = JSON.parse(list)
    this.setState({
      list:list
    })
  }
  componentWillReceiveProps(nextProps) {
    console.log(this.props, nextProps)
  }

  componentWillUnmount() { }

  componentDidShow() { }

  componentDidHide() { }

  render() {
    return (
      <View className='index'>
        <View></View>
        <View>
          <View>
            <Image src={require('../../assets/img/icon/play.png')} style={{width:'20px',height:'20px'}}/>
            <Text>播放全部</Text>
          </View>
          {this.state.list.map((item,index) =>(
            <ListItem
              title={item.name}
              key={index+1}
              index={index+1}
              className='at-col at-col-4'
              id={item.id}
              album={item.album}
              img={item.imgsrc}
            />
          ))}
        </View>
      </View>
    )
  }
}

