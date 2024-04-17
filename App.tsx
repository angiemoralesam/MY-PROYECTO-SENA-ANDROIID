import React from 'react';
import {
  StyleSheet,
  Button,
  View,
  ImageBackground,
  Text,
  Alert,
  Image,
  TextInput
} from 'react-native';

const image = {uri: 'https://img.freepik.com/foto-gratis/arreglo-elementos-trabajo-planos_23-2148975818.jpg'};

const Separator = () => <View style={styles.separator} />;


const App = () => (
  <ImageBackground source={image} resizeMode="cover" style={styles.image2}>
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={{
          uri: 'https://senasofiaplus.xyz/wp-content/uploads/2023/10/logo-del-sena-01.png',
        }}
      />
    </View>
  <View>
      <Text style={styles.title}>
        evidencia GA8-220501096-AA2-EV02
      </Text>
      <Button
        title="BIENVENIDOs"
        color={"#00AC00"}
        onPress={() => Alert.alert('Hola, te saluda ANGIE MARCELA MORALES NIÑO')}
        
      />
      <Separator />
    </View>
    <View>
    <Text style={styles.title}>
        INICIO DE SESION 
      </Text>
      <Text style={styles.text}>
        correo electronico
      </Text>
      <TextInput style={styles.textInput} />
    </View>
    <Text style={styles.text}>
       contraseña
      </Text>
    <View>
      <TextInput style={styles.textInput} />
    </View>
    <Separator />
    <View>
      <Button
        title="Ingresar"
        color="#ba55d3"
        onPress={() => Alert.alert('Se Encuentra en reparacion')}
      />
    </View>
    <Separator />
      <View style={styles.fixToText}>
        <Button
          title="mensaje 1"
          color={"#ba55d3"}
          onPress={() => Alert.alert('Gracias')}
        />
        <Button 
          title="mensaje 2"
          color={"#00AC00"}
          onPress={() => Alert.alert('Feliz dia')}
        />
      </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  container: {
  justifyContent: 'center',
  
  },
  logo: {
    resizeMode: 'contain',
    height:150
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  text: {
    textAlign: 'center',
    marginVertical: 5,
    color: 'black'
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 10,
    
  },
  image2: {
    flex: 1,
    marginHorizontal: 8,
    padding: 20,
    margin: 10
  },
  textInput:{
    borderColor: '#ba55d3',
    borderWidth: 1,
    height:50,
    color: 'black'
  },
});


export default App;

