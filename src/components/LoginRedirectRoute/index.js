import { useEffect } from 'react'
import { Route, Redirect } from 'react-router-dom'

import { checkToken } from '../../repo/authRepo'

function LoginRedirectRoute(props) {
    useEffect(() => {
        checkToken().then(res => {
            if (!res)
                localStorage.setItem('token', '')
        })
    }, [])

    if (localStorage.getItem('token'))
        return <Route {...props} />
    else
        return <Redirect to='/inicio' />
}

export default LoginRedirectRoute
