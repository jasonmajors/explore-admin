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

  return (
    <div>
      <Text size={4}>Points of Interest</Text>
      <NodeInput
        node={ nodes[0] }
        setNode={ setNode }
      />
      {/* Need an add hint button to add additional hints */}
    </div>
  )
}

export default HuntNodes
