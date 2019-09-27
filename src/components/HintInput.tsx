import React, { useState } from "react"
import { Hint } from './HuntNodes'
import { Input } from "@modulz/radix";

type HintInputProps = {
  hint: Hint,
  placeholder: string,
}

function HintInput(props: HintInputProps) {
  let { hint, placeholder } = props

  const [value, setValue] = useState(hint.value)

  const updateValue = (value: string) => {
    setValue(value)
    hint.value = value
  }

  return (
    <Input
      value={ value }
      placeholder={ placeholder }
      onChange={ e => updateValue(e.target.value) }
      my={3}
      mr={3}
    />
  )
}

export default HintInput
