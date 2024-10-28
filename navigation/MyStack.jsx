import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MyTab from './MyTab';



export default function MyStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name='Home' component={MyTab} options={{headerShown: false}}/>
    </Stack.Navigator>
  )
}
