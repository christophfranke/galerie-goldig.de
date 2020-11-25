export default doc => ({
  page: `/${doc.uid}`,
  exhibition: `/exhibition/${doc.uid}`,
  homepage: '/',
})[doc.type]
