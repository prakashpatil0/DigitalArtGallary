import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

const FeaturedScreen = () => {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text variant="titleLarge">Featured Artworks</Text>
        <Card style={{ marginVertical: 10 }}>
          <Card.Cover source={{ uri: 'https://source.unsplash.com/featured/?art' }} />
          <Card.Content>
            <Title>Exclusive Collection</Title>
            <Paragraph>Discover handpicked artworks from our top artists.</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default FeaturedScreen;
