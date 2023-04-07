import React from "react";
import { FlatList, SafeAreaView, StyleSheet } from "react-native";
import { CastItem } from "../elements";

export const HorizontalCastList = ({ data }) => {
  return (
    <SafeAreaView style={styles.containerFlatList}>
      <FlatList
        horizontal={true}
        data={data}
        renderItem={({ item }) => <CastItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
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
