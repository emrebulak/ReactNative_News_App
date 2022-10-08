import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';
import NewsCard from '../components/NewsCard';
import news_data from '../news_data.json';

import Scroll from '../components/NewsScroll/NewsScroll';
import news_banner_data from '../news_banner_data.json';

import styles from './App.style';

const App = () => {
  const renderNews = ({item}) => <NewsCard news={item} />;
  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.title}>News</Text>
        <FlatList ListHeaderComponent={()=>(<Scroll banner={news_banner_data}/>)} data={news_data} renderItem={renderNews} />

    </SafeAreaView>
  );
};

export default App;
