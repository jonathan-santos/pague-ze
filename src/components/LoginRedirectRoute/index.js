import { Route, Redirect } from 'react-router-dom'

function LoginRedirectRoute(props) {
    const token = localStorage.getItem('token')

    if (token)
        return <Route {...props} />
    else
        return <Redirect to='/inicio' />
}

export default LoginRedirectRoute
