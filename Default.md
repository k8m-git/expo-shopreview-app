import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {}

export const componentName: React.FC<Props> = ({ shop }: Props) => {
  return (
    <View style={styles.container}>
      <Text>Default</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
