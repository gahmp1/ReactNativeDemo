import {
    createStackNavigator,
    createBottomTabNavigator,
    createAppContainer
  } from 'react-navigation';

import Main from './pages/main'
import Product from './pages/product'

const Home = createStackNavigator({
    Main: Main,
    Product: Product,
  },
  {
    initialRouteName: 'Main',
    
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#f4511e',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  });
const Tabs = createBottomTabNavigator({ Home });
const App = createAppContainer(Tabs);

export default App;
