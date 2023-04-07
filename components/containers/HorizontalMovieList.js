import React from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { MovieItem } from "../elements";

export const HorizontalMovieList = ({ data, title }) => {
  return (
    <View style={styles.containerSection}>
      <Text style={styles.header}>{title}</Text>
      <SafeAreaView style={styles.containerFlatList}>
        <FlatList
          horizontal={true}
          data={data}
          renderItem={({ item }) => <MovieItem item={item} />}
          keyExtractor={(item) => item.id}
        />
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  containerFlatList: {
    display: "flex",
    gap: 8,
  },
  header: {
    color: "#ffffff",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: 20,
  },
  containerSection: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "100%",
  },
});
