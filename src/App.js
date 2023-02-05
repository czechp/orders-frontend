import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Content, ContentWrapper, Layout, Navigation, TopBar} from "./layout/Layout";
import TopBarCmp from "./layout/component/TopBarCmp";
import NavigationCmp from "./layout/component/NavigationCmp";
import HomePage from "./page/HomePage/HomePage";
import OrdersAll from "./page/OrdersAll/OrdersAll";
import RegisterPage from "./page/Register/RegisterPage";
import useStatementContext from "./context/useStatementContext";
import StatementCmp from "./component/StatementCmp";
import ConfirmUserPage from "./page/ConfirmUser/ConfirmUserPage";
import LoginPage from "./page/LoginPage/LoginPage";
import {useAuthenticationContext} from "./service/useAuthenticationService";

export const StatementContext = React.createContext();
export const AuthenticationContext = React.createContext();

function App() {
    return (<div className="App">
        <Layout>
            <AuthenticationContext.Provider value={useAuthenticationContext()}>
                <StatementContext.Provider value={useStatementContext()}>
                    <BrowserRouter>
                        <TopBar>
                            <TopBarCmp/>
                        </TopBar>
                        <ContentWrapper>
                            <Navigation>
                                <NavigationCmp/>
                            </Navigation>
                            <Content>
                                <Routes>
                                    <Route path={"/"} element={<HomePage/>}/>
                                    <Route path={"/register"} element={<RegisterPage/>}/>
                                    <Route path={"/user-confirm"} element={<ConfirmUserPage/>}/>
                                    <Route path={"/login"} element={<LoginPage/>}/>
                                    <Route path={"/orders-all"} element={<OrdersAll/>}/>
                                </Routes>
                            </Content>
                        </ContentWrapper>
                        <StatementCmp/>
                    </BrowserRouter>
                </StatementContext.Provider>
            </AuthenticationContext.Provider>
        </Layout>
    </div>);
}

export default App;
