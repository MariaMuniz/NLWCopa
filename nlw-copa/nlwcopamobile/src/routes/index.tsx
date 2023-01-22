import { NavigationContainer } from '@react-navigation/native'
import { AppRouters } from './app.routers'
import { SignIn } from '../screens/Signin'
import { useAuth } from '../hooks/useAuth'
import { Box } from 'native-base'

export function Routes() {

  const { user } = useAuth();
  return (
    <Box flex={1} bg="gray.900">
      <NavigationContainer>
        {user.name ? <AppRouters /> : <SignIn />}

      </NavigationContainer>
    </Box>
  )
}