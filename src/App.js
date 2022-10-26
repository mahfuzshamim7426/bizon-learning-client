import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Courses from './components/Courses/Courses';
import Faq from './components/Faq/Faq';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFoundPage from './components/NotFoundPage/NotFoundPage';
import Privacy from './components/Privacy/Privacy';
import SignUp from './components/SignUp/SignUp';
import Terms from './components/Terms/Terms';
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
        },
        {
          path: 'faq',
          element: <Faq></Faq>
        },
        {
          path: 'terms',
          element: <Terms></Terms>
        },
        {
          path: 'privacy',
          element: <Privacy></Privacy>
        },
        {
          path: '*',
          element: <NotFoundPage></NotFoundPage>
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
