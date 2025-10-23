import {useMutation} from '@tanstack/react-query';
import {MutationOptions} from '../../../infra/infraTypes';
import {authService} from '../authService';

export function useAuthSendResetCode(options?: MutationOptions<string>) {
  const {mutate, isPending} = useMutation<string, Error, string>({
    mutationFn: email => authService.requestNewPassword(email),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: message => {
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
  });

  return {
    sendResetCode: (email: string) => mutate(email),
    isLoading: isPending,
  };
}
