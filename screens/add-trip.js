import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import ScreenWrapper from '../components/common/screen-wrapper';
import BackButton from '../components/common/back-button';
import {RANDOM_THUMBNAIL} from '../assets/assets';
import {COLORS} from '../theme/theme';

const AddTripScreen = ({navigation}) => {
  const [placeBanner, setPlaceBanner] = useState();
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');

  useEffect(() => {
    setPlaceBanner(RANDOM_THUMBNAIL());
  }, []);

  const handleTripAdd = () => {
    navigation.navigate('Home');
  };
  return (
    <ScreenWrapper>
      <View style={styles.addTripWrapper}>
        <View>
          <BackButton onPress={() => navigation.goBack()} />

          <View style={styles.bannerContainer}>
            <Image source={placeBanner} style={styles.banner} />
          </View>

          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.subHeading}>Where on Earth?</Text>
              <TextInput
                value={place}
                onChangeText={e => setPlace(e)}
                style={styles.input}
              />
            </View>
            <View>
              <Text style={styles.subHeading}>Which Country?</Text>
              <TextInput
                value={country}
                onChangeText={e => setCountry(e)}
                style={styles.input}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={handleTripAdd}>
          <View style={styles.addButton}>
            <Text style={styles.btnText}>Add Trip</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScreenWrapper>
  );
};

export default AddTripScreen;

const styles = StyleSheet.create({
  addButton: {
    backgroundColor: COLORS.WHITE,
    paddingVertical: 12,
    borderRadius: 18,
    display: 'flex',
    alignItems: 'center',
  },
  addTripWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  banner: {
    height: 240,
    width: '120%',
    resizeMode: 'cover',
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnText: {
    color: COLORS.DARK_ORANGE,
    fontSize: 20,
    fontWeight: '700',
  },
  form: {
    marginVertical: 24,
  },

  formItem: {
    marginVertical: 16,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    marginTop: 12,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 18,
  },

  subHeading: {
    fontSize: 20,
    fontWeight: '600',
  },
});
