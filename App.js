import React from 'react';
import { StyleSheet, View } from 'react-native';
import HeaderCustom from './components/HeaderCustom';
import SwipeCard from './components/SwipeCard';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base';

export default function App() {
  return (
    <Container>
      <HeaderCustom />
      <SwipeCard />
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
