import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";

import {Content, ContentWrapper, Layout, Navigation, TopBar} from "./layout/Layout";
import TopBarCmp from "./layout/component/TopBarCmp";
import NavigationCmp from "./layout/component/NavigationCmp";
import HomePage from "./page/HomePage/HomePage";
import OrdersAll from "./page/OrdersAll/OrdersAll";
import RegisterPage from "./page/Register/RegisterPage";

function App() {
    return (<div className="App">
            <Layout>
                <TopBar>
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
                                <Route path={"/orders-all"} element={<OrdersAll/>}/>
                            </Routes>
                        </Content>
                    </BrowserRouter>
                </ContentWrapper>
            </Layout>
        </div>);
}

export default App;
