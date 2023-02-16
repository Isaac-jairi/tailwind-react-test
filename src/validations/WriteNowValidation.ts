import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const WriteNowValidation = yup.object({
  destinationName: yup.string().required('Preencha o nome corretamente'),
  destinationAddress: yup.string().required('Preencha o E-Mail corretamente'),
  dueDate: yup.string().required('Preencha a data  corretamente'),
  subject: yup.string().required('Preencha o assunto corretamente'),
  body: yup.string().required('Preencha o conteudo corretamente'),
});

export const WriteNowResolver = yupResolver(WriteNowValidation);
