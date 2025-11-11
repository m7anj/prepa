import React from 'react';
import { Button, Text, View } from 'react-native';

import { CameraView, useCameraPermissions } from 'expo-camera';

import { PhotoButton } from './components/PhotoButton';

const camera = () => {
  const [permission, requestPermission] = useCameraPermissions();

  if (permission === null) {
    return <View><Text>Loading...</Text></View>
  }

  if (!permission.granted) {
    return <View>
      <Button onPress={requestPermission} title='Access Camera'></Button>
      </View>
  }

  const test = () => {
    console.log('test')
  }

  return (
    <View style={{ flex: 1 }}>
      <CameraView style={{ flex: 1 }} />
      <View className="absolute bottom-12 self-center">
        <PhotoButton onPress={test} />
      </View>
    </View>
  );
}

export default camera;