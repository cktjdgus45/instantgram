import { createClient } from '@sanity/client'
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
    projectId: 'mw0iosgf',
    dataset: 'production',
    useCdn: false,
    apiVersion: '2022-04-20',
    token: 'skIts0irPRmDavyc4TQMCdLXQ0BfDp0Uq7TUlbaKOzsiuGv1aTJ1I1MWv5kjZmpOW133gVmre4nqNOZmBI62H1nffZsExS5FaxbW1sj1yHKKJHupOlSUcaOhejgElN35WjNjhz0DoZh8BAWqxenaifcpWHduI8bLJbzvPC3Uvh2kgOGqSZqD',
})
const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
    return builder.image(source).width(800).url();
}


