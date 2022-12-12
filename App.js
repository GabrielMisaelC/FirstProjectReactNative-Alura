
import { StatusBar, SafeAreaView, Text } from 'react-native';
import Cesta from './src/views/Cestas';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold} from '@expo-google-fonts/montserrat';

import AppLoading from 'expo-app-loading';

import mock from './src/mocks/cesta';

export default function App() {

  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  if(!fonteCarregada){
    return (
      <AppLoading />
    );
  }else{
    return (
      <SafeAreaView style={{flex: 1}}>
        <StatusBar />
        <Cesta {...mock}/>
      </SafeAreaView>
    );
  }

}
