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

  const [address, setAddress] = useState(node.address)
  const [position, setPosition] = useState(node.position)
  const [saved, setSaved] = useState(false)

  const saveNode = () => {
    setSaved(true)
    setNode({ address, position, hints: [] })
  }

  return (
    <div>
      <Flex justifyContent="center">
        <Input
          value={ address }
          onChange={ e => setAddress(e.target.value) }
          placeholder="Address"
          my={3}
          mr={3}
        />
        <Input
          type="number"
          value={ position === 0 ? '' : position }
          onChange={ (e: any) => setPosition(e.target.value) }
          placeholder="Position"
          ml={3}
          my={3}
        />
      </Flex>
      {/* TODO: Add hints  */}
      { saved === false && (
        <Button onClick={ () => saveNode() }>
          Another One
        </Button>
      )}
    </div>
  )
}

export default NodeInput
