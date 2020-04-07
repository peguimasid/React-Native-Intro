import Reactroton from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactroton.configure({ host: '192.168.1.70' })
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
