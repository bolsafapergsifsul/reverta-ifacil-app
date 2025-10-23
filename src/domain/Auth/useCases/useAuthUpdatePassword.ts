import {useMutation} from '@tanstack/react-query';
import {MutationOptions} from '../../../infra/infraTypes';
import {EditPasswordParam} from '../authTypes';
import {authService} from '../authService';
import {errorUtils} from '../../../utils/errorUtils';

export function useAuthUpdatePassword(options?: MutationOptions<string>) {
  const {mutate, isPending} = useMutation<string, unknown, EditPasswordParam>({
    mutationFn: params => authService.updatePassword(params),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(errorUtils.getErrorMessage(error));
      }
    },
    onSuccess: message => {
      if (options?.onSuccess) {
        options.onSuccess(message);
      }
    },
  });

  return {
    updatePassword: (params: EditPasswordParam) => mutate(params),
    isLoading: isPending,
  };
}
