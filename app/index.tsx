import { View } from 'react-native'
import React from 'react'
import MyButton from '@/components/MyButton'
import { useRouter } from 'expo-router'



const Index = () => {

  const router = useRouter();
  const onContinue = () => {
    router.navigate("/login")
  }

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
    
     <MyButton title={"Continue"} onPress={onContinue}></MyButton>
    </View>
  )
}

export default Index
