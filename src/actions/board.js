import uuid from "uuid"
export const dodavanjeNaProekt = ({ proekt } = {}) => ({
  type: "CARD",
  user: {
    id: uuid(),
    proekt
  }
})
