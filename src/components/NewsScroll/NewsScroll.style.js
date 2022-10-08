import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  banner_image: {
    height: Dimensions.get('window').height / 5,
    width: Dimensions.get('window').width / 2,
  },
});

export default styles;
