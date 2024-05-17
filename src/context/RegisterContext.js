import React from 'react'

const RegisterContext = React.createContext({
  isRegistered: false,
  changeRegistrationStatus: () => {},
  name: '',
  topic: '',
  updateName: () => {},
  updateTopic: () => {},
  registerError: false,
  updateError: () => {},
})

export default RegisterContext