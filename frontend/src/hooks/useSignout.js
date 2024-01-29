import { useAuthContext } from "./useAuthContext";
import { useNavigate } from "react-router-dom";
export const useSignout = () => {
  const {dispatch} = useAuthContext();
  const navigate = useNavigate();
  const signout = () => {
    localStorage.removeItem('user');

    dispatch({type: 'SIGNOUT'});
    navigate('/');
  }
  return {signout}
}