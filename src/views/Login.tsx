import React, { useState, useEffect } from "react"
import { Container, Card, Heading, Input, Button, Text } from "@modulz/radix"
import firebase, { auth } from "../components/Firebase"

function Login(props: any) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [errors, setErrors] = useState('')


  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => {
      if (user != null) {
        props.history.push(`/create`)
      }
    })
  }, [])

  const submit = () => {
    auth.signInWithEmailAndPassword(email, password)
      .catch(error => {
        // Handle Errors here.
        setErrors(error.message)
      });
  }

  return (
    <Container size={1} mt={6}>
      <Card>
        <Container size={1}>
          <Heading size={4} my={3}>
            Admin
          </Heading>
          { errors &&
            <Text textColor="red">{ errors }</Text>
          }
          <Input
            placeholder="Email"
            type="email"
            my={3}
            onChange={ e => setEmail(e.target.value) }
          />
          <Input
            placeholder="Password"
            type="password"
            my={3}
            onChange={ e => setPassword(e.target.value) }
          />
          <Button onClick={ () => submit() }>Login</Button>
        </Container>
      </Card>
    </Container>
  )
}

export default Login
