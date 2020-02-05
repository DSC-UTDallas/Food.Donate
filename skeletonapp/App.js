import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Navigator from './routes/homeStack';

export default function Home() {
  return (
      <Navigator />
  )
}

const styles = StyleSheet.create({
  container: {
      padding: 24
  }
})