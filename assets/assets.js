export const IMAGES = {
  TRIPIFY_BANNER: require('./images/tripify-banner1.png'),
  ADD_EXPENSE_BANNER: require('./images/add-expense.png'),
};

export const ICONS = {
  BACK: require('./icons/back.png'),
};

export const THUMBNAILS = {
  1: require('./images/trips-thumbnails/1.png'),
  2: require('./images/trips-thumbnails/2.png'),
  3: require('./images/trips-thumbnails/3.png'),
  4: require('./images/trips-thumbnails/4.png'),
  5: require('./images/trips-thumbnails/5.png'),
  6: require('./images/trips-thumbnails/6.png'),
  7: require('./images/trips-thumbnails/7.png'),
  8: require('./images/trips-thumbnails/8.png'),
  9: require('./images/trips-thumbnails/9.png'),
  10: require('./images/trips-thumbnails/10.png'),
};

export const RANDOM_THUMBNAIL = () => {
  const rand = Math.floor(Math.random() * 10) + 1;
  return THUMBNAILS[rand];
};
