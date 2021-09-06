import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, SafeAreaView, Image} from 'react-native';
import {uploadsUrl} from '../utils/variables';
import {DateTime} from 'luxon';
import {Text} from 'react-native-elements';

const Single = ({route}) => {
  const {params} = route;
  return (
    <SafeAreaView style={styles.container}>
      <Image
        style={{width: '90%', height: '50%', alignSelf: 'center'}}
        source={{uri: uploadsUrl + params.filename}}
      />
      <Text h4 style={{paddingLeft: 50, paddingTop: 50}}>{params.title}</Text>

      <Text style={{paddingLeft: 50}}>{params.description}</Text>
      <Text style={{paddingLeft: 50}}>{"By " + params.user_id}</Text>
      {/*<Text>
        {DateTime.fromISO(params.time_added)
          .setLocale('fi')
          .toLocaleString({month: 'long', day: 'numeric', year: 'numeric'})}
      </Text>
        <Text>{params.media_type}</Text>*/}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 40,
  },
});

Single.propTypes = {
  route: PropTypes.object.isRequired,
};

export default Single;
