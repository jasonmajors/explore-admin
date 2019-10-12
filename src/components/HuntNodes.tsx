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
  nodes: { [i: number]: Node },
  setNodes: Function,
}

function HuntNodes(props: HuntNodesProps) {
  const { nodes, setNodes } = props

  const setNode = (node: Node): void => {
    const next = Object.keys(nodes).length
    setNodes({ ...nodes, [next]: node  })
  }

  const nodeInputs: Array<JSX.Element> = []

  for (var i = 0; i < Object.keys(nodes).length; i++) {
    nodeInputs.push(
      <NodeInput
        key={i}
        node={ nodes[i] }
      />
    )
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
