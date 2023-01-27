import './App.css';
import {Content, ContentWrapper, Layout, Navigation, TopBar} from "./layout/Layout";
import TopBarCmp from "./layout/component/TopBarCmp";
import NavigationCmp from "./layout/component/NavigationCmp";

function App() {
  return (
    <div className="App">

        <Layout>
            <TopBar>
                <TopBarCmp />
            </TopBar>
            <ContentWrapper>
                <Navigation>
                    <NavigationCmp />
                </Navigation>
                <Content>

                </Content>
            </ContentWrapper>
        </Layout>
    </div>
  );
}

export default App;
