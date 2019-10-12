import React, { useState } from 'react'
import NodeInput from './NodeInput'
import { Text, Button } from '@modulz/radix'

// TODO: Move these to a types.ts file?
export type Node = {
  position: number,
  address: string,
  hints: Hint[],
}

export type Hint = {
  position: number,
  value: string,
}

type HuntNodesProps = {
  nodes: Map<number, Node>,
  setNodes: Function,
}

function HuntNodes(props: HuntNodesProps) {
  const { nodes, setNodes } = props

  const setNode = (node: Node): void => {
    // Set the node at the next index in our node map
    nodes.set(nodes.size, node)

    setNodes(new Map(nodes))
  }

  const nodeInputs: Array<JSX.Element> = []

  for (var i = 0; i < nodes.size; i++) {
    const node = nodes.get(i)
    if (node !== undefined) {
      nodeInputs.push(
        <NodeInput
          key={i}
          node={ node }
        />
      )
    }
  }

  return (
    <div>
      <Text size={4}>Points of Interest</Text>
      { nodeInputs }
      <Button
        my={3}
        onClick={ () => setNode({ address: '', position: 0, hints: [{ value: '', position: 0 }] }) }>
        Another One
      </Button>
    </div>
  )
}

export default HuntNodes
