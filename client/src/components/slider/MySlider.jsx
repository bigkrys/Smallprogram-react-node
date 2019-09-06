import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text, Swiper, SwiperItem, Image } from '@tarojs/components'
import dataStore from '../../store/dataStore';
import color from '../utils/color'
class MySlider extends Component {

    constructor() {
        super()
        this.state = {
            slider1: require('../../assets/img/slider/1.jpg'),
            slider2: require('../../assets/img/slider/2.jpg'),
            slider3: require('../../assets/img/slider/3.jpg')
        }
    }
    render() {
        return (
            <Swiper
                className='test-h'
                indicatorColor={color.write}
                indicatorActiveColor={color.theme}
                circular
                indicatorDots
                autoplay>
                <SwiperItem   className='demo-text-1'>
                    <Image
                        style={{ width: dataStore.screen.width, height: '150px',padding:'0 25px',resizeMode:"contain"}}
                        src={this.state.slider1}
                    />
                </SwiperItem>
                <SwiperItem  className='demo-text-2'>
                    <Image
                      style={{ width: dataStore.screen.width, height: '150px',padding:'0 25px',resizeMode:"contain"}}
                        src={this.state.slider2}
                    />
                </SwiperItem>
                <SwiperItem  className='demo-text-3'>
                    <Image
                      style={{ width: dataStore.screen.width, height: '150px',padding:'0 25px',resizeMode:"contain"}}
                        src={this.state.slider3}
                    />
                </SwiperItem>
            </Swiper>
        )
    }
}

export default MySlider
