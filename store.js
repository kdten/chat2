import { Store } from 'pullstate';

export const UserStore = new Store({
  user: null,
});

// export const UserStore = new Store({
//   user: {
//     firstName: string,
//     lastName: string,
//     acceptedTnC: boolean,
//   },
//   preferences: {
//     isDarkMode: boolean,
//     pushNotifications: boolean,
//   },
// })