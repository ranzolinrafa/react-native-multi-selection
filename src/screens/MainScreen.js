import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native"
import Constants from 'expo-constants';

import { useForm, Controller } from "react-hook-form"

import { MultiSelect } from "../components/MultiSelect";
import { Card } from 'react-native-paper';

export const MainScreen = ({ route, navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { params } = route;

  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Our brand new form</Text>
      <View>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholder="First Name..."
              defaultValue=""
              style={[styles.input]}
            />
          )}
          name="login"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <TextInput
              onChangeText={onChange}
              value={value}
              placeholder="Last Name..."
              defaultValue=""
              style={styles.input}
            />
          )}
          name="lastName"
        />
      </View>
      <Text style={styles.paragraph}>
        Select items from our new MultiSelect component
      </Text>
      <Card>
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <MultiSelect
              label="Week Days"
              value={value}
              onChange={onChange}
              options={[
                { value: 'monday', label: 'Monday'},
                { value: 'tuesday', label: 'Tuesday'},
                { value: 'wednesday', label: 'Wednesday'},
                { value: 'thursday', label: 'Thursday'},
                { value: 'friday', label: 'Friday'},
                { value: 'saturday', label: 'Saturday'},
                { value: 'sunday', label: 'Sunday'},
              ]}
            />
          )}
          name="weekDays"
        />
        <Controller
          control={control}
          render={({ field: { onChange, value } }) => (
            <MultiSelect
              label="Categories"
              value={value}
              onChange={onChange}
              options={[
                { value: 'category-1', label: 'Category 1'},
                { value: 'category-2', label: 'Category 2'},
                { value: 'category-3', label: 'Category 3'},
              ]}
            />
          )}
          name="categories"
        />
      </Card>
      <View style={styles.footer}>
        <Button title="Enviar" onPress={handleSubmit(onSubmit)} />
      </View>
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
  input: {
    borderRadius: 4,
    backgroundColor: '#ffffff',
    paddingHorizontal: 16,
    height: 48,
    margin: 12,
    marginVertical: 8,
  },
  footer: {
    marginTop: 80,
  },
});
