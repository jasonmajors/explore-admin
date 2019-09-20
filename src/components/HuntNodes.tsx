import React, { useState } from 'react'
import NodeInput from './NodeInput'
import { Text } from '@modulz/radix'

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
  nodes: Node[],
  setNodes: Function,
}

function HuntNodes(props: HuntNodesProps) {
  const { nodes, setNodes } = props

  const setNode = (node: Node) => {
    setNodes([...nodes, node])
  }

  const nodeInputs = []

  for (var i = 0; i <= nodes.length; i++) {
    nodeInputs.push(
      <NodeInput
        key={i}
        node={ nodes[i] }
        setNode={ setNode }
      />
    )
  }

  return (
    <div>
      <Text size={4}>Points of Interest</Text>
      { nodeInputs }
    </div>
  )
}

export default HuntNodes
