import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Content, ContentWrapper, Layout, Navigation, TopBar} from "./layout/Layout";
import TopBarCmp from "./layout/component/TopBarCmp";
import NavigationCmp from "./layout/component/NavigationCmp";
import HomePage from "./page/HomePage/HomePage";
import OrdersAll from "./page/OrdersAll/OrdersAll";
import RegisterPage from "./page/RegisterPage/RegisterPage";
import useStatementContext from "./context/useStatementContext";
import StatementCmp from "./component/StatementCmp";
import ConfirmUserPage from "./page/ConfirmUserPage/ConfirmUserPage";
import LoginPage from "./page/LoginPage/LoginPage";
import {useAuthenticationContext} from "./service/useAuthenticationService";
import LoginGuard from "./guard/LoginGuard";
import ForbiddenPage from "./page/ForbiddenPage/ForbiddenPage";
import AdminGuard from "./guard/AdminGuard";
import UsersPage from "./page/UsersPage/UsersPage";

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
                                    <Route path={"/"} element={<LoginGuard><HomePage/></LoginGuard>}/>
                                    <Route path={"/orders-all"} element={<LoginGuard><OrdersAll/></LoginGuard>}/>
                                    <Route path={"/register"} element={<RegisterPage/>}/>
                                    <Route path={"/users"} element={<AdminGuard><UsersPage/></AdminGuard>} />
                                    <Route path={"/user-confirm"} element={<ConfirmUserPage/>}/>
                                    <Route path={"/login"} element={<LoginPage/>}/>
                                    <Route path={"/forbidden"} element={<ForbiddenPage/>}/>
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
