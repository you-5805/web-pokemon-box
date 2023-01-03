import { api } from '@/lib/api';
import { useEffect } from 'react';

export const useAnonUser = () => {
  useEffect(() => {
    api.me.$post();
  }, []);
};
