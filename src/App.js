import './App.css';
import Dashboard from './components/Dashboard';
import AppLayout from './components/AppLayout';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import LeftPanel from './components/LeftPanel';

const routes = [
  {
    path: "/",
    element: <Dashboard />,
    children: [
      { path: "/", element: <Dashboard /> },
    ],
  },
  { path: "/applayout", element: <AppLayout /> },
];

const appRouter = createBrowserRouter(routes);

function App() {
  return (
    <div className="App">
      {/* Other components */}
      <RouterProvider router={appRouter} >
            <Outlet/>
        </RouterProvider>
    </div>
  );
}

export default App;
