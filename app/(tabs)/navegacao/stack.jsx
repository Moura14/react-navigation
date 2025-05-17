import { createNativeStackNavigator } from '@react-navigation/native-stack'
import TelaA from '../views/TelaA'
import TelaB from '../views/TelaB'
import TelaC from '../views/TelaC'


const Stack = createNativeStackNavigator()


export default props => (
    <Stack.Navigator initialRouteName='TelaA'>
        <Stack.Screen name='TelaA' component={TelaA} options={{title: 'Informações iniciais'}}></Stack.Screen>
        <Stack.Screen name='TelaB' component={TelaB}></Stack.Screen>
        <Stack.Screen name='TelaC' component={TelaC}></Stack.Screen>
    </Stack.Navigator>
)