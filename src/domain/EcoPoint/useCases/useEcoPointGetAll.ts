import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '../../../infra/infraTypes';
import {ecoPointService} from '../ecoPointService';

export function useEcoPointGetAll() {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.GetAllEcoPoints],
    queryFn: () => ecoPointService.getAllEcoPoints(),
    staleTime: 1000 * 30,
  });

  return {
    ecoPoints: data,
    isLoading,
    isError,
    refetch,
    isFetching,
  };
}
