import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '../../../infra/infraTypes';
import {ecoPointService} from '../ecoPointService';

export function useEcoPointGetById(id: number) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.GetEcoPointById, id],
    queryFn: () => ecoPointService.getEcoPointById(id),
    staleTime: 1000 * 30,
  });

  return {
    ecoPoint: data,
    isLoading,
    isError,
    refetch,
    isFetching,
  };
}
