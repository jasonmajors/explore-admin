import React, { useState } from 'react';
import { Input, Textarea, Flex, Text } from '@modulz/radix'

function HuntAttributes(props) {
  // const [name, setName] = useState('')
  // const [description, setDescription] = useState('')
  // const [duration, setDuration] = useState(0)
  const { setName, setDuration, setDescription } = props

  return (
    <div>
      <Flex justifyContent="center" mt={5}>
        <Input
          onChange={ e => setName(e.target.value) }
          placeholder="Name of the hunt"
          my={3}
          mx={3}
        />
        <Input
          onChange={ e => setDuration(e.target.value) }
          type="number"
          placeholder="Estimated duration (minutes)"
          my={3}
          mx={3}
        />
      </Flex>
      <Textarea
        onChange={ e => setDescription(e.target.value) }
        placeholder="Description"
        my={3}
        mx={3}
      />
      <Flex alignItems="center">
        <Text mx={3} size="3" textColor="grey">Hunt Image</Text>
        <Input type="file" placeholder="Hunt image" width="70%" />
      </Flex>
    </div>
  )
}

export default HuntAttributes
