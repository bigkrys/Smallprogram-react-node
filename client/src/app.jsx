import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'
import color from './utils/color'
import './app.css'
import { Provider } from '@tarojs/mobx'
import store from './stores/store'
// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/bbs/bbs'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      color:color.text,
      selectedColor:color.weight,
      backgroundColor:color.theme,
      borderStyle:color.line,
      list:[
        {
          pagePath: 'pages/index/index',
          text:'首页'
        },
        {
          pagePath:'pages/bbs/bbs',
          text:'论坛'
        }
      ],
      position:'bottom'
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Provider store={store}>
        <Index />
      </Provider>
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
