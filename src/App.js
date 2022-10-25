import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import Main from './layout/Main';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: 'login',
          element: <Login></Login>
        },
        {
          path: 'signup',
          element: <SignUp></SignUp>
        },
        {
          path: 'courses',
          element: <Courses></Courses>
        },
        {
          path: 'blog',
          element: <Blog></Blog>
        }

      ]
    },

  ])



  return (
    <div className="App">

      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
