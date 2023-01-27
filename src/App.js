import './App.css';
import {Content, ContentWrapper, Layout, Navigation, TopBar} from "./layout/Layout";
import TopBarCmp from "./layout/component/TopBarCmp";
import NavigationCmp from "./layout/component/NavigationCmp";
import PageCmp from "./component/PageCmp";

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
                    <PageCmp title="Example page" />
                </Content>
            </ContentWrapper>
        </Layout>
    </div>
  );
}

export default App;
