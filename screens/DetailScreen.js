import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from "react-native";
import axios from "axios";
import { LinearGradient } from "expo-linear-gradient";
import { HorizontalCastList } from "../components/containers";
import { API_KEY, API_URL } from "../constants";

const DetailScreen = ({ route }) => {
  const [data, setData] = useState(null);
  const [loadingCast, setLoadingCast] = useState(true);

  const [castData, setCastData] = useState([]);
  const { id } = route.params;
  const { height, width } = useWindowDimensions();

  const fetchDetail = async () => {
    const res = await axios.get(`${API_URL}/3/movie/${id}?api_key=${API_KEY}`);

    const cast = await axios.get(
      `${API_URL}/3/movie/${id}/credits?api_key=${API_KEY}`
    );

    setData(res.data);
    setCastData(cast.data?.cast);
    setLoadingCast(false);
  };

  useEffect(() => {
    fetchDetail();
  }, []);

  const genre = data?.genres.map((genre, index) =>
    index == data?.genres.length - 1 ? genre.name : `${genre.name}, `
  );

  return (
    <ScrollView style={{ backgroundColor: "#000000" }}>
      {data ? (
        <>
          <ImageBackground
            source={{
              uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}`,
            }}
            resizeMode={height < 400 ? "contain" : "cover"}
          >
            <LinearGradient
              colors={["transparent", "#000000"]}
              style={{
                minHeight: height < 400 ? 320 : 480,
                position: "relative",
              }}
            ></LinearGradient>
          </ImageBackground>
          <View style={styles.contentContainer}>
            <Text
              style={
                height < 400 ? [styles.title, { fontSize: 28 }] : styles.title
              }
            >
              {data?.title}
            </Text>
            <View style={styles.containerInfo}>
              <ScrollView
                horizontal={true}
                style={{ display: "flex", gap: 4, flexDirection: "row" }}
              >
                <Text
                  style={
                    height < 400
                      ? [styles.subtitle, { fontSize: 20 }]
                      : styles.subtitle
                  }
                >
                  {genre}
                </Text>
                <Text>.</Text>
              </ScrollView>
              <Text
                style={
                  height < 400
                    ? [styles.subtitle, { fontSize: 20 }]
                    : styles.subtitle
                }
              >
                {data?.runtime} min
              </Text>
            </View>
            <Text
              style={
                height < 400
                  ? [styles.paragraph, { fontSize: 18 }]
                  : styles.paragraph
              }
            >
              {data?.overview}
            </Text>
            <View style={styles.containerCast}>
              <Text
                style={
                  height < 400 ? [styles.title, { fontSize: 28 }] : styles.title
                }
              >
                Casts
              </Text>
              {loadingCast ? (
                <ActivityIndicator animating={loadingCast} />
              ) : (
                <HorizontalCastList data={castData} />
              )}
            </View>
          </View>
        </>
      ) : (
        <ActivityIndicator animating={data == null} />
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  title: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "bold",
  },
  subtitle: {
    color: "#bbbbbb",
    fontSize: 16,
  },
  paragraph: {
    color: "#FFFFFF",
    fontSize: 14,
  },
  contentContainer: {
    padding: 16,
    display: "flex",
    flexDirection: "column",
    gap: 16,
    marginTop: -96,
  },
  containerCast: {
    display: "flex",
    flexDirection: "column",
    gap: 12,
  },
  containerInfo: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
  },
});

export default DetailScreen;
