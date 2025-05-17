import { SafeAreaView } from 'react-native'
import TelaA from './(tabs)/views/TelaA'
import TelaB from './(tabs)/views/TelaB'
import TelaC from './(tabs)/views/TelaC'

export default props => (
    <SafeAreaView style={{flex: 1}}>
        <TelaA></TelaA>
       <TelaB></TelaB>
       <TelaC></TelaC>
    </SafeAreaView>
)