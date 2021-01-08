import React from "react";
import { Route, Redirect } from "react-router-dom";
import AuthContext from "./AuthContext";

export const ProtectedRoutes = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ isSignedIn }) => ( // destructuration de isSignedIn (une valeur du contexte ...)
      <Route
        render={(props) => {
          return isSignedIn ? (
            //   Si l'user est signedIn, retourne le component prévu pour ce path...
            <Component {...props} />
          ) : (
            // sinon, redirige vers la page signin
            <Redirect to="/signin" />
          );
        }}
        {...rest} // on spread les autres props passée à la route
      />
    )}
  </AuthContext.Consumer>
);

export const ProtectedRoutesAdmin = ({ component: Component, ...rest }) => (
  <AuthContext.Consumer>
    {({ isSignedIn, currentUser }) => ( // destructuration de isSignedIn (une valeur du contexte ...)
      <Route
        render={(props) => {
          return isSignedIn ? (
            currentUser != null && currentUser.role == "admin" ? 
            //   Si l'user est signedIn, retourne le component prévu pour ce path...
            <Component {...props} />
            :
            ''
          ) : (
            // sinon, redirige vers la page signin
            <Redirect to="/lalalalalalal" />
          );
        }}
        {...rest} // on spread les autres props passée à la route
      />
    )}
  </AuthContext.Consumer>
);