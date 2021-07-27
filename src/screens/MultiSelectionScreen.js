import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import { useForm, Controller } from 'react-hook-form';
import { CheckBox } from 'react-native-elements';

export const MultiSelectionScreen = ({ route, navigation, ...props }) => {
  const { options, onChange, value, setSelectedOptions } = route.params;
  const [selectionList, setSelectionList] = React.useState([]);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  React.useEffect(() => {
    setSelectionList(() => value || options);
  }, [options, value, selectionList]);

  const onSubmit = (data) => {
    let selection = options.map((item, index) => {
      return { ...item, checked: data[item.value] };
    });

    onChange(selection);
    setSelectedOptions(selection.filter((option) => option.checked));
    navigation.navigate('MainScreen');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>SELECT OPTIONS BELOW 👇</Text>
      <View>
        {selectionList.map((option, index) => {
          return (
            <Controller
              defaultValue={option?.checked || false}
              key={index}
              control={control}
              render={({ field: { onChange, value } }) => (
                <CheckBox
                  checked={value}
                  onIconPress={() => onChange(!value)}
                  onPress={() => onChange(!value)}
                  title={option.label}
                />
              )}
              name={option.value}
            />
          );
        })}
      </View>
      <Button title="Selecionar" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
    height: '100%',
    position: 'relative',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
