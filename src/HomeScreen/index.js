import React, { Component } from "react";
import HomeScreen from "./HomeScreen.js";
// import MainScreenNavigator from "../ChatScreen/index.js";
import ProfileScreen from "../ProfileScreen/index.js";
import SideBar from "../SideBar/SideBar.js";
import { createDrawerNavigator, createAppContainer  } from "react-navigation";

const HomeScreenRouter = createDrawerNavigator(
  {
    Home: { screen: HomeScreen },
    // Chat: { screen: MainScreenNavigator },
    ProfileScreen: { screen: ProfileScreen }
  },
  {
    contentComponent: props => <SideBar {...props} />
  }
);
const App = createAppContainer(HomeScreenRouter);


export default App;
