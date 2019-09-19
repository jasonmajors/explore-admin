import React, { useState } from "react"
import { Input, Button } from "@modulz/radix"
import { Node } from './HuntNodes'

type NodeInputProps = {
  node: Node,
  setNode: Function,
}

function NodeInput(props: NodeInputProps) {
  const { node, setNode } = props
  // const { address, position } = node
  const [address, setAddress] = useState('')
  const [position, setPosition] = useState('')

  return (
    <div>
      <Input
        value={ address }
        onChange={ e => setAddress(e.target.value) }
        placeholder="address"
      />
      <Input
        type="number"
        value={ position }
        onChange={ e => setPosition(e.target.value) }
        placeholder="position"
      />
      {/* TODO: Add hints  */}
      <Button onClick={(e: any) => setNode({
        address: address,
        position: position,
        hints: [] })
      }>
        Save
      </Button>
    </div>
  )
}

export default NodeInput
