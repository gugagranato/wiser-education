import React from 'react'

import AuthProvider from './authProvider'

const AppProvider: React.FC = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
)

export default AppProvider
