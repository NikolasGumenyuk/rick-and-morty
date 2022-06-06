
export const statusStyle = (status) => {
  switch (status) {
    case "Dead":
      return `bg-danger`

    case "Alive":
      return `bg-success`

    default:
      return `bg-secondary`
  }
}