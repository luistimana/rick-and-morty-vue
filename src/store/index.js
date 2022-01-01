import { createStore } from 'vuex'

export default createStore({
  state: {
    characters: [],
    charactersFilter: []
  },
  mutations: {
    setCharacters(state, playload) {
      state.characters = playload
    },
    charactersFilter(state, playload) {
      state.charactersFilter = playload
    }
  },
  actions: {
    async getCharacters({commit}) {
      try {
        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        console.log(data)
      } catch(error) {
        console.error(error)
      }
    }
  },
  modules: {
  }
})
