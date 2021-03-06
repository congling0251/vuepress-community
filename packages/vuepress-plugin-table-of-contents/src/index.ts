import { Plugin, PluginGeneratedFile } from 'vuepress-types'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require('path')

export interface TableOfContentsPluginOptions {
  componentName: string
}

const TableOfContentsPlugin: Plugin<TableOfContentsPluginOptions> = ({
  componentName = 'TOC',
}) => ({
  name: 'vuepress-plugin-table-of-contents',

  enhanceAppFiles(): PluginGeneratedFile {
    return {
      name: `plugin-table-of-contents.js`,
      content: `export default ({ Vue }) => Vue.component(${JSON.stringify(
        componentName
      )}, () => import(${JSON.stringify(
        path.resolve(__dirname, 'components/TableOfContents')
      )}))`,
    }
  },
})

module.exports = TableOfContentsPlugin
