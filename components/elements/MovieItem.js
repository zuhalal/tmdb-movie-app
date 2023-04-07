import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";

export const MovieItem = ({ item }) => {
  const navigation = useNavigation();

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("Details", {
          id: item.id,
        })
      }
      style={styles.item}
    >
      <Image
        source={{
          uri: `https://image.tmdb.org/t/p/w500/${item.poster_path}`,
          width: 200,
          height: 200,
        }}
        style={styles.image}
      />
      <View>
        <Text style={styles.title} ellipsizeMode="tail" numberOfLines={1}>
          {item.title}
        </Text>
        <Text style={styles.subtitle} ellipsizeMode="tail" numberOfLines={1}>
          {moment(item.release_date).locale("id").format("DD MMMM YYYY")}
        </Text>
      </View>
    </Pressable>
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
    maxWidth: 200,
  },
  subtitle: {
    color: "#ffffff",
    fontSize: 14,
    maxWidth: 200,
  },
  item: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
    paddingRight: 12,
  },
});
