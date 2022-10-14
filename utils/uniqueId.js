import { v4 as uuidv4 } from 'uuid'

export const uniqueId = () => {
  const id = uuidv4()

  return id.slice(-12)
}
