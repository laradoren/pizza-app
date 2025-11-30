import { Button } from '@/components/Button';
import Colors from '@/constants/Colors';
import { defaultPizzaImage } from '@/constants/Images';
import { Image, Text, TextInput, View } from '@components/Themed';
import * as ImagePicker from 'expo-image-picker';
import { Stack } from 'expo-router';
import { useState } from 'react';
import { StyleSheet } from 'react-native';

export default function CreateProductScreen() {
  const [name, setName] = useState<string>('');
  const [price, setPrice] = useState<string>('');
  const [errors, setErrors] = useState<string>('');
  const [image, setImage] = useState<string | null>(null);

  const onReset = () => {
    setName('');
    setPrice('');
  }

  const validateInput = () => {
    setErrors('');

    if(!name) {
      setErrors('Name is required');
      return false;
    } 
    
    if(!price) {
      setErrors('Price is required');
      return false;
    }

    if(isNaN(parseFloat(price))) {
      setErrors('Price is not a number');
      return false;
    }

    return true;
  }

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if(!result.canceled) {
      setImage(result.assets[0].uri);
    }
  }

  const onCreate = () => {
    if(!validateInput()) {
      return;
    }
    console.warn("Creating product " + name + " " + price);

    onReset();
  }

  return (
    <View style={styles.container}>
      <Stack.Screen options={{title: 'Create Product'}} />
      <Image source={{uri: image || defaultPizzaImage}} style={styles.image}/>
      <Text style={styles.textImage} onPress={pickImage}>Select Image</Text>

      <Text style={styles.label}>Name</Text>
      <TextInput placeholder='Name' style={styles.input} value={name} onChangeText={setName}/>
      
      <Text style={styles.label}>Price</Text>
      <TextInput placeholder='9.99' style={styles.input} keyboardType='numeric' value={price} onChangeText={setPrice}/>

      <Text style={{color: 'red'}}>{errors}</Text>      
      <Button text='Create' onPress={onCreate}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
  },
  image: {
    width: '50%',
    aspectRatio: 1,
    alignSelf: 'center',
  }, 
  textImage: {
    fontWeight: 'bold',
    color: Colors.light.tint,
    marginVertical: 10,
    alignSelf: 'center',
  },  
  label: {
    color: 'gray',
    fontSize: 16,
    fontWeight: '500',
  },  
  input: {
    backgroundColor: Colors.light.productItem,
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
});