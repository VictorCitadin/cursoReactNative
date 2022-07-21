import { IconButton, VStack } from 'native-base';

import {Header} from '../assets/components/Header';
import {Input} from '../assets/components/Input';
import {Button} from '../assets/components/Button';

export function Register() {
  return (
    <VStack flex={1} p={6} bg="gray.600">
      <Header title="Nova solicitação"/>
      
      <Input
        placeholder="Número do patrimônio"
        mt={4}
      />

      <Input
        placeholder="Descrição do problema"
        flex={1}
        mt={5}
        multiline
        textAlignVertical="top"
      />

      <Button
        title="Cadastrar"
        mt={5}
      />

    </VStack>
  );
}