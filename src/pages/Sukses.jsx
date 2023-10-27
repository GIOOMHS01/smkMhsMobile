import { View, Text, Image } from 'react-native'
import React from 'react'

const Sukses = (navigation) => {
  return (
    <View>
      <View>
        <View 
        style={{
          width: 100,
          height: 100,
          marginTop: 50,
        }}>
          <Image
          source={require('../icon/img.png')}/>
        </View>
      </View>
     
    </View>
  )
}

export default Sukses