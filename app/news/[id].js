import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useRouter, useGlobalSearchParams, router } from "expo-router";
import { t } from "react-native-tailwindcss";
import { TouchableOpacity } from "react-native";
import {
  MaterialIcons,
  FontAwesome,
  Ionicons,
  AntDesign,
  Feather,
} from "@expo/vector-icons";

const NewsDetailScreen = () => {
  const { id } = useGlobalSearchParams();
  const [newsItem, setNewsItem] = useState(null);

  useEffect(() => {
    const fetchNewsItem = async () => {
      const newsData = [
        {
          id: 0,
          title: "Market Volatility Continues",
          description:
            "Stocks continue to see fluctuations due to global events.",
          date: "2023-10-29",
          category: "Market",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWVBrUrfL6IYTR45Gm5igb_Tf8JPtLIJA9Lg&s",
        },
        {
          id: 1,
          title: "New Government Scheme Announced",
          description: "Government introduces a new scheme with high returns.",
          date: "2023-10-28",
          category: "Government",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBzidvmANkLCmeOnmTV54jSZtOjGxyINT_rw&s",
        },
        {
          id: 2,
          title: "Mutual Funds for Beginners",
          description:
            "A guide to getting started with mutual funds for new investors.",
          date: "2023-10-27",
          category: "Mutual Funds",
          image:
            "https://paytmblogcdn.paytm.com/wp-content/uploads/2021/11/10_MutualFund_Why-Should-You-Invest-in-Mutual-Funds-Know-its-Benefits-800x500.jpg",
        },
      ];
      const item = newsData.find((n) => n.id === parseInt(id));
      setNewsItem(item);
    };

    fetchNewsItem();
  }, [id]);

  if (!newsItem) return <Text>Loading... {id}</Text>;

  return (
    <ScrollView style={[t.flex1, t.bgWhite]}>
      {/* Back Button */}
      <View style={[t.flexRow, t.itemsCenter, t.p5, t.bgGray100]}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={[t.textXl, t.fontBold, t.textGray900, t.mL4]}>
          News Details
        </Text>
      </View>

      {/* News Image */}
      <View style={[t.pX5, t.mT4]}>
        <Image
          source={{ uri: newsItem.image }}
          style={[t.wFull, { height: 250 }, t.roundedLg]}
        />
      </View>

      {/* News Content */}
      <View style={[t.p5]}>
        <Text style={[t.text3xl, t.fontBold, t.textGray900, t.mT4]}>
          {newsItem.title}
        </Text>
        <Text style={[t.textGray500, t.textSm, t.mT1]}>{newsItem.date}</Text>
        <Text style={[t.textBase, t.textGray700, t.mT4, { lineHeight: 24 }]}>
          {newsItem.description}
        </Text>
        <Text style={[t.textGray600, t.textBase, t.mT4, { lineHeight: 22 }]}>
          {/* Adding additional placeholder content for improved design */}
          "In a remarkable turn of events, markets worldwide continue to adjust
          to significant geopolitical and economic shifts. This news update
          dives into the potential impacts, providing insights for investors
          navigating this landscape. As we witness this transition, staying
          informed remains essential."
        </Text>
      </View>
    </ScrollView>
  );
};

export default NewsDetailScreen;
