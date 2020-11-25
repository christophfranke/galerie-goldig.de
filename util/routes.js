import Api from './api'
import linkResolver from './linkResolver'


export default () => Api()
  .then(api => api.query('', { pageSize : 100 }))
  .then(content => content.results.filter(doc => ['homepage', 'page', 'exhibition'].includes(doc.type)))
  .then(pages => pages.map(page => linkResolver(page)))