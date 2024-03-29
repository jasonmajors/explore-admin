import React, { useState } from "react"
import { Input, Button, Flex, Textarea } from "@modulz/radix"
import { Node, Hint } from './HuntNodes'
import HintInput from "./HintInput";

type NodeInputProps = {
  node: Node,
}

function NodeInput(props: NodeInputProps) {
  let { node } = props

  const [address, setAddress] = useState(node.address)
  const [content, setContent] = useState(node.content)
  const [position, setPosition] = useState(node.position)
  const [hints, setHints] = useState(node.hints)

  const updateAddress = (address: string): void => {
    setAddress(address)
    node.address = address
  }

  const updateContent = (content: string): void => {
    setContent(content)
    node.content = content
  }

  const updatePosition = (position: number): void => {
    setPosition(position)
    node.position = position - 1 // 0 index them in the db
  }

  const newHint = (hint: Hint): void => {
    let updated = hints.concat(hint)
    setHints(updated)
    node.hints = updated
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
      <h3>Someplace</h3>
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
      <Flex>
        <Textarea
          value={ content }
          onChange={ (e: any) => updateContent(e.target.value) }
          placeholder="Content"
          my={3}
          mr={3}
          />
      </Flex>
      { hintInputs }
      <Button onClick={ () => newHint({ value: '', position: hintInputs.length }) }>New Hint</Button>
    </div>
  )
}

export default NodeInput
