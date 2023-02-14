import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  card: {
    flex: 1,
    padding: 20,
    borderWidth: 1,
    borderColor: 'grey',
    margin: 10,
    borderRadius: 20,
    flexDirection: 'row',
  },
  header: {width: 80, height: 80},
  image: {width: '100%', height: '100%'},
  body: {
    margin: 10,
    justifyContent: 'space-around',
    flex: 1,
  },
  footer: {},
});
