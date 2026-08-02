type Project = {
  id: number
  title: string
  academic: boolean
  description: string | null
  url: string | null
  tags: Array<{
    tag: string
    type: string
  }>
  image_url: string
  image_alt: string
}
