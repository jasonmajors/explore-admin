import React from 'react';
import { Input, Textarea, Flex, Text } from '@modulz/radix'
import { storage } from './Firebase'

type HuntAttribute = {
  name: string,
  duration: number,
  description: string,
  image: File,
}

type HuntAttributeProps = {
  attributes: HuntAttribute,
  setAttributes: Function,
}

function HuntAttributes(props: HuntAttributeProps) {
  const { attributes, setAttributes } = props

  let uploadImage: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>()

  /**
   * Sets the image File on the attributes prop
   */
  const setImage = (): void => {
    if (uploadImage && uploadImage.current && uploadImage.current.files) {
      let image: File = uploadImage.current.files[0]
      setAttributes({ ...attributes, image })
    }
  }

  return (
    <div>
      <Text size={4}>Basic Info</Text>
      <Flex justifyContent="center" mt={5}>
        <Input
          onChange={ e => setAttributes({ ...attributes, name: e.target.value }) }
          value={ attributes.name }
          placeholder="Name of the hunt"
          my={3}
          mr={3}
        />
        <Input
          onChange={ e => setAttributes({ ...attributes, duration: e.target.value }) }
          value={ attributes.duration === 0 ? '' : attributes.duration }
          type="number"
          placeholder="Estimated duration (minutes)"
          my={3}
          mx={3}
        />
      </Flex>
      <Textarea
        onChange={ (e: React.ChangeEvent<HTMLInputElement>) => setAttributes({ ...attributes, description: e.target.value }) }
        value={ attributes.description }
        placeholder="Description"
        my={3}
      />
      <Flex mt={3} alignItems="center" justifyContent="between">
        <Text size={3} mr={2} textColor="grey">Hunt Image</Text>
        <Input
          onChange={ () => setImage() }
          type="file"
          ref={ uploadImage }
          placeholder="Hunt image" />
      </Flex>
    </div>
  )
}

export default HuntAttributes
