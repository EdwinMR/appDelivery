import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from '../views/TabsScreens/HomeScreen/Home';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MessagesScreen } from '../views/TabsScreens/MessageScreen/Message';
import { ShoppingCartScreen } from '../views/TabsScreens/ShoppingCartScreen/ShoppingCart';
import { FavoritesScreen } from '../views/TabsScreens/FavoritesScreen/Favorites';
import { AccountScreen } from '../views/TabsScreens/AccountScreen/Account';
import { Platform, View } from 'react-native';


const Tab = createBottomTabNavigator();


function BottomTabNavigator() {
  return (
    <Tab.Navigator 
      screenOptions={{
        headerShown:false,
        tabBarStyle:{
          height:40,
          position:"absolute",
          bottom:20,
          borderRadius:90,
          marginHorizontal:25,
        },
        tabBarShowLabel:false
      }}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{
        tabBarIcon: ({focused, color })=>{
          return <MaterialCommunityIcons name="home" color={color} size={25}  />
        }
      }}/>
      <Tab.Screen name="MessagesScreen" component={MessagesScreen} options={{
        tabBarIcon: ({focused, color })=>{
          return <MaterialCommunityIcons name="android-messages" color={color} size={25}  />;
        }
      }}/>
      <Tab.Screen name="FavoritesScreen" component={FavoritesScreen} options={{
        tabBarIcon: ({focused, color })=>{
          return <MaterialCommunityIcons name="cards-heart" color={color} size={25}  />;
        }
      }}/>
      <Tab.Screen name="ShoppingCartScreen" component={ShoppingCartScreen} options={{
        tabBarIcon: ({focused, color })=>{
          return <MaterialCommunityIcons name="cart" color={color} size={25}  />;
        }
      }}/>
      <Tab.Screen name="AccountScreen" component={AccountScreen} options={{
        tabBarIcon: ({focused, color })=>{
          return <MaterialCommunityIcons name="account" color={color} size={25}  />;
        }
      }}/>
    </Tab.Navigator>
  );
  //cards-heart account
}

export const Tabs = () => {

  return <BottomTabNavigator/>
}