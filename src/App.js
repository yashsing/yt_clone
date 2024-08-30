import { Provider } from 'react-redux';
import './App.css';
import { Body } from './components/Body';
import Head from './components/Head';
import store from './utils/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import WatchPage from './components/WatchPage';
import Login from './components/Login';
import Signup from './components/Signup';



const appRouter = createBrowserRouter([{
  path: "/",
  element: <Body/>,
  children: [
    {
      path: "/",
      element: <MainContainer /> 
    },
    {
      path: "watch",
      element: <WatchPage />
    }
  ]
},
{
  path: "/login",
  element: <Login/>,
},
{
  path: "/signup",
  element: <Signup/>,
}
])

function App() {
  return (
    <Provider store={store}>
    <div>
      <Head/> 
      <RouterProvider router={appRouter} /> 
      {/* <Body/>  */}
    </div>
    </Provider>
    
    
  );
}

export default App;
