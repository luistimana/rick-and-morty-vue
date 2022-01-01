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
    setCharactersFilter(state, playload) {
      state.charactersFilter = playload
    }
  },
  actions: {
    async getCharacters({commit}) {

      try {

        const response = await fetch('https://rickandmortyapi.com/api/character')
        const data = await response.json()
        
        commit('setCharacters', data.results)
        commit('setCharactersFilter', data.results)

      } catch(error) {

        console.error(error)

      }
    },

    filterByStatus({ commit, state}, status){
      const results = state.characters.filter((character) => {
        return character.status.includes(status)
      })
      commit('setCharactersFilter', results)
    },

    filterByName({commit, state}, name) {
      const formatName = name.toLowerCase()
      const filter = state.characters.filter((character) => {
        const characterName = character.name.toLowerCase()
        if(characterName.includes(formatName)) {
          return character
        }
      })
      commit('setCharactersFilter', filter)
    }
  },
  modules: {
  }
})
