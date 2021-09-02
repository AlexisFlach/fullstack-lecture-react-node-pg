import {Layout} from './layout/Layout'
import PageHeading from './layout/PageHeading'
import Form from './components/Form'
import Color from './Color'

function App() {
  return (
    <Layout>
      <PageHeading text="Add a Color:" />
      <Form />
      <PageHeading text="My Colors:" />
     <Color />
    </Layout>
  );
}

export default App;
