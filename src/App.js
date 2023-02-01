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

export const StatementContext = React.createContext();

function App() {
    return (<div className="App">
        <Layout>
            <StatementContext.Provider value={useStatementContext()}>
                <TopBar>
                    <StatementCmp/>
                    <TopBarCmp/>
                </TopBar>
                <ContentWrapper>
                    <BrowserRouter>
                        <Navigation>
                            <NavigationCmp/>
                        </Navigation>
                        <Content>
                            <Routes>
                                <Route path={"/"} element={<HomePage/>}/>
                                <Route path={"/register"} element={<RegisterPage/>}/>
                                <Route path={"/user-confirm"} element={<ConfirmUserPage/>}/>
                                <Route path={"/orders-all"} element={<OrdersAll/>}/>
                            </Routes>
                        </Content>
                    </BrowserRouter>
                </ContentWrapper>
            </StatementContext.Provider>
        </Layout>
    </div>);
}

export default App;
