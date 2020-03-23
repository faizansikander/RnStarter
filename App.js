import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./src/screens/HomeScreen";
import ComponentScreen from "./src/screens/ComponentsScreen";
import Welcomepage from "./src/screens/welcomepage";
import ListScreen from "./src/screens/ListScreen";
import ListScreen2 from './src/screens/ListScreen2';
import imageScreen from './src/screens/imageScreen';
import CounterScreen from './src/screens/CounterScreen';
import ColorScreen from './src/screens/ColorScreen';




const navigator = createStackNavigator(
  {





    
    Home: HomeScreen,
    Component: ComponentScreen,
    Welcome: Welcomepage,
    List: ListScreen,
    List2: ListScreen2,
    Image: imageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
  
    
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "My First App"
    }
  }
);

export default createAppContainer(navigator);
