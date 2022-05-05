import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../components/common/screen-wrapper';
import AddButton from '../components/common/add-button';
import BackButton from '../components/common/back-button';
import {IMAGES} from '../assets/assets';
import {COLORS} from '../theme/theme';
import {useDispatch} from 'react-redux';
import {addExpense} from '../redux/slice/trips';

const CATEGORIES = ['Shopping', 'Food', 'Commute', 'Entertainment', 'Other'];

const AddExpenseScreen = ({navigation, route}) => {
  const selectedTrip = route.params;
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState('');

  const dispatch = useDispatch();

  const handleExpenseAdded = () => {
    const expense = {
      id: Date.now(),
      title,
      amount,
      category,
    };

    const data = {
      tripId: selectedTrip.id,
      expense,
    };

    dispatch(addExpense(data));
    navigation.navigate('Trip Expenses', selectedTrip);
  };

  return (
    <ScreenWrapper>
      <View style={styles.addExpenseWrapper}>
        <View>
          <BackButton onPress={() => navigation.goBack()} />

          <View style={styles.bannerContainer}>
            <Image source={IMAGES.ADD_EXPENSE_BANNER} style={styles.banner} />
            <View style={styles.subHeadingContainer}>
              <Text style={styles.subHeading}>ADD NEW EXPENSE</Text>
            </View>
          </View>
          <View style={styles.form}>
            <View style={styles.formItem}>
              <Text style={styles.label}>For what?</Text>
              <TextInput
                value={title}
                onChangeText={e => setTitle(e)}
                style={styles.input}
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>How Much?</Text>
              <TextInput
                value={amount}
                onChangeText={e => setAmount(Number(e))}
                style={styles.input}
              />
            </View>
            <View style={styles.formItem}>
              <Text style={styles.label}>Category</Text>
              <View style={styles.categoryOptions}>
                {CATEGORIES.map(cat => (
                  <TouchableOpacity
                    style={{
                      ...styles.category,
                      backgroundColor:
                        category === cat
                          ? COLORS.DARK_ORANGE
                          : COLORS.WHITE_TINT,
                    }}
                    onPress={() => setCategory(cat)}>
                    <Text
                      style={{
                        color: category === cat ? COLORS.WHITE : COLORS.BLACK,
                        ...styles.categoryLabel,
                      }}>
                      {cat}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          </View>
        </View>
        <AddButton onPress={handleExpenseAdded} />
      </View>
    </ScreenWrapper>
  );
};

export default AddExpenseScreen;

const styles = StyleSheet.create({
  addExpenseWrapper: {
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },
  banner: {
    height: 240,
    width: '120%',
  },
  bannerContainer: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  category: {
    paddingVertical: 12,
    paddingHorizontal: 24,

    marginRight: 6,
    marginBottom: 16,
    borderRadius: 18,
  },

  categoryLabel: {
    fontSize: 12,
    fontWeight: '600',
  },
  categoryOptions: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 12,
  },
  form: {
    marginTop: 36,
  },

  formItem: {
    marginVertical: 12,
  },
  input: {
    backgroundColor: COLORS.WHITE,
    marginTop: 12,
    fontSize: 16,
    paddingHorizontal: 12,
    paddingVertical: 12,
    borderRadius: 18,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: COLORS.TEXT,
  },
  subHeading: {
    textAlign: 'center',
    fontSize: 18,
    fontWeight: '700',
    color: COLORS.TEXT,
  },
  subHeadingContainer: {
    position: 'absolute',
    bottom: -25,
    paddingVertical: 12,
    width: '70%',
    backgroundColor: COLORS.WHITE,
    borderRadius: 18,
  },
});
