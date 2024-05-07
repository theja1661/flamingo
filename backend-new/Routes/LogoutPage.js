// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import LogoutPage from './LogoutPage';
// import LoginSignup from './LoginSignup'; // Assuming you have a LoginPage component
// import LoginSignup from '../../src/Pages/LoginSignup';

// const App = () => {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/logout" component={LogoutPage} />
//         <Route path="/login" component={LoginSignup} />
//         {/* Add other routes for different pages */}
//       </Switch>
//     </Router>
//   );
// };

// export default App;


import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
//import LogoutPage from './LogoutPage';
import LoginSignup from './LoginSignup'; 

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/logout" component={LogoutPage} />
        <Route path="/login" component={LoginSignup} />
        {/* Add other routes for different pages */}
      </Switch>
    </Router>
  );
};

export default App;
