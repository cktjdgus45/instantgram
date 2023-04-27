import imageUrlBuilder from '@sanity/image-url'

const builder = imageUrlBuilder({
    projectId: 'mw0iosgf',
    dataset: 'production',
})


export const urlFor = (source: string) => builder.image(source);

