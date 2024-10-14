import { Link, useLocation } from 'react-router-dom'

import { Alert } from 'components/alert'
import { routes } from 'routes'

export function Header() {
    const location = useLocation()
    const auth = location.pathname === routes.login || location.pathname === routes.register
    function logout() {
        Alert({ message: 'Usuário foi desconectado', type: 'info' })
    }

    return (
        !auth && (
            <div className="flex justify-between p-8 bg-black text-white w-full text-lg">
                <Link to={routes.tasks} className="text-1xl font-semibold">
                    Projeto TO-DO List
                </Link>

                <Link className="text-1xl font-semibold" to={routes.login} onClick={logout}>
                    Sair
                </Link>
            </div>
        )
    )
}
