import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from './(tabs)/views/TelaA'


const Stack = createNativeStackNavigator()


export default props => (
    <Stack.Navigator initialRouteName='TelaA'>
        <Stack.Screen name='TelaA' component={TelaA}></Stack.Screen>
    </Stack.Navigator>
)