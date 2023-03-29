import {
  Routes,
  Route,
  Link,
  RouterProvider,
  BrowserRouter,
} from "react-router-dom";
import axios from "axios";
import { createContext } from "react";
import { AdminApp } from "./AdminApp";
import { Login } from "./LoginHome";
import { ClientApp } from "./ClientApp";
export const UserContext = createContext("Guest");
// import { Editor } from "./editor";
axios.defaults.headers.common["Authorization"] = `${localStorage.getItem(
  "loginToken"
)}`;
function Greeting() {
  return (
    <div>
      <strong>Hello</strong>
    </div>
  );
}
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/admin/*"
            element={
              <UserContext.Provider
                value={{ greeting: <Greeting />, name: "Balgan" }}
              >
                <AdminApp />
              </UserContext.Provider>
            }
          />

          {/* <Route path="/admin/*" element={<AdminApp />} /> */}
          <Route path="*" element={<ClientApp />} />
        </Routes>
      </BrowserRouter>
      {/* <AdminEditor /> */}
    </>
  );
}
export default App;
