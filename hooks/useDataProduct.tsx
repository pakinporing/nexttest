import { useContext } from 'react';
import { DataProductContext } from '../contexts/DataProductContext';

export default function useDataProduct() {
  return useContext(DataProductContext);
}
