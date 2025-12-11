import {useMutation} from '@tanstack/react-query';
import {MutationOptions} from '../../../infra/infraTypes';
import {UpdateUserParams, User} from '../userTypes';
import {useAuthCredentials} from '../../../services/authCredentials/useAuthCredentials';
import {userService} from '../userService';

export function useUserUpdate(options?: MutationOptions<User>) {
  const {authCredentials, updateUser: updateAuthUser} = useAuthCredentials();
  const {mutate, isPending} = useMutation<User, Error, UpdateUserParams>({
    mutationFn: params => updateUser(params),
    retry: false,
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
    onSuccess: user => {
      updateAuthUser(user);
      if (options?.onSuccess) {
        options.onSuccess(user);
      }
    },
  });

  async function updateUser(params: UpdateUserParams): Promise<User> {
    if (!authCredentials) {
      throw new Error('current user not found');
    }

    const user = await userService.updateUser(authCredentials.user.id, params);
    return user;
  }

  return {
    isLoading: isPending,
    updateUser: (params: UpdateUserParams) => mutate(params),
  };
}
