import { Route, Redirect } from 'react-router-dom'

function LoginRedirectRoute(props) {
    const oAuthToken = localStorage.getItem('oAuthToken')

    if (oAuthToken)
        return <Route {...props} />
    else
        return <Redirect to='/login' />
}

export default LoginRedirectRoute
