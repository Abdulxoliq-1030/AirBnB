//import liraries
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

// create a component
const Post = () => {
  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg',
        }}
        style={styles.image}
      />

      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        Entire Flat. Puerto de la cruz lrmLorem Ipsum is simply dummy text of
        the printing and typesetting industry. Lorem Ipsum has been the
        industry's standard dummy
      </Text>

      {/* Old Price &  new Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>$36 </Text>
        <Text style={styles.price}> $30 </Text> / night
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>$230 total</Text>
    </View>
  );
};

//make this component available to the app
export default Post;
