import React from 'react';
import PropTypes from 'prop-types';
import {TouchableOpacity, View, StyleSheet, ActivityIndicator} from 'react-native';
import {uploadsUrl} from '../utils/variables';
import { Card, ListItem as RNEListItem, Button, Icon, Image, Text } from 'react-native-elements';


const ListItem = ({singleMedia, navigation}) => {
  console.log('singleMedia', singleMedia);
  return (
    <TouchableOpacity
      style={styles.row}
      onPress={() => {
        navigation.navigate('Single', singleMedia);
      }}
    >
      <View style={styles.imagebox}>
        <Image
          style={{width: 60, height: 60}}
          source={{uri: uploadsUrl + singleMedia.thumbnails?.w160}}
          PlaceholderContent={<ActivityIndicator></ActivityIndicator>}
        />
      </View>
      <View style={{flex: 2, marginLeft: 15}}>
        <Text h4 style={{}}>{singleMedia.title}</Text>
        <Text>{singleMedia.description}</Text>
      </View>
      <Button title="View" onPress={() => {
        navigation.navigate('Single', singleMedia);
      }}>

      </Button>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#eee',
    borderRadius: 6,
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 6,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object.isRequired,
  navigation: PropTypes.object.isRequired,
};

export default ListItem;
