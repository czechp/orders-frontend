import './App.css';
import {Content, ContentWrapper, Layout, Navigation, TopBar} from "./layout/Layout";
import TopBarCmp from "./layout/component/TopBarCmp";

function App() {
  return (
    <div className="App">
        <Layout>
            <TopBar>
                <TopBarCmp />
            </TopBar>
            <ContentWrapper>
                <Navigation>

                </Navigation>
                <Content>

                </Content>
            </ContentWrapper>
        </Layout>
    </div>
  );
}

export default App;
