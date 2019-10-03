const path = require('path')
const withTypescript = require('@zeit/next-typescript')
const withCSS = require('@zeit/next-css')

const cssConfig = {
    cssModules: true
}

const typescriptConfig = {
    webpack(config, options) {
        const rootDir = 'src'

        config.resolve.module

        config.resolve.alias['common'] = path.join(__dirname, rootDir, 'common')
        config.resolve.alias['hocs'] = path.join(__dirname, rootDir, 'hocs')
        config.resolve.alias['hooks'] = path.join(__dirname, rootDir, 'hooks')
        config.resolve.alias['lib'] = path.join(__dirname, rootDir, 'lib')
        config.resolve.alias['contexts'] = path.join(__dirname, rootDir, 'contexts')

        // ScrollMagic And gsap
        config.resolve.alias['animation.gsap'] = path.join(__dirname, 'node_modules/scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap.js')

        config.resolve.alias['styles'] = path.join(__dirname, rootDir, 'styles')

        config.resolve.alias['gotboard'] = path.join(__dirname, rootDir, 'gotboard')

        // polyfill
        const originalEntry = config.entry
        config.entry = async () => {
            const entries = await originalEntry()

            if (entries['main.js'] && !entries['main.js'].includes('./static/js/polyfills.js')) {
                entries['main.js'].unshift('./static/js/polyfills.js')
            }

            return entries
        }
        return config
    }
}

if (typeof require !== 'undefined') {
    require.extensions['.css'] = file => {}
}

module.exports = withTypescript(
    withCSS({
        ...cssConfig,
        ...typescriptConfig
    })
)

