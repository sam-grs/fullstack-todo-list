import { BrowserRouter, Route, Routes } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'

import { Footer, Header } from 'components'
import { routes } from 'routes'
import { Login, Register } from 'pages'

function App() {
    return (
        <BrowserRouter>
            <Header />
            <ToastContainer />
            <Routes>
                <Route path={routes.login} element={<Login />} />
                <Route path={routes.register} element={<Register />} />
                {/* <Route path={routes.tasks} element={<Home />} /> */}
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default App
