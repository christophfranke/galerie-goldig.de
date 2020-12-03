import Slices from '@/slices'

const slicesMap = {
  free_text: Slices.FreeText,
  carousel: Slices.FotoCarousel
}

export default slice => slicesMap[slice.slice_type]