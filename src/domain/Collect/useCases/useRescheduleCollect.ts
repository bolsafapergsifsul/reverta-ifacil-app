import {useMutation} from '@tanstack/react-query';
import {MutationOptions} from '../../../infra/infraTypes';
import {CollectData} from '../collectTypes';
import {collectService} from '../collectService';

interface RescheduleCollectParams {
  collectId: number;
  newDate: string;
}

export function useRescheduleCollect(options?: MutationOptions<CollectData>) {
  const mutation = useMutation<CollectData, Error, RescheduleCollectParams>({
    mutationFn: ({collectId, newDate}) =>
      collectService.rescheduleCollect(collectId, newDate),
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

  function rescheduleCollect(collectId: number, newDate: string) {
    mutation.mutate({collectId, newDate});
  }

  return {
    isLoading: mutation.isPending,
    rescheduleCollect,
  };
}
