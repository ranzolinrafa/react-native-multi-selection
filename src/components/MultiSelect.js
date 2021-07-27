import React from "react";
import { View, Button, Text } from "react-native";
import { useNavigation } from '@react-navigation/native';

export const MultiSelect = ({ ...props }) => {
  const { label, options, value, onChange } = props;
  const [selectedOptions, setSelectedOptions] = React.useState([]);
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('MultiSelectionScreen', { options, value, onChange, setSelectedOptions });
  };

  return (
    <View>
      <Button title={`Select ${label}`} onPress={onPress} />
      <Text numberOfLines={1}>
        Selected Items:{' '}
        {selectedOptions.length === 0
          ? '...'
          : selectedOptions.map((item) => item.label).join()}
      </Text>
    </View>
  );
};