// talk to sanity -> connect sanity and react
// import sanityClient from '@sanity/client'
const sanityClient = require('@sanity/client')


export default sanityClient ({
    projectId: "mzimkeqh",
    dataset: "production"
})