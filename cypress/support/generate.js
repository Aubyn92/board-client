import { build, fake } from '@jackfranklin/test-data-bot'

const userBuilder = build('User', {
  fields: {
    email: fake((f) => f.internet.email()),
    password: fake((f) => f.internet.password())
  }
})

const postBuilder = build('Post', {
  fields: {
    title: fake((f) => f.internet.domainName()),
    description: fake((f) => f.lorem.words())
  }
})

export {
  userBuilder,
  postBuilder
}
