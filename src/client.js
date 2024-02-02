import { createClient } from '@sanity/client'

export default createClient({
    projectId: "39eecjq4",
    dataset: "production",
    apiVersion: '2021-08-31',
    useCdn: true,
})