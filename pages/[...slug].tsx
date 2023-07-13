export default function Test() {
  return (
   <h1>test</h1>
  )
}

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: {
          slug: ['index']
        }
      }
    ],
    fallback: 'blocking',
  }
}

export async function getStaticProps() {
  return {
    props: {
      page: {
        hello: 'test'
      },
    },
  }
}
