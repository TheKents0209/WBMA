import {useEffect, useState} from 'react';
import {baseUrl} from '../utils/variables';
import {doFetch} from './http';

const useMedia = () => {
  const [mediaArray, setMediaArray] = useState([]);

  useEffect(() => {
    (async () => {
      setMediaArray(await loadMedia());
    })();
  }, []);

  const loadMedia = async () => {
    try {
      const mediaIlmanThumbnailia = await doFetch(baseUrl + 'media');
      const kaikkiTiedot = mediaIlmanThumbnailia.map(async (media) => {
        return await loadSingleMedia(media.file_id);
      });
      return Promise.all(kaikkiTiedot);
    } catch (e) {
      console.log('loadMedia', e.message);
    }
  };

  const loadSingleMedia = async (id) => {
    try {
      const tiedosto = await doFetch(baseUrl + 'media/' + id + '1');
      return tiedosto;
    } catch (e) {
      console.log('loadSingleMedia', e.message);
      return {};
    }
  };

  return {mediaArray, loadMedia, loadSingleMedia};
};

export {useMedia};
