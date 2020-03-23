import React from "react";
import { StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  Card,
  CardItem,
  Body,
  Content,
  Header,
  Title,
  Left,
  Icon,
  Right
} from "native-base";
import DeviceInfo from 'react-native-device-info';

const INITIAL_STATE = {
  username: '',
  pwd: '', 
  loading: true
}

export default class HomeScreen extends React.Component {

  onLogin= ()=>{
    const brand = DeviceInfo.getBrand();

    const appName = DeviceInfo.getApplicationName(); // "Learnium Mobile"
    alert(appName+" "+brand+" My Phone Number"+getPhoneNumber());

  }

  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button
              transparent
              onPress={() => this.props.navigation.navigate("DrawerOpen")}
            >
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>HomeScreen</Title>
          </Body>
          <Right />
        </Header>
        <Content padder>
          <Card>
            <CardItem>
              <Body>
                <Text>Chat App to talk some awesome people!</Text>
              </Body>
            </CardItem>
          </Card>
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("Chat")}
          >
            <Text>Chat With People</Text>
          </Button>
          
          <Button
            full
            rounded
            dark
            style={{ marginTop: 10 }}
            onPress={()=>this.onLogin()}
            >
            <Text> Info </Text>
          </Button>
          
          <Button
            full
            rounded
            primary
            style={{ marginTop: 10 }}
            onPress={() => this.props.navigation.navigate("ProfileScreen")}
          >
            <Text>Goto Profiles</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
