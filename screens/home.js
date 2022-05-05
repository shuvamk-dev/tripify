import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import ScreenWrapper from '../components/common/screen-wrapper';

import {IMAGES, RANDOM_THUMBNAIL} from '../assets/assets';
import {COLORS} from '../theme/theme';

const TRIPSDATA = [
  {
    id: 1,
    banner: RANDOM_THUMBNAIL(),
    place: 'GOA',
    country: 'India',
  },
  {
    id: 2,
    banner: RANDOM_THUMBNAIL(),
    place: 'MANALI',
    country: 'India',
  },
  {
    id: 3,
    banner: RANDOM_THUMBNAIL(),
    place: 'GOA',
    country: 'India',
  },
  {
    id: 4,
    banner: RANDOM_THUMBNAIL(),
    place: 'GOA',
    country: 'India',
  },
  {
    id: 5,
    banner: RANDOM_THUMBNAIL(),
    place: 'GOA',
    country: 'India',
  },
  {
    id: 6,
    banner: RANDOM_THUMBNAIL(),
    place: 'GOA',
    country: 'India',
  },
  {
    id: 7,
    banner: RANDOM_THUMBNAIL(),
    place: 'GOA',
    country: 'India',
  },
  {
    id: 8,
    banner: RANDOM_THUMBNAIL(),
    place: 'GOA',
    country: 'India',
  },
  {
    id: 9,
    banner: RANDOM_THUMBNAIL(),
    place: 'GOA',
    country: 'India',
  },
  {
    id: 10,
    banner: RANDOM_THUMBNAIL(),
    place: 'GOA',
    country: 'India',
  },
];

const HomeScreen = ({navigation}) => {
  return (
    <ScreenWrapper>
      <View>
        <View style={styles.homeHeader}>
          <Text style={styles.heading}>Tripify</Text>
          <View>
            <Text>DM</Text>
          </View>
        </View>
        <View style={styles.bannerContainer}>
          <Image source={IMAGES.TRIPIFY_BANNER} style={styles.banner} />
          <TouchableOpacity onPress={() => navigation.navigate('Add Trip')}>
            <View style={styles.addTripButton}>
              <Text>Add New Trip</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.subHeading}>RECENT TRIPS</Text>
      <View style={styles.listWrapper}>
        <FlatList
          columnWrapperStyle={styles.tripsList}
          showsVerticalScrollIndicator={false}
          data={TRIPSDATA}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Trip Expenses', item)}>
              <View style={styles.tripCard}>
                <Image source={item.banner} style={styles.tripBanner} />
                <Text style={styles.place}>{item.place}</Text>
                <Text style={styles.country}>{item.country}</Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
          numColumns={2}
        />
      </View>
    </ScreenWrapper>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  addTripButton: {
    position: 'absolute',
    paddingVertical: 12,
    paddingHorizontal: 24,
    bottom: 0,
    borderRadius: 18,
    transform: [{translateY: -25}],
    left: 50,
    backgroundColor: COLORS.WHITE,
  },
  banner: {
    width: '150%',
    resizeMode: 'contain',
    height: 300,
  },
  bannerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
  country: {
    fontSize: 10,
    fontWeight: '600',
    marginLeft: 6,
  },
  heading: {
    fontSize: 28,
    fontWeight: '600',
  },
  homeHeader: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listWrapper: {
    marginBottom: 120,
    height: 420,
  },
  place: {
    fontSize: 14,
    fontWeight: '600',
    marginLeft: 6,
  },
  subHeading: {
    fontSize: 18,
    marginBottom: 12,
    fontWeight: '700',
  },
  tripBanner: {
    height: 150,
    width: 150,
  },
  tripCard: {
    backgroundColor: COLORS.WHITE,
    marginBottom: 12,
    padding: 8,
    borderRadius: 18,
  },
  tripsList: {
    justifyContent: 'space-between',
  },
});
