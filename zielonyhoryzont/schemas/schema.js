// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

// We import object and document schemas
import blockContent from './blockContent'

import localeString from './locale/String'
import localeText from './locale/Text'
import localeBlockContent from './locale/BlockContent'
import flat from './flat'
import portfolio from './portfolio'
import news from './news'
import newsMedia from './newsMedia'
import garage from './garage'
import storage from './storage'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    flat,
    garage,
    storage,
    portfolio,
    news,
    newsMedia,
    // When added to this list, object types can be used as
    // { type: 'typename' } in other document schemas
    blockContent,
    localeText,
    localeBlockContent,
    localeString,
  ]),
})
