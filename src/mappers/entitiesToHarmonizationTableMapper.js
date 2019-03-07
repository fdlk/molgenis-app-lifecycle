/**
 * Map a list of MOLGENIS entities to a key value map where the key is a string and the
 * value is a list of strings
 *
 * If a key already exists, the respective core variable is added to the list
 */
const mapEntitiesToHarmonizationTable = (entities) => {
  return entities.reduce((accumulator, entity) => {
    const key = entity.cohort.id
    const variable = entity.target.variable
    const status = entity.status.id

    if (accumulator[key] === undefined) {
      accumulator[key] = [{variable, status}]
      return accumulator
    }
    accumulator[key] = [...accumulator[key], {variable: variable, status: status}]
    return accumulator
  }, {})
}

export default mapEntitiesToHarmonizationTable
