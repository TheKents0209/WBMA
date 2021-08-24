import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {baseUrl} from '../utils/variables';
import { useLoadMedia } from '../hooks/ApiHooks';

const List = (props) => {
  const mediaArray = useLoadMedia();
  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default List;
