const { defineConfig } = require('cypress')

module.exports = defineConfig({
    projectId: 'md9xp5',
    component: {
        devServer: {
            framework: 'next',
            bundler: 'webpack'
        }
    },

    e2e: {
        setupNodeEvents(on, config) {
            // implement node event listeners here
        },
        baseUrl: 'http://localhost:3000'
    }
})
