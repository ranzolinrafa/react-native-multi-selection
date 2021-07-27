# React Native Multi Selection component

This is a React Native multi selection component that uses react-navigation and react-hook-form  to open a modal style screen to select multiple items.

![Main Screen with form](/screenshots/form-screen.png?raw=true "Main Screen with form")
![Global Selection screen](/screenshots/selection-screen.png?raw=true "Global Selection screen")

## Usage
Install project with `yarn install` 

### Add the MultiSelectionScreen your main navigation stack
```javascript
import { MultiSelectionScreen } from './src/screens/MultiSelectionScreen';

...

<NavigationContainer>
  <MainStack.Navigator initialRouteName="MainScreen" headerMode="screen">
    <MainStack.Screen name="MainScreen" component={MainScreen} />
    <MainStack.Screen
      name="MultiSelectionScreen"
      component={MultiSelectionScreen}
    />
  </MainStack.Navigator>
</NavigationContainer>

...
```

### Add the MultiSelection component anywhere you want to work with react-hook-form wrapped in a Controller component
```javascript
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
```

And that's it!
