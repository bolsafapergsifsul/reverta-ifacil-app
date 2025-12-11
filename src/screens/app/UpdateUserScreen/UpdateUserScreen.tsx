import React, {useState} from 'react';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {AppScreenProps} from '../../../routes/navigationType';
import {useForm} from 'react-hook-form';
import {updateUserSchema, UpdateUserSchema} from './updateUserSchema';
import {zodResolver} from '@hookform/resolvers/zod';
import {FormTextInput} from '../../../components/Form/FormTextInput';
import {Button} from '../../../components/Button/Button';
import {Box} from '../../../components/Box/Box';

import {UserAVatar} from '../../../components/UserAvatar/UserAvatar';
import {useUserUpdate} from '../../../domain/User/useCases/useUserUpdate';

import {
  launchImageLibrary,
  ImagePickerResponse,
} from 'react-native-image-picker';
import {useToastService} from '../../../services/toast/useToast';

export function UpdateUserScreen({
  route,
  navigation,
}: AppScreenProps<'UpdateUserScreen'>) {
  const [profilePic, setProfilePic] = useState(
    route.params.user.profilePic ?? '',
  );

  const {showToast} = useToastService();

  const [imageLocal, setImageLocal] = useState<ImagePickerResponse | null>(
    null,
  );
  const [loading, setLoading] = useState(false);

  const {updateUser, isLoading} = useUserUpdate({
    onSuccess: () => {
      navigation.navigate('AppTabNavigator', {
        screen: 'SettingsScreen',
      });
    },
    onError: message => showToast({message, type: 'error'}),
  });

  const {control, handleSubmit, formState} = useForm<UpdateUserSchema>({
    resolver: zodResolver(updateUserSchema),
    defaultValues: {
      name: route.params.user.name,
      document: route.params.user.document,
      phoneNumber: route.params.user.phoneNumber,
      zipCode: route.params.user.zipCode,
      numberAddress: route.params.user.numberAddress,
    },
    mode: 'onChange',
  });

  async function pickImageFromGallery() {
    const result = await launchImageLibrary({
      mediaType: 'photo',
      maxWidth: 500,
      maxHeight: 500,
      quality: 0.8,
    });

    if (result.assets) {
      setImageLocal(result);
      setProfilePic(result.assets[0].uri);
    }
  }

  async function uploadImageToCloudinary(image: ImagePickerResponse) {
    const cloudName = 'dmop279da';
    const uploadPreset = 'avatar';

    const formData = new FormData();

    formData.append('file', {
      uri: image.assets![0].uri!,
      type: image.assets![0].type || 'image/jpeg',
      name: `avatar_user_${route.params.user.id}.jpg`,
    });

    formData.append('public_id', `avatar_user_${route.params.user.id}`);

    formData.append('upload_preset', uploadPreset);

    const response = await fetch(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      {
        method: 'POST',
        body: formData,
      },
    );

    const json = await response.json();

    return json.secure_url;
  }
  async function submitForm(data: UpdateUserSchema) {
    setLoading(true);

    let imageUrl = profilePic;

    if (imageLocal) {
      imageUrl = await uploadImageToCloudinary(imageLocal);
    }

    await updateUser({
      name: data.name,
      profilePic: imageUrl,
      numberAddress: data.numberAddress,
      phoneNumber: data.phoneNumber,
      document: data.document,
      zipCode: data.zipCode,
    });

    setLoading(false);
  }

  return (
    <Screen canGoBack scrolllable>
      <Text preset="headingSmall" medium mt="s20" mb="s24">
        Atualizar dados de usuário
      </Text>

      <UserAVatar
        url={imageLocal?.assets?.[0]?.uri || profilePic}
        onPress={pickImageFromGallery}
      />

      <FormTextInput
        control={control}
        name="name"
        placeholder="Digite seu nome"
        boxProps={{mb: 's24', mt: 's24'}}
      />
      <FormTextInput
        control={control}
        name="document"
        placeholder="Digite seu CPF"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="phoneNumber"
        placeholder="Digite seu telefone"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="zipCode"
        placeholder="Digite seu CEP"
        boxProps={{mb: 's24'}}
      />
      <FormTextInput
        control={control}
        name="numberAddress"
        placeholder="Digite o número do seu endereço"
        boxProps={{mb: 's24'}}
      />

      <Box justifyContent="center" alignItems="center">
        <Button
          title="Atualizar"
          disabled={!formState.isValid || isLoading || loading}
          onPress={handleSubmit(submitForm)}
        />
      </Box>
    </Screen>
  );
}
