import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  TextInput,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { t } from "react-native-tailwindcss";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient"; // Make sure to install this package

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredNews, setFilteredNews] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const sliderRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Static category data for filters
  const categories = ["All", "Market", "Government", "Mutual Funds"];

  useEffect(() => {
    // Simulate fetching data (replace with actual API call if available)
    const fetchNews = async () => {
      try {
        const newsData = [
          {
            title: "Market Volatility Continues",
            description:
              "Stocks continue to see fluctuations due to global events.",
            date: "2023-10-29",
            category: "Market",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVBrUrfL6IYTR45Gm5igb_Tf8JPtLIJA9Lg&s",
          },
          {
            title: "New Government Scheme Announced",
            description:
              "Government introduces a new scheme with high returns.",
            date: "2023-10-28",
            category: "Government",
            image:
              "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzidvmANkLCmeOnmTV54jSZtOjGxyINT_rw&s",
          },
          {
            title: "Mutual Funds for Beginners",
            description:
              "A guide to getting started with mutual funds for new investors.",
            date: "2023-10-27",
            category: "Mutual Funds",
            image:
              "https://paytmblogcdn.paytm.com/wp-content/uploads/2021/11/10_MutualFund_Why-Should-You-Invest-in-Mutual-Funds-Know-its-Benefits-800x500.jpg",
          },
        ];
        setNews(newsData);
        setFilteredNews(newsData);
      } catch (error) {
        console.error("Failed to fetch news:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    filterNews();
  }, [searchQuery, selectedCategory]);

  // Filter news by search query and selected category
  const filterNews = () => {
    let updatedNews = news;
    updatedNews = updatedNews.filter(
      (item) => selectedCategory === "All" || item.category === selectedCategory
    );

    if (searchQuery) {
      updatedNews = updatedNews.filter((item) =>
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredNews(updatedNews);
  };

  // Auto-scroll effect for the top news slider
  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current && filteredNews.length > 0) {
        const nextIndex = (currentIndex + 1) % filteredNews.length;
        sliderRef.current.scrollToIndex({ animated: true, index: nextIndex });
        setCurrentIndex(nextIndex);
      }
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [currentIndex, filteredNews]);

  // Render top news item in the slider
  const renderTopNewsItem = ({ item }) => (
    <View
      style={[
        t.w64,
        t.bgWhite,
        t.roundedLg,
        t.shadow2xl, // Extra shadow for more depth
        t.mR4,
        t.overflowHidden,
      ]}
    >
      {/* Image with Gradient Overlay */}
      <View style={{ position: "relative", width: "100%", height: 150 }}>
        <Image
          source={{ uri: item.image }}
          style={[t.wFull, t.hFull, { borderRadius: 12 }]}
        />
        <LinearGradient
          colors={["transparent", "rgba(0, 0, 0, 0.7)"]}
          style={[
            t.absolute,
            t.bottom0,
            t.wFull,
            { height: "100%", borderRadius: 12 },
          ]}
        />
        <View style={[t.absolute, t.bottom0, t.wFull, t.p4]}>
          <Text style={[t.fontBold, t.textWhite, t.textLg]} numberOfLines={1}>
            {item.title}
          </Text>
          <Text style={[t.textGray200, t.textXs]}>{item.date}</Text>
        </View>
      </View>

      {/* Description Text */}
      <View style={[t.p4]}>
        <Text
          style={[t.textGray700, t.textSm, { lineHeight: 20 }]}
          numberOfLines={2}
        >
          {item.description}
        </Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={[t.flex1, t.bgGray100]}>
      {/* Header */}
      <View style={[t.p5, t.flexRow, t.itemsCenter, t.mB2]}>
        <MaterialCommunityIcons name="newspaper" size={28} color="black" />
        <Text style={[t.text2xl, t.fontBold, t.textGray800, t.mL3]}>
          Latest News
        </Text>
      </View>
      <View>
        {/* Top News Slider */}
        <FlatList
          ref={sliderRef}
          data={news}
          renderItem={renderTopNewsItem}
          keyExtractor={(item, index) => index.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={[t.mB4, t.pX5]}
        />
      </View>

      {/* Search Bar */}
      <View style={[t.pX5, t.mB4]}>
        <TextInput
          style={[
            t.bgWhite,
            t.p3,
            t.roundedLg,
            t.shadowLg,
            t.textBase,
            t.textGray700,
          ]}
          placeholder="Search news..."
          value={searchQuery}
          onChangeText={(text) => setSearchQuery(text)}
        />
      </View>
      <View>
        {/* Category Filters */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={[t.flexRow, t.h10, t.pX5, t.mB2]}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => setSelectedCategory(category)}
              style={[
                t.pX4,
                t.pY2,
                t.roundedFull,
                t.justifyCenter,
                t.itemsCenter,
                selectedCategory === category
                  ? [t.bgBlue700, t.mR2]
                  : [t.bgGray300, t.mR2],
              ]}
            >
              <Text
                style={[
                  selectedCategory === category ? t.textWhite : t.textGray700,
                  t.fontBold,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* News List */}
      <View style={[t.flex1, t.p5]}>
        {loading ? (
          <ActivityIndicator size="large" color="#0000ff" />
        ) : filteredNews.length > 0 ? (
          <ScrollView showsVerticalScrollIndicator={false}>
            {filteredNews.map((item, index) => (
              <View
                key={index}
                style={[
                  t.bgWhite,
                  t.roundedLg,
                  t.shadowLg,
                  t.mB4,
                  t.overflowHidden,
                ]}
              >
                <View>
                  <Image
                    source={{ uri: item.image }}
                    style={[t.wFull, { height: 180 }, t.objectCover]}
                  />
                </View>
                <View style={[t.p4]}>
                  <Text style={[t.textLg, t.fontBold, t.textGray900]}>
                    {item.title}
                  </Text>
                  <Text style={[t.textGray600, t.textSm, t.mT1]}>
                    {item.date}
                  </Text>
                  <Text style={[t.textGray700, t.mT2]}>{item.description}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        ) : (
          <Text style={[t.textGray600, t.textCenter, t.textLg, t.mT10]}>
            No news found for this search.
          </Text>
        )}
      </View>
    </SafeAreaView>
  );
};

export default NewsScreen;
