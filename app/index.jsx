import { Text, View } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
const index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className='text-3xl font-pblack' >Aora!</Text>
      <Link href='/home' style={{color:'red'}}>Home</Link>
    </View>
  )
}

export default index

