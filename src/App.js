import "./index.css";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import RegisterPage from "./pages/Register/Register";
import WelcomePage from "./pages/Welcome/WelcomePage";
import ErrorPage from "./pages/Error/ErrorPage";
import Questionnaire from "./pages/Questionnaire/Questionnaire";
import Results from "./pages/Results/Results";
import Login from "./pages/Login/Login";
import Recommendations from "./pages/Recommendations/Recommendations";
import SadPersonsScale from "./pages/SadPersonsScale/SadPersonsScale";
import BarChart from "./components/Chart/BarChart";
import PatientForm from "./pages/PatientForm/PatientFormPage";
import { DataContext } from "./context/DataContext";
import { LoginContext } from "./context/LoginContext";
import ProtectedRoutes from "./ProtectedRoutes";

function App() {
  const [results, setResults] = useState({});
  const [login, setLogin] = useState({});

  const useAuth = () => {
    const login = localStorage.getItem("token");
    console.log(login);
    return Boolean(login);
  };
  const isAuth = useAuth();

  return (
    <LoginContext.Provider value={{ login, setLogin }}>
      <DataContext.Provider value={{ results, setResults }}>
        <Router>
          <Routes>
            {isAuth ? (
              <>
                {" "}
                <Route path="/welcome" element={<WelcomePage />} />
                <Route path="/questionnaire" element={<Questionnaire />} />
                <Route path="/results" element={<Results />} />
                <Route path="/sadpersonsscale" element={<SadPersonsScale />} />
                <Route path="/patient" element={<PatientForm />} />
                <Route path="/chart" element={<BarChart />} />
                <Route path="/recommendations" element={<Recommendations />} />
              </>
            ) : (
              <>
                {" "}
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<Login />} />
              </>
            )}
            {/* <Route element={ProtectedRoutes}> */}
            <Route
              path="*"
              element={
                isAuth ? <ErrorPage /> : <Navigate to="/login" replace />
              }
            />
            {/* </Route> */}
          </Routes>
        </Router>
      </DataContext.Provider>
    </LoginContext.Provider>
  );
}

export default App;
