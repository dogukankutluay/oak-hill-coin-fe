import { useState } from 'react';

const useResponse = () => {
  const RESPONSE_INITIAL = {
    success: false,
    message: '',
    data: {},
  };
  const [response, setResponse] = useState(RESPONSE_INITIAL);
  return [response, setResponse, RESPONSE_INITIAL];
};
export default useResponse;
