import React from "react";
import {TouchableOpacity, FlatList, View, AppRegistry, Image, StatusBar } from "react-native";
import {
  Button,
  Text,
  Container,
  ListItem,
  Content,
  Icon
} from "native-base";
const routes = ["Home", "Chat", "Profile"];
export default class SideBar extends React.Component {
  render() {
    return (
      <Container>
        <Content>
          <Image
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/drawer-cover.png"
            }}
            style={{
              height: 120,
              width: "100%",
              alignSelf: "stretch",
              position: "absolute"
            }}
          />
          <Image
            square
            style={{
              height: 80,
              width: 70,
              position: "absolute",
              alignSelf: "center",
              top: 20
            }}
            source={{
              uri:
                "https://raw.githubusercontent.com/GeekyAnts/NativeBase-KitchenSink/master/assets/logo.png"
            }}
          />

          <FlatList
            contentContainerStyle={{ marginTop: 120 }}
              scrollEventThrottle={1}
              data={routes}
              renderItem={({ item }) => (
                <TouchableOpacity style={{height: 65, backgroundColor: 'white', flexDirection: 'row',marginHorizontal:10}}
                onPress={() => this.props.navigation.navigate(item)}
                >
                  <View style={{flex: 13, justifyContent: 'space-around', paddingVertical: 3}}>
                    <Text style={{fontWeight: "400"}}>{item}</Text>
                  </View>
           
                </TouchableOpacity>
              )}
              keyExtractor={(item, id) => id.toString()}
            />

          {/* <List
            dataArray={routes}
            contentContainerStyle={{ marginTop: 120 }}
            renderRow={data => {
              return (
                <ListItem
                  button
                  onPress={() => this.props.navigation.navigate(data)}
                >
                  <Text>{data}</Text>
                </ListItem>
              );
            }}
          /> */}
        </Content>
      </Container>
    );
  }
}
