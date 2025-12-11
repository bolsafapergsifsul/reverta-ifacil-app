import {useMutation} from '@tanstack/react-query';
import {MutationOptions} from '../../../infra/infraTypes';
import {CollectData, CreateCollectType} from '../collectTypes';
import {collectService} from '../collectService';

export function useCreateCollect(options?: MutationOptions<CollectData>) {
  const mutation = useMutation<CollectData, Error, CreateCollectType>({
    mutationFn: collectData => collectService.createCollect(collectData),
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

  function createCollect(collectData: CreateCollectType) {
    mutation.mutate(collectData);
  }

  return {
    isLoading: mutation.isPending,
    createCollect,
  };
}
