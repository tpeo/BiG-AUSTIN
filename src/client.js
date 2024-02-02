import { createClient } from '@sanity/client'

export default createClient({
    projectId: "39eecjq4",
    dataset: "production",
    useCdn: true,
})