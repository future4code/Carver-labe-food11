import { BrowserRouter, Switch, Route } from "react-router-dom";
import React from 'react'
import Cart from "../screens/cart/Cart";
import Home from "../screens/home/Home";
import Login from "../screens/login/Login";
import Main from "../screens/main/Main";
import Profile from "../screens/profile/Profile";
import Search from "../screens/search/Search";
import SignUp from "../screens/signUp/SignUp";
import Error from "../screens/error/Error";
import Adress from "../screens/adress/Adress";
import Restaurant from "../screens/Restaurant/Restaurant";


const Router = () => {
    return (
        <BrowserRouter>
          
            <Switch>
                <Route exact path="/">
                    <Main />
                </Route>
                <Route exact path="/login">
                    <Login />
                </Route>
                <Route exact path="/signup">
                    <SignUp />
                </Route>
                <Route exact path="/adress">
                    <Adress />
                </Route>
                <Route exact path="/home">
                    <Home />
                </Route>
                <Route exact path = "/Restaurant">
                    <Restaurant/>
                </Route>
                <Route exact path="/profile">
                    <Profile />
                </Route>
                <Route exact path="/search">
                    <Search />
                </Route>
                <Route exact path="/cart">
                    <Cart />
                </Route>
                <Route>
                    <Error />
                </Route>

            </Switch>
        </BrowserRouter>
    )
}
export default Router