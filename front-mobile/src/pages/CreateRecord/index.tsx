import React, { useState } from 'react';
import { FontAwesome5 as Icon } from '@expo/vector-icons'
import { View, StyleSheet, TextInput } from 'react-native'; 
import Header from '../../components/Header'
import PlatformCard from './PlatformCard';
import { GamePlatform } from './types';
import RNPickerSelect from 'react-native-picker-select';
import { Value } from 'react-native-reanimated';

const placeholder = {
  label:'Selecione o gamer',
  value: null
}

const CreateRecord = () => {

  const [platform, setPlatform] = useState<GamePlatform>();
  const [selectedGame, setSelectedGame] = useState('');

  const handleChangePlatform = (selectedPlatform: GamePlatform) => {
    setPlatform(selectedPlatform);
  }

    return (
        <>
        <Header />
        <View style={styles.container}>
            <TextInput 
                style={styles.inputText}
                placeholder="Name"
                placeholderTextColor='#9E9E9E'
            />
            <TextInput
                keyboardType='numeric'
                style={styles.inputText}
                placeholder="Idade"
                placeholderTextColor='#9E9E9E'
                maxLength={3}
            />
            <View style={styles.platformContainer}>
                <PlatformCard
                  platform='PC'
                  icon='laptop'
                  onChange={handleChangePlatform}
                  activePlatform={platform}
                />
                <PlatformCard 
                  platform='XBOX'
                  icon='xbox'
                  onChange={handleChangePlatform}
                  activePlatform={platform}
                />
                <PlatformCard
                  platform='PLAYSTATION'
                  icon='playstation'
                  onChange={handleChangePlatform}
                  activePlatform={platform}
                />
          </View>
          <RNPickerSelect
            onValueChange={value => setSelectedGame(value)}
            placeholder={placeholder} 
            items={[
              { label: 'Football', value: 'football'},
              { label: 'Baseboll', value: 'baseboll'},
              { label: 'Hockey', value: 'hockey'},
            ]}
            style={pickerSelectStyles}
            Icon={() => {
              return <Icon name="chevron-down" color='#9E9E9E' size={25}/>
            }}
          />

        </View>  
       
        </>
    )
}
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#ED7947',
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50
  },
  inputAndroid: {
    fontSize: 16,
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFF',
    borderRadius: 10,
    color: '#ED7947',
    paddingRight: 30,
    fontFamily: "Play_700Bold",
    height: 50
  },
  placeholder: {
    color: '#9E9E9E',
    fontSize: 16,
    fontFamily: "Play_700Bold",
  },
  iconContainer: {
    top: 10,
    right: 12,
  }
})


const styles = StyleSheet.create({
    container: {
      marginTop: '15%',
      paddingRight: '5%',
      paddingLeft: '5%',
      paddingBottom: 50
    },
    inputText: {
      height: 50,
      backgroundColor: '#FFF',
      borderRadius: 10,
      color: '#ED7947',
      fontFamily: "Play_700Bold",
      fontSize: 16,
      paddingLeft: 20,
      marginBottom: 21
    },
    platformContainer: {
      marginBottom: 20,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    footer: {
      marginTop: '15%',
      alignItems: 'center',
    },
    button: {
      backgroundColor: '#00D4FF',
      flexDirection: 'row',
      borderRadius: 10,
      height: 60,
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center'
    },
    buttonText: {
      fontFamily: "Play_700Bold",
      fontWeight: 'bold',
      fontSize: 18,
      color: '#0B1F34',
    }
  })

export default CreateRecord;