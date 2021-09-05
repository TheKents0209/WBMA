import React from 'react';
import PropTypes from 'prop-types';
import {Image, Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const ListItem = ({singleMedia}) => {
  console.log(singleMedia);
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.imagebox}>
        <Image
          style={styles.image}
          source={{uri: singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{singleMedia.title}</Text>
        <Text style={styles.listDesc}>{singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 5,
    borderRadius: 6,
    flex: 1,
    backgroundColor: '#363e4d',
  },
  imagebox: {
    flex: 1,
    width: '40%',
  },
  image: {
    borderBottomLeftRadius: 50,
    borderRadius: 10,
    width: '100%',
    height: 100,
    marginRight: 10,
    flex: 2,
  },
  textbox: {
    flex: 2,
    padding: 10,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    color: 'white',
  },
  listDesc: {
    flexWrap: 'wrap',
    width: '90%',
    paddingRight: 10,
    color: 'white',
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object.isRequired,
};

export default ListItem;
