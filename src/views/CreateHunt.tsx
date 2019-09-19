import React, { useState } from 'react'
import { Container, Heading, Card, Flex, Button } from '@modulz/radix'
import HuntAttributes from '../components/HuntAttributes'
import HuntNodes from '../components/HuntNodes'

function CreateHunt() {
  const [step, setStep] = useState(1)
  const [attributes, setAttributes] = useState({ name: '', duration: 0, description: '' })
  const [nodes, setNodes] = useState([])

  /**
   * Increments which step we're on
   */
  const nextStep = () => {
    setStep(step + 1)
  }

  /**
   * Decrements which step we're on
   */
  const prevStep = () => {
    setStep(step - 1)
  }

  let inputs
  if (step === 1) {
    inputs = <HuntAttributes
      attributes={ attributes }
      setAttributes={ setAttributes }
    />
  } else if (step === 2) {
    inputs = <HuntNodes
      nodes={ nodes }
      setNodes={ setNodes }
    />
  }

  return (
    <Container size={1} mt={6}>
      <Card>
        <Heading size={4} mt={3} mx={3}>
          New Hunt
        </Heading>
        { inputs }
        <Flex mt={3}>
          {step > 1 &&
            <Button mx={3} onClick={ () => prevStep() }>Back</Button>
          }
          <Button mx={3} onClick={ () => nextStep() }>Next</Button>
        </Flex>
      </Card>
    </Container>
  )
}

export default CreateHunt
