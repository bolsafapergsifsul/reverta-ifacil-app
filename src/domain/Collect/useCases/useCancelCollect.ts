import {useMutation} from '@tanstack/react-query';
import {collectService} from '../collectService';
import {MutationOptions} from '../../../infra/infraTypes';

interface CancelCollectParams {
  collectId: number;
  status: string;
}

export function useCancelCollect(options?: MutationOptions<string>) {
  const mutation = useMutation<string, Error, CancelCollectParams>({
    mutationFn: ({collectId, status}) =>
      collectService.cancelCollect(collectId, status),
    retry: false,
    onSuccess: data => {
      if (options?.onSuccess) {
        options.onSuccess(data);
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });
  function cancelCollect(collectId: number, status: string) {
    mutation.mutate({collectId, status});
  }

  return {
    isLoading: mutation.isPending,
    cancelCollect,
  };
}
