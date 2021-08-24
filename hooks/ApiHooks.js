import React, {useEffect, useState} from 'react';
import {FlatList} from 'react-native';
import {baseUrl} from '../utils/variables';

const apiUrl = 'http://media.mw.metropolia.fi/wbma/';

const useLoadMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    const loadMedia = async () => {
      try {
        const response = await fetch(baseUrl + 'media');
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
  return mediaArray;
};

export {useLoadMedia};
