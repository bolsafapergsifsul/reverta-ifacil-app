import {useMutation} from '@tanstack/react-query';
import {MutationOptions} from '../../../infra/infraTypes';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {AuthCredentials} from '../authTypes';
import {authService} from '../authService';

interface Variables {
  email: string;
  password: string;
}

export function useAuthSignIn(options?: MutationOptions<AuthCredentials>) {
  const {saveCredentials} = useAuthCredentials();
  console.log('useAuthSignIn called');
  const mutation = useMutation<AuthCredentials, Error, Variables>({
    mutationFn: ({email, password}) => authService.signIn(email, password),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: authCredentials => {
      if (options?.onSuccess) {
        options.onSuccess(authCredentials);
      }
      console.log('Auth Credentials:', authCredentials);
      saveCredentials(authCredentials);
    },
  });

  return {
    isLoading: mutation.isPending,
    signIn: (variables: Variables) => mutation.mutate(variables),
    isSuccess: mutation.isSuccess,
    isError: mutation.isError,
  };
}
