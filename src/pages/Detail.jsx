import {View, Text, Image, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';

const Detail = (Navigation) => {
  return (
    <View>
      <View>
        <View></View>
        <View
          style={{
            justifyContent: 'space-between',
            display: 'flex',
            flexDirection: 'row',
            marginTop: 40,
          }}>
          <Image
            source={require('../assets/image/burgernew.jpg')}
            style={{
              height: 350,
              width: 430,
              borderRadius: 10,
              marginHorizontal: 25,
            }}
          />
        </View>
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontFamily: 'Dm Sanz',
            fontSize: 15,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 16,
            marginHorizontal: 24,
          }}>
          Burger Daging
        </Text>
        <Text
          style={{
            fontFamily: 'Dm Sanz',
            fontWeight: 'bold',
            color: '#CF0A0A',
            marginTop: 16,
            marginHorizontal: 24,
          }}>
          Rp. 20.000
        </Text>
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Dm Sanz',
            fontSize: 15,
            color: '#A4A4A4',
            marginTop: 16,
            marginHorizontal: 24,
          }}>
          Dibuat dengan penuh kasih sayang beserta Daging pilihan yang dibuat
          langsung oleh chef dari australia yang bernama chef gordon dan makanan
          ini pernah menang dalam kontes masterchef.
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          marginHorizontal: 24,
        }}>
        <Image
          source={require('../icon/Line2.png')}
          style={{
            width: 430,
          }}
        />
      </View>
      <View>
        <Text
          style={{
            fontFamily: 'Dm Sanz',
            color: 'black',
            fontWeight: 'bold',
            fontSize: 15,
            marginTop: 25,
            marginHorizontal: 24,
          }}>
          Masukkan Jumlah Pesanan
        </Text>
      </View>
      <View>
        <TextInput
          placeholder="Masukkan Jumlah Pesanan"
          style={{
            borderWidth: 1,
            color: '#EEEEEE',
            marginTop: 30,
            marginHorizontal: 24,
          }}
        />
      </View>
      <View>
      <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
        <Text
          style={{
            backgroundColor: '#CF0A0A',
            width: 425,
            borderRadius: 15,
            height: 52,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            paddingRight: 16,
            paddingLeft: 16,
            marginTop: 60,
            marginHorizontal: 24,
            color: 'white',
            paddingVertical: 15,
            textAlign: 'center',
            marginTop: 40,
          }}>
          Konfirmasi Pemesanan
          
        </Text>
        <Text
          style={{
            textAlign: 'center',
            marginTop: '34',
            color: '#A4A4A4',
            fontSize: 14,
            marginTop: 100,
          }}> create by : anasera</Text>
      </View>
    </View>
  );
};

export default Detail;
