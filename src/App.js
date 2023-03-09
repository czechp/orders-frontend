import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Content, ContentWrapper, Layout, Navigation, TopBar} from "./layout/Layout";
import TopBarCmp from "./layout/component/TopBarCmp";
import NavigationCmp from "./layout/component/NavigationCmp";
import HomePage from "./page/HomePage/HomePage";
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
import UserDetailsPage from "./page/UserDetailsPage/UserDetailsPage";
import RestorePasswordPage from "./page/RestorePasswordPage/RestorePasswordPage";
import ProvidersPage from "./page/ProvidersPage/ProvidersPage";
import ProviderDetailsPage from "./page/ProviderDetailsPage/ProviderDetailsPage";
import CategoriesPage from "./page/CategoriesPage/CategoriesPage";
import CategoryDetailsPage from "./page/CategoryDetailsPage/CategoryDetailsPage";
import ProducersPage from "./page/ProducersPage/ProducersPage";
import ProducerDetailsPage from "./page/ProducerDetailsPage/ProducerDetailsPage";
import ElementsPage from "./page/ElementsPage/ElementsPage";
import ElementDetailsPage from "./page/ElementDetailsPage/ElementDetailsPage";
import ElementAddAssociatedElementPage from "./page/ElementAddAssociatedElementPage/ElementAddAssociatedElementPage";
import OrdersPage from "./page/OrdersPage/OrdersPage";
import OrderDetailsPage from "./page/OrderDetailsPage/OrderDetailsPage";

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
                                    <Route path={"/providers"} element={<LoginGuard><ProvidersPage/></LoginGuard>} />
                                    <Route path={"/provider-details"} element={<LoginGuard><ProviderDetailsPage/></LoginGuard>} />
                                    <Route path={"/categories"} element={<LoginGuard><CategoriesPage/></LoginGuard>} />
                                    <Route path={"/category-details"} element={<LoginGuard><CategoryDetailsPage/></LoginGuard>} />
                                    <Route path={"/producers"} element={<LoginGuard><ProducersPage/></LoginGuard>} />
                                    <Route path={"/producer-details"} element={<LoginGuard><ProducerDetailsPage/></LoginGuard>} />
                                    <Route path={"/elements"} element={<LoginGuard><ElementsPage/></LoginGuard>} />
                                    <Route path={"/element-details"} element={<LoginGuard><ElementDetailsPage/></LoginGuard>} />
                                    <Route path={"/element-add-associated"} element={<LoginGuard><ElementAddAssociatedElementPage/></LoginGuard>} />
                                    <Route path={"/orders"} element={<LoginGuard><OrdersPage/></LoginGuard>} />
                                    <Route path={"/order-details"} element={<LoginGuard><OrderDetailsPage/></LoginGuard>} />
                                    <Route path={"/register"} element={<RegisterPage/>}/>
                                    <Route path={"/users"} element={<AdminGuard><UsersPage/></AdminGuard>} />
                                    <Route path={"/user-details"} element={<AdminGuard><UserDetailsPage/></AdminGuard>} />
                                    <Route path={"/user-confirm"} element={<ConfirmUserPage/>}/>
                                    <Route path={"/login"} element={<LoginPage/>}/>
                                    <Route path={"/restore-password"} element={<RestorePasswordPage/>}/>
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
