import React, { Component } from "react";
import { Route } from "react-router-dom";
import { getToken } from "./Common";
import { Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, ...rest}) => {
    return (
        <Route
            {...rest}
            render={props => {
                getToken() ? <Component {...props} />
                 : <Redirect to={{ pathmame: "/login", state: { from: props.location} }} />
            }} 
        />
    )
}

export default PublicRoute;