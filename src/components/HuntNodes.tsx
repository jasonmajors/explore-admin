import React, { useState } from 'react';
import { Input, Textarea, Flex } from '@modulz/radix'
import NodeInput from './NodeInput'

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
      <NodeInput
        node={ nodes[0] }
        setNode={ setNode }
      />
      {/* Need an add hint button to add additional hints */}
    </div>
  )
}

export default HuntNodes
