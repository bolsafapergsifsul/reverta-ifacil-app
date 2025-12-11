import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '../../../infra/infraTypes';
import {ecoPointService} from '../ecoPointService';

export function useSearchNearby(
  zipCode?: string,
  latitude?: number,
  longitude?: number,
) {
  const {data, isLoading, isError, refetch, isFetched} = useQuery({
    queryKey: [QueryKeys.SearchAllNearby, zipCode, latitude, longitude],
    queryFn: () =>
      ecoPointService.searchAllNearby(zipCode, latitude, longitude),
    staleTime: 1000 * 30,
  });

  return {
    data,
    isLoading,
    isError,
    refetch,
    isFetched,
  };
}
