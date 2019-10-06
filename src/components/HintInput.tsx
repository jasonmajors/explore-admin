import React, { useState } from "react"
import { Hint } from './HuntNodes'
import { Textarea } from "@modulz/radix";

type HintInputProps = {
  hint: Hint,
  placeholder: string,
}

function HintInput(props: HintInputProps) {
  let { hint, placeholder } = props

  const [value, setValue] = useState(hint.value)

  const updateValue = (value: string): void => {
    setValue(value)
    hint.value = value
  }

  return (
    <Textarea
      value={ value }
      placeholder={ placeholder }
      onChange={ (e: any) => updateValue(e.target.value) }
      my={3}
      mr={3}
    />
  )
}

export default HintInput
