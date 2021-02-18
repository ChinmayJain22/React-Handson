import logo from './logo.svg';
import './App.css';
import Login from './Components/LoginComponent';
import { BrowserRouter as Router,Route, } from "react-router-dom";
import { Container } from 'reactstrap';
import Header from './Components/MenuComponents';
import CompaniesListComponent from './Components/CompanyListDetails'
import PerformanceComponent from './Components/PerformanceComponent';
import WatchListComponent from './Components/WatchListComponent';



function App() {
  return (
     
      <Router>
        <div>
          <Header />
        <switch>
         <Route path="/login" component={Login} exact />
         <Route path="/company" component={CompaniesListComponent} exact /> 
         <Route path="/compareperformance" component={PerformanceComponent} exact/>
         <Route path="/watchlist" component={WatchListComponent} exact />

        </switch>
        
        </div>
    </Router>
    

   
    
    
    
  );
}

export default App;
