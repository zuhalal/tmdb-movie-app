import React, { useEffect, useState } from "react";
import { ActivityIndicator, ScrollView, StyleSheet, View } from "react-native";
import axios from "axios";
import { HorizontalMovieList } from "../components/containers";
import { API_KEY, API_URL } from "../constants";

const HomeScreen = () => {
  const [loading, setLoading] = useState(false);
  const [topRatedData, setTopRatedData] = useState([]);
  const [nowPlayingData, setNowPlayingData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);

  const fetchData = async () => {
    await Promise.all([
      axios
        .get(`${API_URL}/3/movie/top_rated?api_key=${API_KEY}`)
        .then((response) => {
          setTopRatedData(response.data?.results);
        }),
      axios
        .get(`${API_URL}/3/movie/now_playing?api_key=${API_KEY}`)
        .then((response) => {
          setNowPlayingData(response.data?.results);
        }),

      axios
        .get(`${API_URL}/3/movie/upcoming?api_key=${API_KEY}`)
        .then((response) => {
          setUpcomingData(response.data?.results);
        }),
    ]);
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ScrollView>
      <View style={styles.container}>
        <ActivityIndicator animating={loading} />
        <HorizontalMovieList data={nowPlayingData} title="Now Playing" />
        <HorizontalMovieList data={upcomingData} title="Upcoming" />
        <HorizontalMovieList data={topRatedData} title="Top Rated" />
      </View>
    </ScrollView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 16,
    color: "#ffffff",
    gap: 28,
  },
  header: {
    color: "#8a2be2",
    fontWeight: "bold",
    textAlign: "left",
  },
  containerSection: {
    display: "flex",
    flexDirection: "column",
    gap: 16,
    width: "100%",
  },
});
