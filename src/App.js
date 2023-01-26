import './App.css';
import {Content, ContentWrapper, Layout, Navigation, Topbar} from "./layout/Layout";

function App() {
  return (
    <div className="App">
        <Layout>
            <Topbar>

            </Topbar>
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
