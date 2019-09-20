import React, { useState } from "react"
import { Input, Button, Flex } from "@modulz/radix"
import { Node } from './HuntNodes'

type NodeInputProps = {
  node: Node,
  setNode: Function,
}

function NodeInput(props: NodeInputProps) {
  let { node, setNode } = props
  if (node === undefined) {
    node = { position: 0, address: '', hints: [] }
  }
  // Need to be able to get the node value if exists
  const [address, setAddress] = useState(node.address)
  const [position, setPosition] = useState(node.position)

  return (
    <div>
      <Flex justifyContent="center">
        <Input
          value={ address }
          onChange={ e => setAddress(e.target.value) }
          placeholder="address"
          my={3}
        />
        <Input
          type="number"
          value={ position === 0 ? '' : position }
          onChange={ (e: any) => setPosition(e.target.value) }
          placeholder="position"
          my={3}
        />
      </Flex>
      {/* TODO: Add hints  */}
      <Button onClick={(e: any) => setNode({
        address,
        position,
        hints: [] })
      }>
        Another One
      </Button>
    </div>
  )
}

export default NodeInput
