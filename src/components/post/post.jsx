//import liraries
import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';

// create a component
const Post = props => {
  const post = props.post;

  return (
    <View style={styles.container}>
      {/* Image */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />

      {/* Bed & Bedroom */}
      <Text style={styles.bedrooms}>
        {post.bed} bed {post.bedroom} bedroom
      </Text>

      {/* Type & Description */}
      <Text style={styles.description} numberOfLines={2}>
        {post.type}. {post.title}
      </Text>

      {/* Old Price &  new Price */}
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>${post.oldPrice} </Text>
        <Text style={styles.price}> ${post.newPrice}</Text> / night
      </Text>

      {/* Total Price */}
      <Text style={styles.totalPrice}>${post.totalPrice} total</Text>
    </View>
  );
};

//make this component available to the app
export default Post;
