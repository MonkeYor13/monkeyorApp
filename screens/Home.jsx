import { StyleSheet, Text, View, ScrollView, StatusBar, ImageBackground } from 'react-native'


export default function Home() {
  const fondoHome = require('../assets/backgrounds/bg-home.png')
  return (
    <View style={[styles.home, styles.bgPrimary]}>
      {/* <Text style={styles.title}>©MONKE{'\n'}YOR</Text> */}
      <ImageBackground source={fondoHome} style={styles.backgroud} resizeMode='contain'>
        <Text style={[styles.title, styles.colorOrange]}>©MONKE{'\n'}YOR</Text>
        <Text style={[styles.description, styles.colorTitle]}>I develop custom mobile applications with cutting-edge UX/UI designs that optimize your business.</Text>
      </ImageBackground>
      <Text style={[styles.textCurve, styles.colorTitle]}>About Me</Text>
      <Text style={[styles.subTitle]}>Creativity that impacts. Applications that connect.</Text>
    </View>

  )
}

const styles = StyleSheet.create({
  colorOrange: {
    color: '#F15A24FF',
  },
  bgPrimary: {
    backgroundColor: "#010101",
  },
  bgSecundary: {
    backgroundColor: "#181A1B",
  },
  colorTitle: {
    color: "#FFFFFF",
  },
  colorText: {
    color: "#FFFFFF8E",
  },
  home: {
    flex: 1,
    paddingHorizontal: 16,
  },
  backgroud: {
    
    height: 580,
    marginTop: 16,
    backgroundColor: 'green',
  },
  title: {
    fontFamily: 'Anton',
    fontSize: 64,
    lineHeight: 80,
    textAlign: 'right'
  },
  description: {
    fontFamily: 'InterSemiBold',
    fontSize: 20,
    marginTop: 10
  },
  textCurve:{
    fontFamily: 'InterItalic',
  },
  subTitle:{
    fontFamily: 'InterReg',
    fontSize: 32
  }

})