import { useLocation } from 'react-router-dom'
import { LinkedinLogo, GithubLogo } from '@phosphor-icons/react'

import { routes } from 'routes'

export function Footer() {
    const location = useLocation()
    const auth = location.pathname === routes.login || location.pathname === routes.register

    return (
        !auth && (
            <div className="flex justify-center bg-indigo-700 text-white">
                <div className="container flex flex-col items-center py-4 gap-2">
                    <h4>Teste Mayo 2024</h4>

                    <div className="flex gap-2">
                        <a href="https://github.com/sam-grs">
                            <GithubLogo size={30} />
                        </a>
                        <a href="https://www.linkedin.com/in/samira-grossi/">
                            <LinkedinLogo size={30} />
                        </a>
                    </div>
                </div>
            </div>
        )
    )
}
