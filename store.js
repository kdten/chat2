import {Store} from 'pullstate';

interface UIStore {
  user: {
    firstName: string;
    lastName: string;
    acceptedTnC: boolean;
  };
  preferences: {
    isDarkMode: boolean;
    pushNotifications: boolean;
  };
}