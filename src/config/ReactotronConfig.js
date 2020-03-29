import Reactroton from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactroton.configure().useReactNative().connect();

  console.tron = tron;

  tron.clear();
}
