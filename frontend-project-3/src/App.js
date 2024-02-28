import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  createRoutesFromElements,
  Route,
  ScrollRestoration,
} from "react-router-dom";
import Admin from './components/admin';
import Employee from './components/employee';
import CreateEmployee from './components/createEmployee';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path='/'>
        <Route index element={<Admin />}></Route>
        <Route path="/employee" element={<Employee />}></Route>
        <Route path="/createEmployee" element={<CreateEmployee />}></Route>
      </Route>
    </Route>
  )
)

function App() {
  return (
    <div className="font-bodyFont">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
