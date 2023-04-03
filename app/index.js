import { useSate } from 'react';
import { View, ScrollView, SafeAreaView } from 'react-native';
import { Stack, useRouter } from 'expo-router';
import { COLORS, icons, images, SIZES } from '../constants';
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from "../components";


const Home = () => {

  const router = useRouter();

  return (
    <SafeAreaView styles={{flex: 1, backgroundColor: COLORS.lightWhite}}>
      <Stack.Screen option={{
        headerStyle:{backgroundColor: COLORS.lightWhite},
        headerShadowVisible: false,
        headerLeft: () => (
          <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%'/>
        ),
        headerRight: () => (
          <ScreenHeaderBtn iconUrl={icons.profile} dimension='100%' />
        ),
        headderTitle: ""
      }}/>
    </SafeAreaView>
  )
}

export default Home;