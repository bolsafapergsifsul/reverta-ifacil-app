import React from 'react';
import {TouchableOpacityBox} from '../Box/Box';
import {Icon} from '../Icon/Icon';

export function BackButton() {
  // TODO: implementar a lógica do botão de voltar quando tiver instalado o react-navigation

  return (
    <TouchableOpacityBox flexDirection="row" alignItems="center">
      <Icon name="arrowLeft" color="primary" />
    </TouchableOpacityBox>
  );
}
