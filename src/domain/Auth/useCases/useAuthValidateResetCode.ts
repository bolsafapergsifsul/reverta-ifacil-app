import {useMutation} from '@tanstack/react-query';
import {MutationOptions} from '../../../infra/infraTypes';
import {authService} from '../authService';
import {ValidateResetCode} from '../authTypes';

export function useAuthValidateResetCode(
  options?: MutationOptions<ValidateResetCode | boolean>,
) {
  const {mutate, isPending} = useMutation<
    ValidateResetCode | boolean,
    Error,
    {email: string; code: string}
  >({
    mutationFn: ({email, code}) => authService.validateResetCode(email, code),
    retry: false,
    onError: () => {
      if (options?.onError) {
        options.onError('Código de verificação inválido.');
      }
    },
    onSuccess: message => {
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
  });

  return {
    validateResetCode: (email: string, code: string) => mutate({email, code}),
    isLoading: isPending,
  };
}
