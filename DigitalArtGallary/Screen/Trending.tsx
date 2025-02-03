import React from 'react';
import { View, ScrollView } from 'react-native';
import { Text, Card, Title, Paragraph } from 'react-native-paper';

const TrendingScreen = () => {
  return (
    <ScrollView>
      <View style={{ padding: 10 }}>
        <Text variant="titleLarge">Trending Artworks</Text>
        <Card style={{ marginVertical: 10 }}>
          <Card.Cover source={{ uri: 'https://source.unsplash.com/trending/?art' }} />
          <Card.Content>
            <Title>Most Popular</Title>
            <Paragraph>Discover the most popular artworks trending now.</Paragraph>
          </Card.Content>
        </Card>
      </View>
    </ScrollView>
  );
};

export default TrendingScreen;
