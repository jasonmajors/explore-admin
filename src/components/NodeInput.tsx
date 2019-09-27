import React, { useState } from "react"
import { Input, Button, Flex } from "@modulz/radix"
import { Node, Hint } from './HuntNodes'
import HintInput from "./HintInput";

type NodeInputProps = {
  node: Node,
}

function NodeInput(props: NodeInputProps) {
  let { node } = props

  const [address, setAddress] = useState(node.address)
  const [position, setPosition] = useState(node.position)
  const [hints, setHints] = useState(node.hints)

  const updateAddress = (address: any) => {
    setAddress(address)
    node.address = address
  }

  const updatePosition = (position: any) => {
    setPosition(position)
    node.position = position
  }

  const newHint = (hint: Hint) => {
    setHints([...hints, hint])
    console.log(hints)
    // node.hints = hints
  }

  const hintInputs: Array<JSX.Element> = []

  for (var i = 0; i < hints.length; i++) {
    hintInputs.push(
      <HintInput
        key={i}
        hint={ hints[i] }
        placeholder={`Hint # ${i+1}`}
      />
    )
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
      { hintInputs }
      <Button onClick={ () => newHint({ value: '', position: hintInputs.length + 1 }) }>New Hint</Button>
    </div>
  )
}

export default NodeInput
