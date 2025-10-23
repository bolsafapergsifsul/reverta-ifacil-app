import {useNavigation} from '@react-navigation/native';
import {AuthStackNames, AuthStackParamList} from '../routes/AuthStack';

export interface ResetNavigationParams {
  firstRouteName: AuthStackNames;
  secondRouteName: AuthStackNames;
}

export function useResetNavigation({
  firstRouteName,
  secondRouteName,
}: ResetNavigationParams) {
  const navigation = useNavigation();

  function reset(
    params: AuthStackParamList[typeof secondRouteName] | undefined,
  ) {
    navigation.reset({
      index: 1,
      routes: [
        {
          name: firstRouteName,
        },
        {
          name: secondRouteName,
          params,
        },
      ],
    });
  }

  return {reset};
}
