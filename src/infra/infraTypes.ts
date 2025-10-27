export interface MutationOptions<TData> {
  onSuccess?: (data: TData) => void;
  onError?: (message: string) => void;
  errorMessage?: string;
}

export enum QueryKeys {
  AsyncValidation = 'AsyncValidation',
  IsEmailAvailable = 'IsEmailAvailable',
  GetAllEcoPoints = 'GetAllEcoPoints',
  GetEcoPointById = 'GetEcoPointById',
}
