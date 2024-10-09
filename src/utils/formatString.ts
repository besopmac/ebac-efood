export const shortDescription = (description: string, size: number) => {
  if (description.length > size) {
    return `${description.substring(0, size)}...`
  }

  return description
}
