import {useQuery} from '@tanstack/react-query';
import {CollectStatusType} from '../collectTypes';
import {QueryKeys} from '../../../infra/infraTypes';
import {collectService} from '../collectService';

export function useGetAllCollectsByUser(
  userId: number,
  status?: CollectStatusType,
) {
  const {data, isLoading, isError, refetch, isFetching} = useQuery({
    queryKey: [QueryKeys.GetAllCollectsByUserId, userId, status],
    queryFn: () => collectService.getCollectsByUserIdWithFilter(userId, status),
    staleTime: 1000 * 30,
  });

  return {
    collects: data,
    isLoading,
    isError,
    refetch,
    isFetching,
  };
}
