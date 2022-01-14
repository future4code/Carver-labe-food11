import { useHistory } from 'react-router-dom';
import { useLayoutEffect } from 'react';
import { goToHome } from '../routes/cordinator'

const useUnprotected = () => {
  const history = useHistory()
  useLayoutEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      goToHome(history)
    }
  }, [history])
}
export default useUnprotected;