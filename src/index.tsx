/* @refresh reload */
import { Route, Router } from '@solidjs/router'
import { render } from 'solid-js/web'
import './index.scss'
import { Home } from './component/Home'

render(
    () => (
        <Router>
            <Route path={'/'} component={Home} />
        </Router>
    ),
    document.getElementById('root')!
)
