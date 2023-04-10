import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
export const CastItem = ({ item }) => {
  const { width, height } = useWindowDimensions();
  return (
    <View style={styles.item}>
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.profile_path}`,
          width: height < 400 ? 160 : 80,
          height: height < 400 ? 160 : 80,
        }}
        style={styles.image}
      />
      <View>
        <Text
          style={
            height < 400 ? [styles.title, { maxWidth: 160 }] : styles.title
          }
          ellipsizeMode="tail"
          numberOfLines={1}
        >
          {item.name}
        </Text>
        <Text
          style={
            height < 400 ? [styles.title, { maxWidth: 160 }] : styles.subtitle
          }
          ellipsizeMode="tail"
          numberOfLines={1}
        >
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
