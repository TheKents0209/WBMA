import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import ListItem from './ListItem';
import {baseUrl} from '../utils/variables';

const List = (props) => {
  const [mediaArray, setMediaArray] = useState([]);
  const url = baseUrl;

  useEffect(() => {
    const loadMedia = async () => {
      try {
        const response = await fetch(url);
        const mediaIlmanThumbnailia = await response.json();
        const kaikkiTiedot = mediaIlmanThumbnailia.map(async (media) => {
          const response = await fetch(baseUrl + 'media/' + media.file_id);
          const tiedosto = await response.json();
          return tiedosto;
        });
        setMediaArray(await Promise.all(kaikkiTiedot));
      } catch (e) {
        console.log(e.message());
      }
    };
    loadMedia();
  }, []);

  return (
    <FlatList
      data={mediaArray}
      renderItem={({item}) => <ListItem singleMedia={item} />}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};

export default List;
