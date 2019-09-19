import React, { useState } from 'react';
import { Input, Textarea, Flex, Text } from '@modulz/radix'

type HuntAttributes = {
  name: string,
  duration: number,
  description: string,
}

type HuntAttributeProp = {
  attributes: HuntAttributes,
  setAttributes: Function,
}

function HuntAttributes(props: HuntAttributeProp) {
  const { attributes, setAttributes } = props

  return (
    <div>
      <Flex justifyContent="center" mt={5}>
        <Input
          onChange={ e => setAttributes({ ...attributes, name: e.target.value }) }
          value={ attributes.name }
          placeholder="Name of the hunt"
          my={3}
          mx={3}
        />
        <Input
          onChange={ e => setAttributes({ ...attributes, duration: e.target.value }) }
          value={ attributes.duration === 0 ? '' : attributes.duration }
          type="number"
          placeholder="Estimated duration (minutes)"
          my={3}
          mx={3}
        />
      </Flex>
      <Textarea
        onChange={ (e: any) => setAttributes({ ...attributes, description: e.target.value }) }
        value={ attributes.description }
        placeholder="Description"
        my={3}
        mx={3}
      />
      <Flex alignItems="center">
        <Text mx={3} size={3} textColor="grey">Hunt Image</Text>
        <Input type="file" placeholder="Hunt image" width="70%" />
      </Flex>
    </div>
  )
}

export default HuntAttributes
