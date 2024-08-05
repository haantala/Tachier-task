import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '@/Pages/home';
import CourseDetailsPage from '@/Pages/coursedetails';
import { Provider } from 'react-redux';
import { store } from '../redux/store';

type RootStackParamList = {
  Home: any| undefined;
  CourseDetails: any| undefined; // Add more params as needed for CourseDetails screen.
};

const RootStack  = createNativeStackNavigator<RootStackParamList>();


export default function HomeNavigation() {
  return (
    <Provider store={store}>
    <RootStack.Navigator initialRouteName="Home">
      <RootStack.Screen name="Home" component={HomePage}  />
      {/* Uncomment below to add CourseDetailsPage */}
      {/* <RootStack.Screen name="CourseDetails" component={CourseDetailsPage} /> */}
    </RootStack.Navigator >
    </Provider>
  );
}