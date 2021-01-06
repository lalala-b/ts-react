import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Backdrop, CircularProgress } from "@material-ui/core";
import routes from 'router/routes';
import { GlobalProvider, GlobalContext, GlobalLoadingType } from 'contexts/global';

const App: React.FC = () => {
  const { loading } = useContext<GlobalLoadingType>(GlobalContext);

  return (
    <>
      <Backdrop open={loading} >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Router>
        <Switch>
          {routes.map(({ path , component}) => (
            <Route exact={true} key={path} path={path} component={component} />
          ))}
        </Switch>
      </Router>
    </>
  );
}


ReactDOM.render(
  <React.StrictMode>
    <GlobalProvider>
      <App />
    </GlobalProvider> 
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
