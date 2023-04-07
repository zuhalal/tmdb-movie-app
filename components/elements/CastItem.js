import { Image, Pressable, StyleSheet, Text, View } from "react-native";
export const CastItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
          width: 80,
          height: 80,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
          {item.name}
        </Text>
        <Text style={styles.subtitle} ellipsizeMode="tail" numberOfLines={1}>
          {item.character}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    borderRadius: 8,
  },
  title: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "bold",
    maxWidth: 80,
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 14,
    maxWidth: 80,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    paddingRight: 12,
  },
});
