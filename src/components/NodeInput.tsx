import React, { useState } from "react"
import { Input, Button, Flex } from "@modulz/radix"
import { Node } from './HuntNodes'

type NodeInputProps = {
  node: Node,
}

function NodeInput(props: NodeInputProps) {
  let { node } = props
  // if (node === undefined) {
  //   node = { position: 0, address: '', hints: [] }
  // }

  const [address, setAddress] = useState(node.address)
  const [position, setPosition] = useState(node.position)

  const updateAddress = (address: any) => {
    setAddress(address)
    node.address = address
  }

  const updatePosition = (position: any) => {
    setPosition(position)
    node.position = position
  }

  return (
    <div>
      <Flex justifyContent="center">
        <Input
          value={ address }
          onChange={ e => updateAddress(e.target.value) }
          placeholder="Address"
          my={3}
          mr={3}
        />
        <Input
          type="number"
          value={ position === 0 ? '' : position }
          onChange={ (e: any) => updatePosition(e.target.value) }
          placeholder="Position"
          ml={3}
          my={3}
        />
      </Flex>
      {/* TODO: Add hints  */}
    </div>
  )
}

export default NodeInput
