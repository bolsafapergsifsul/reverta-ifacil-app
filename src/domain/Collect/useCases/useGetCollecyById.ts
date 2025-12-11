import {useQuery} from '@tanstack/react-query';
import {QueryKeys} from '../../../infra/infraTypes';
import {collectService} from '../collectService';

export function useGetCollecyById(collectId: number) {
  const {data, isLoading, isError, isFetched} = useQuery({
    queryKey: [QueryKeys.GetCollectById, collectId],
    queryFn: () => collectService.getCollectById(collectId),
    staleTime: 1000 * 30,
  });
  return {collect: data, isLoading, isError, isFetched};
}
