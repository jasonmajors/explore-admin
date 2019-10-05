import React, { useState } from 'react'
import { Container, Heading, Card, Flex, Button } from '@modulz/radix'
import HuntAttributes from '../components/HuntAttributes'
import HuntNodes from '../components/HuntNodes'
import { db, storage } from '../components/Firebase'

function CreateHunt() {
  const [step, setStep] = useState(1)
  const [attributes, setAttributes] = useState({ name: '', duration: 0, description: '', image: new File([], '') })
  // Need to start with an initial node (empty)
  const [nodes, setNodes] = useState([
    {
      address: '',
      position: 0,
      hints: [
        { value: '', position: 0 }
      ]
    }
  ])

  const upload = () => {
    const { image } = attributes
    if (image) {
      const storageRef = storage.ref()
      const imageRef = storageRef.child(`images/${image.name}`)
      imageRef.put(image).then(snapshot => console.log('uploaded a file'))
    }
  }

  const submit = () => {
    upload()
    // TODO: Save location as GeoPoint for each node
    // {
    //   location: new firebase.firestore.GeoPoint(latitude, longitude)
    // }
    // db.collection('hunts').add({

    // })
  }

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
        <Container size={1}>
          <Heading size={4} my={3}>
            Create a Hunt
          </Heading>
          { inputs }
          <Flex mt={5}>
            {step > 1 &&
              <Button onClick={ () => prevStep() } mr={3}>Back</Button>
            }
            <Button onClick={ () => nextStep() }>Next</Button>
          </Flex>
        </Container>
      </Card>
    </Container>
  )
}

export default CreateHunt
