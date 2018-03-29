import {Navigation} from 'react-native-navigation';

Navigation.startTabsBasedApp({
  tabs: [
      {
        screen: 'awesome-places.FindPlaceScreen',
        label: 'Find Place',
        title: 'Find Place'
      },
      {
        screen: 'awesome-places.SharePlaceScreen',
        label: 'Share Place',
        title: 'Share Place'
      }
    ]
});
