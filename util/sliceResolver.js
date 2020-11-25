import Slices from '@/slices'

const slicesMap = {
  free_text: Slices.FreeText,
}

export default slice => slicesMap[slice.slice_type]