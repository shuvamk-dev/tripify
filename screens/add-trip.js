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
import AddButton from '../components/common/add-button';
import {useDispatch} from 'react-redux';
import {addTrip} from '../redux/slice/trips';

const AddTripScreen = ({navigation}) => {
  const [placeBanner, setPlaceBanner] = useState();
  const [place, setPlace] = useState('');
  const [country, setCountry] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    setPlaceBanner(RANDOM_THUMBNAIL());
  }, []);

  const handleTripAdd = () => {
    const tripId = Date.now();
    const tripData = {
      id: tripId,
      place,
      country,
      banner: placeBanner,
      expenses: [],
    };
    dispatch(addTrip(tripData));
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

        <AddButton buttonText={'Add Trip'} onPress={handleTripAdd} />
      </View>
    </ScreenWrapper>
  );
};

export default AddTripScreen;

const styles = StyleSheet.create({
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
    color: COLORS.TEXT,
  },

  subHeading: {
    fontSize: 20,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
});
