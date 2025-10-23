import {createContext, useEffect, useState} from 'react';
import {AuthCredentialsService} from '../authCredentialsTypes';
import {AuthCredentials} from '../../../domain/Auth/authTypes';
import {authCredentialsStorage} from '../authCredentialsStorage';
import {authService} from '../../../domain/Auth/authService';
import {User} from '../../../domain/User/userTypes';
import {registerInterceptor} from '../../../api/apiConfig';

export const AuthCredentialsContext = createContext<AuthCredentialsService>({
  authCredentials: null,
  userId: null,
  isLoading: true,
  saveCredentials: async () => {},
  removeCredentials: async () => {},
  updateUser: () => {},
});

export function AuthCredentialsProvider({
  children,
}: React.PropsWithChildren<{}>) {
  const [authCredentials, setAuthCredentials] =
    useState<AuthCredentials | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    startAuthCredentials();
  });

  useEffect(() => {
    const interceptor = registerInterceptor({
      authCredentials,
      removeCredentials,
      saveCredentials,
    });

    return interceptor;
  }, [authCredentials]);

  async function startAuthCredentials() {
    try {
      const ac = await authCredentialsStorage.get();
      if (ac) {
        authService.updateToken(ac.token);
        setAuthCredentials(ac);
      }
    } catch (error) {
      console.error('Error loading auth credentials:', error);
    } finally {
      setIsLoading(false);
    }
  }

  async function saveCredentials(ac: AuthCredentials): Promise<void> {
    authService.updateToken(ac.token);
    authCredentialsStorage.set(ac);
    setAuthCredentials(ac);
  }
  function updateUser(user: User) {
    if (authCredentials) {
      saveCredentials({...authCredentials, user});
    }
  }

  async function removeCredentials(): Promise<void> {
    authService.removeToken();
    authCredentialsStorage.remove();
    setAuthCredentials(null);
  }

  const userId = authCredentials?.user.id || null;

  return (
    <AuthCredentialsContext.Provider
      value={{
        authCredentials,
        isLoading,
        saveCredentials,
        removeCredentials,
        userId,
        updateUser,
      }}>
      {children}
    </AuthCredentialsContext.Provider>
  );
}
