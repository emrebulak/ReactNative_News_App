import React from 'react';
import {ScrollView, Image} from 'react-native';
import styles from './NewsScroll.style';

const Scroll = ({banner}) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      {banner.map(bannerNews => (
        <Image
          style={styles.banner_image}
          source={{uri: bannerNews.imageUrl}}
        />
      ))}
    </ScrollView>
  );
};

export default Scroll;
