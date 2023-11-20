import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {ApolloClient, InMemoryCache, ApolloProvider} from '@apollo/client';
import HomeScreen from './src/screens/HomeScreen';

const client = new ApolloClient({
  uri: 'https://countries.trevorblades.com/graphql',
  cache: new InMemoryCache()
})

export default function App() {
  
 return(
    <ApolloProvider client={client}>
      <View style={style.container}>
        <HomeScreen />
      </View>
    </ApolloProvider>
 ) 
}

const style = StyleSheet.create({
  container: {
    paddingTop: 50,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center'
  }
})
