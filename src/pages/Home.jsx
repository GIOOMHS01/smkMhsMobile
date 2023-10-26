import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <View style={style.hero}>
      <View style={style.navcon}>
        <View style={style.navbar}>
          <Image
            style={style.imagestyle}
            source={require('../assets/image/image1.png')}
          />
          <TouchableOpacity>
            <Image source={require('../icon/icon1.png')} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.title}>
        <Text style={{color: '#A4A4A4', fontSize: 15}}>Selamat Datang Di</Text>
        <Text
          style={{
            fontSize: 32,
            fontWeight: 'bold',
            color: 'black',
            marginTop: 8,
          }}>
          Kantin Multistudi
        </Text>
      </View>

      <View style={style.menucon}>
        <View style={{width: 420, marginBottom: 12}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
            Menu Makanan
          </Text>
        </View>
        <View style={style.menu}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View style={style.descmenu}>
              <Image
                style={style.fotomakan}
                source={require('../assets/image/burgernew.jpg')}
              />

              <Text
                style={{
                  marginBottom: 4,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Burger Daging
              </Text>
              <Text
                style={{
                  marginBottom: 4,
                  color: '#FF0202',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Rp. 20.000
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View style={style.descmenu}>
              <Image
                style={style.fotomakan}
                source={require('../assets/image/mieayam.jpg')}
              />

              <Text
                style={{
                  marginBottom: 4,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Mie Ayam
              </Text>
              <Text
                style={{
                  marginBottom: 4,
                  color: '#FF0202',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Rp. 15.000
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{width: 420, marginBottom: 15, marginTop: 15}}>
          <Text style={{color: 'black', fontWeight: 'bold', fontSize: 16}}>
            Menu Minuman
          </Text>
        </View>
        <View style={style.menu}>
          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View style={style.descmenu}>
              <Image
                style={style.fotomakan}
                source={require('../assets/image/airjeruk.jpg')}
              />

              <Text
                style={{
                  marginBottom: 4,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Es Jeruk
              </Text>
              <Text
                style={{
                  marginBottom: 4,
                  color: '#FF0202',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Rp. 10.000
              </Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
            <View style={style.descmenu}>
              <Image
                style={style.fotomakan}
                source={require('../assets/image/beer.jpg')}
              />

              <Text
                style={{
                  marginBottom: 4,
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Beer
              </Text>
              <Text
                style={{
                  marginBottom: 4,
                  color: '#FF0202',
                  fontWeight: 'bold',
                  fontSize: 14,
                }}>
                Rp. 25.000
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>

      <Text
        style={{
          textAlign: 'center',
          marginTop: 15,
          color: '#A4A4A4',
          fontSize: 14,
        }}>
        Created By :Anasera
      </Text>
      <Text
        style={{textAlign: 'center', color: '#A4A4A4', fontSize: 14}}></Text>
    </View>
  );
};

const style = StyleSheet.create({
  hero: {
    width: '100%',
    height: '100%',
  },
  navbar: {
    backgroundColor: '#CF0A0A',
    width: 400,
    borderRadius: 99,
    height: 52,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 16,
    marginTop: 16,
  },
  navcon: {
    display: 'flex',
    alignItems: 'center',
  },
  title: {
    marginTop: 32,
    marginLeft: 20,
  },
  imagestyle: {
    width: 140,
    height: 32,
    borderWidth: 5,
  },

  menucon: {
    marginTop: 32,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  menu: {
    width: 420,
    height: 260,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  
  },

  descmenu: {
    width: 190,
    display: 'flex',
    alignContent: 'center',
    height: '100%',
  },

  fotomakan: {
    width: '100%',
    borderRadius: 6,
    height: 170,
    resizeMode: 'cover',
    marginBottom: 4,
  },
});

export default Home;
