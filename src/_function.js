const FUNCTIONS = {
  localStorageExists: (key) => {
    if (localStorage.getItem(key)) {
      return true
    }
    return false
  },

  setToLocalStorage: (key, value) => {
    const toString = JSON.stringify(value)
    localStorage.setItem(key, toString)
  },

  getFromLocalStorage: (key) => {
    const toJson = JSON.parse(localStorage.getItem(key))
    return toJson
  },
}

export default FUNCTIONS
