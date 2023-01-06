import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 500,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  title: {
    fontSize: 80,
    fontWeight: 'bold',
    color: '#fff',
    padding: 20,
    width: '60%',
  },

  button: {
    backgroundColor: '#fff',
    width: 200,
    marginLeft: 25,
    marginTop: 15,
    height: 40,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  searchButton: {
    backgroundColor: '#fff',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
    marginHorizontal: 10,
    alignItems: 'center',
    flexDirection: 'row',
    position: 'absolute',
    top: 20,
    zIndex: 100,
    width: Dimensions.get('screen').width - 20,
  },
  searchBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default styles;
