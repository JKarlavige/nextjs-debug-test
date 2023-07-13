export default function Test({ test }: { test: string }) {
  return (
   <h1>{test}</h1>
  )
}

export async function getStaticPaths() {
  /*
   * We get the slug for all pages in our CMS
   * [...slug] is used to support nested pages
   * For example - when slug in CMS is set as 'about/values'
   * 
   * For the homepage, we set the slug as 'index'
   * In next.config.js, we rewrite requests from '/' -> '/index'
   * We also have a redirect setup to prevent users from landing on '/index'
   */

  const pages = [
    'index',
    'about/values'
  ]
  const allPaths = pages.map((slug: string) => ({
    params: { slug: slug.split('/') },
  }))

  return {
    paths: allPaths,
    fallback: 'blocking',
  }
}

interface Types {
  params: {
    slug: string
  }
}

// This can be disregarded
export async function getStaticProps({ params }: Types) {
  const { slug } = params
  const test = slug[0].includes('index')
    ? 'Homepage'
    : slug[0].includes('about')
    ? 'Nested Page'
    : '' 
  return {
    props: {
      test
    },
  }
}
