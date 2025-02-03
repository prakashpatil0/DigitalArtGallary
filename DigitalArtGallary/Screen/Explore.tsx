import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

const ExploreScreen = () => {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text variant="titleLarge">Explore Art</Text>
        <Card style={{ marginVertical: 10 }}>
          <Card.Cover source={{ uri: 'https://source.unsplash.com/random/?art' }} />
          <Card.Content>
            <Title>Discover New Art</Title>
            <Paragraph>Dive into a variety of artistic styles and mediums.</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default ExploreScreen;
