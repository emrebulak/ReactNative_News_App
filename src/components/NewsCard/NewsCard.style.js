import {StyleSheet, Dimensions} from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    margin: 12,
    borderRadius: 10,
  },
  inner_container: {
    padding: 10,
  },
  image: {
    height: Dimensions.get('window').height / 4,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
  },
  description: {
    marginTop: 3,
  },
  author:{
    fontStyle:'italic',
    textAlign:'right',
    color:'black'
  }
});
