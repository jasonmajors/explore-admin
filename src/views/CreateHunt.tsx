import React, { useState } from 'react'
import { Container, Heading, Card, Flex, Button } from '@modulz/radix'
import HuntAttributes from '../components/HuntAttributes'
import HuntNodes from '../components/HuntNodes'
import { db, storage } from '../components/Firebase'

function CreateHunt() {
  const [step, setStep] = useState(1)
  const [attributes, setAttributes] = useState({ name: '', duration: 0, description: '', image: new File([], '') })
  const [nodes, setNodes] = useState([
    {
      address: '',
      position: 0,
      hints: [
        { value: '', position: 0 }
      ]
    }
  ])

  /**
   * Upload the state.attributes.image file.
   * Intended for uploading an image to serve as the Hunt background.
   *
   * @return Promise<URL>
   */
  const upload = async(): Promise<URL> => {
    const { image } = attributes
    const snapshot: firebase.storage.UploadTaskSnapshot = await storage.ref()
      .child(`images/${image.name}`)
      .put(image)

    const downloadURL: string = await snapshot.ref.getDownloadURL()

    return new URL(downloadURL)
  }

  /**
   * Submit the Hunt
   *
   * @return Promise<void>
   */
  const submit = async(): Promise<void> => {
    try {
      const downloadURL: URL = await upload()
      const payload = {
        title: attributes.name,
        description: attributes.description,
        duration: attributes.duration,
        image: downloadURL.toString(),
        nodes: nodes
      }
      // start loading indicator
      const doc = await db.collection('hunts').add(payload)
      // end loading indicator
      console.log(doc.id)
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Increments which step we're on
   *
   * @return void
   */
  const nextStep = (): void => {
    setStep(step + 1)
  }

  /**
   * Decrements which step we're on
   *
   * @return void
   */
  const prevStep = (): void => {
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
            {step < 3 &&
              <Button onClick={ () => nextStep() }>Next</Button>
            }
            {step === 3 &&
              <Button onClick={ () => submit() }>Submit</Button>
            }
          </Flex>
        </Container>
      </Card>
    </Container>
  )
}

export default CreateHunt
