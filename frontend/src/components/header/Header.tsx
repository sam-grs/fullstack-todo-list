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
            <div className="flex justify-between p-4 bg-indigo-700 text-white w-full text-lg">
                <Link to={routes.tasks} className="text-2xl font-bold">
                    Logo
                </Link>

                <div className="flex gap-4">
                    <Link to={routes.login}>Entrar</Link>
                    <Link to={routes.login} onClick={logout}>
                        Sair
                    </Link>
                </div>
            </div>
        )
    )
}
