/* @refresh reload */
import { Route, Router } from '@solidjs/router'
import { render } from 'solid-js/web'
import './index.scss'
import { Home } from './component/home/Home'
import { Header } from './component/header/Header'

render(
    () => (
        <div class="main">
            <Header />
            <Router>
                <Route path={'/'} component={Home} />
            </Router>
        </div>
    ),
    document.getElementById('root')!
)
