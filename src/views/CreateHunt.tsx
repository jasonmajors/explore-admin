import React, { useState, useEffect } from 'react'
import { Container, Heading, Card, Flex, Button } from '@modulz/radix'
import HuntAttributes from '../components/HuntAttributes'
import HuntNodes from '../components/HuntNodes'
import { db, storage } from '../components/Firebase'
import { Node } from '../components/HuntNodes'
import { auth } from "../components/Firebase"

function CreateHunt(props: any) {
  const [step, setStep] = useState(1)
  const [loading, setLoading] = useState(false)
  const [attributes, setAttributes] = useState({ name: '', duration: 0, description: '', image: new File([], '') })
  // We're using Map here with an index as the key to setup Nodes,
  // because because updating an array item in firestore isn't possible.
  // We'll convert the Map to an Object when we persist to firestore.
  const nodeMap = new Map<number, Node>()
  nodeMap.set(0, {
    address: '',
    position: 0,
    content: '',
    hints: [
      { value: '', position: 0 }
    ]
  })

  const [nodes, setNodes] = useState(nodeMap)

  useEffect(() => {
    // Setup a listener for authentication
    auth.onAuthStateChanged((user: firebase.User | null) => {
      if (user === null) {
        props.history.push(`/login`)
      }
    })
  }, [])

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
      // start loading indicator
      setLoading(true)
      // Upload the image and get the URL
      const downloadURL: URL = await upload()
      const payload = {
        title: attributes.name,
        description: attributes.description,
        duration: attributes.duration,
        image: downloadURL.toString(),
        // Convert our nodes map into an Object to save in firestore
        nodes: objectifyNodes(nodes)
      }
      const doc = await db.collection('hunts').add(payload)
      // end loading indicator
      setLoading(false)
      console.log(doc.id)
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * Converts the Node map into an Object we can persist to firestore
   *
   * @param nodes Map<number, Node>
   * @return Object { [index: number]: Node }
   */
  const objectifyNodes = (nodes: Map<number, Node>): { [index: number]: Node } => {
    return Object.fromEntries(nodes)
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
            {step > 1 && loading === false &&
              <Button onClick={ () => prevStep() } mr={3}>Back</Button>
            }
            {step < 3 &&
              <Button onClick={ () => nextStep() }>Next</Button>
            }
            {step === 3 &&
              <Button
                onClick={ () => submit() }
                isWaiting={ loading }
              >
                Submit
              </Button>
            }
          </Flex>
        </Container>
      </Card>
    </Container>
  )
}

export default CreateHunt
