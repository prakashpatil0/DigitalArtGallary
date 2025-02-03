import React from "react";
import { View, Image, ScrollView, StyleSheet } from "react-native";
import { Appbar, Card, Text, BottomNavigation } from "react-native-paper";

const HomeTab = () => {
  const images = [
    require("@/assets/images/art1.jpg"),
    require("@/assets/images/art2.jpg"),
    require("@/assets/images/art3.jpg"),
    require("@/assets/images/art4.jpg"),
    require("@/assets/images/art5.png"),
    require("@/assets/images/art6.jpg"),
    require("@/assets/images/art7.jpg"),
    require("@/assets/images/art8.jpg"),
    require("@/assets/images/art9.jpg"),
  ];

  return (
    <View style={styles.container}>
      {/* Header */}
      <Appbar.Header>
        <Appbar.Action icon="menu" onPress={() => {}} />
        <Appbar.Content title="Digital Art Gallery" />
        <Text style={styles.logo}>LOGO</Text>
      </Appbar.Header>

      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>Digital Art Gallery</Text>
        <Text style={styles.bannerText}>
          Step into a world where imagination knows no bounds. Our gallery is a
          haven for art lovers, showcasing a diverse collection of contemporary
          and classical artworks.
        </Text>
      </View>

      {/* Gallery Grid */}
      <ScrollView contentContainerStyle={styles.grid}>
        {images.map((image, index) => (
          <Card key={index} style={styles.card}>
            <Image source={image} style={styles.image} />
          </Card>
        ))}
      </ScrollView>

      {/* Bottom Navigation */}
      <BottomNavigation
        navigationState={{ index: 0, routes: [
          { key: 'home', title: 'Home', icon: 'home' },
          { key: 'explore', title: 'Explore', icon: 'magnify' },
          { key: 'featured', title: 'Featured', icon: 'gift' },
          { key: 'trending', title: 'Trending', icon: 'trending-up' },
          { key: 'new', title: 'New Arrival', icon: 'plus' }
        ] }}
        onIndexChange={() => {}}
        renderScene={() => null}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#F8F8F8" },
  logo: { fontSize: 18, fontWeight: "bold", marginRight: 15 },
  banner: { backgroundColor: "#D3E0EA", padding: 15, borderRadius: 10, margin: 10 },
  bannerTitle: { fontSize: 22, fontWeight: "bold", textAlign: "center" },
  bannerText: { fontSize: 14, textAlign: "center", marginTop: 5 },
  grid: { flexDirection: "row", flexWrap: "wrap", justifyContent: "space-evenly", padding: 10 },
  card: { width: 100, height: 100, margin: 5, borderRadius: 10, overflow: "hidden" },
  image: { width: "100%", height: "100%", resizeMode: "cover" }
});

export default HomeTab;
