import {Provider, Grid, defaultTheme} from '@adobe/react-spectrum'
import { Sidebar } from './components/sidebar/Sidebar'
import { Viewer } from './components/viewer/Viewer'

function App() {
  return (
    <Provider theme={defaultTheme}>
      <Grid
        areas={['sidebar content']}
        columns={['1fr', '5fr']}
        rows={['100vh']}
      >
        <Sidebar/>
        <Viewer/>
      </Grid>
    </Provider>
  )
}

export default App