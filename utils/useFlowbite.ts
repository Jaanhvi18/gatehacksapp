import { useEffect } from 'react';

const useFlowbite = () => {
  useEffect(() => {
    if (typeof document !== 'undefined') {
      require('flowbite');
    }
  }, []);
};

export default useFlowbite;
