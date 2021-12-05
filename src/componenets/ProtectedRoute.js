import { useNavigate } from 'react-router-dom';


const ProtectedRoute = ({ isAuth, children }) => {
   let navigate = useNavigate();
   
   if (isAuth) {
      return children
   }
   return (<div> {navigate('/')} </div>)
}

export default ProtectedRoute;
