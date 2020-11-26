import Vue from 'vue'
import Vuex from 'vuex'
import Api from '~/util/api'
import linkResolver from '~/util/linkResolver'


export default () => new Vuex.Store({
  getters: {
    content: ({ content }) => content,
    menu: ({ content }) => content.find(doc => doc.type === 'menu'),
    footer: ({ content }) => content.find(doc => doc.type === 'footer'),
    homepage: ({ content }) => content.find(doc => doc.type === 'homepage').data,
    exhibitions: (state, { content }) => content.filter(doc => doc.type === 'exhibition'),
    exhibition: (state, { exhibitions }) => slug => {
      const exhibition = exhibitions.find(exhibition => exhibition.uid === slug)
      return exhibition && exhibition.data
    },
    currentExhibition: (state, { exhibitions }) => {
      const exhibition = exhibitions.find(exhibition => {
        const start = new Date(exhibition.data.start)
        const end = new Date(exhibition.data.end)
        const now = Date.now()
        return start <= now && now <= end
      })

      return exhibition && {
        ...exhibition.data,
        url: linkResolver(exhibition)
      }
    },
    pages: (state, { content }) => content.filter(doc => doc.type === 'page'),
    page: (state, { pages }) => slug => {
      const page = pages.find(page => page.uid === slug)
      return page && page.data
    },
    slices: () => page => page.body
  },
  state: {
    content: {}
  },
  actions: {
    nuxtServerInit({ state }, { req }) {
      return Api({ req }).then(api => api.query('', { pageSize : 100 }))
        .then(response => {
          if (response.total_pages > 1) {
            console.error('There are more results than fit into first response page. This will lead to missing cms data. Do another api request for the next page to fix this.')
          }
          return response.results
        }).then(content => {
          Vue.set(state, 'content', content)
        })
    },
  }
})