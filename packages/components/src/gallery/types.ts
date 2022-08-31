import { ExtractPropTypes } from 'vue'
import { createArrayProp, createBooleanProp, createNumericProp } from '../utils'

export const galleryProps = {
  show: createBooleanProp(false),
  urls: createArrayProp<String>(),
  current: String,
  icon: String,
  showSubscript: createBooleanProp(true),
  threshold: createNumericProp(50),
}

export type GalleryProps = ExtractPropTypes<typeof galleryProps>