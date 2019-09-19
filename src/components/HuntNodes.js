import React, { useState } from 'react';
import { Input, Textarea, Flex } from '@modulz/radix'

function HuntNodes() {
  return (
    <div>
      <Flex justifyContent="center" mt={5}>
        <Input placeholder="Name of the hunt" my={3} mx={3} />
        <Input type="number" placeholder="Estimated duration (minutes)" my={3} mx={3} />
      </Flex>
      <Textarea placeholder="Description" my={3} mx={3} width="90%" />
    </div>
  )
}

export default HuntNodes
