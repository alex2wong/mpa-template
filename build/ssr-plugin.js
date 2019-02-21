const fs = require('fs')
const path = require('path');

const Vue = require('vue');
const serverBundle = require('../docs/vue-ssr-server-bundle.json')
const resolve = file => path.resolve(__dirname, file)
const templatePath = resolve('../index.template.html')
const template = fs.readFileSync(templatePath, 'utf-8')

// console.warn('import createApp factory function.. call it!');
// const app = new Vue({
//   // router,
//   // el: '#app',
//   template: '<div>Skeleton</div>',
// });

const context = {
  title: 'We are Loading ~~',
}

const { createBundleRenderer } = require('vue-server-renderer')

// const renderer = require('vue-server-renderer').createRenderer();
// using vue instance from skeleton-entry.js included in serverBundle.
const renderer = createBundleRenderer(serverBundle, {
  template  // seems ssr does NOT accept template with <%==...token.
});

// how to get options from webpack config?
class InjectSSRPlugin {
  apply(compiler) {
    if (compiler.hooks) {
      compiler.hooks.compilation.tap("InjectSSRPlugin", compilation => {
        console.log("The compiler is starting a new compilation...");

        // Staic Plugin interface |compilation |HOOK NAME | register listener
        compilation.hooks.htmlWebpackPluginBeforeHtmlProcessing.tapAsync(
          "InjectSSRPlugin", // <-- Set a meaningful name here for stacktraces
          (data, cb) => {
            // Manipulate the content
            console.warn(
              `data.html BeforeHtmlProcessing of HtmlWebpackPlugin:`
            );
            renderer.renderToString(context, (err, ssrContent) => {
              if (err) {
                console.error('error when renderToString !!!' + err);
                cb(null, data);
              }
              data.html = ((origin, str, pos) => {
                  return [
                      origin.slice(0, pos),
                      str,
                      origin.slice(pos)
                  ].join('');
              })(data.html, ssrContent, data.html.lastIndexOf('</div>'))
              // Tell webpack to move on
              cb(null, data);
            })
          }
        );
      });
    } else { // compatible with webpack < 4.x
      compiler.plugin('compilation', compilation => {
        console.log("The compiler is starting a new compilation...");

        // Staic Plugin interface |compilation |HOOK NAME | register listener
        compilation.plugin('html-webpack-plugin-before-html-processing',
          (data, cb) => {
            // Manipulate the content
            console.warn(
              `data.html BeforeHtmlProcessing of HtmlWebpackPlugin:`
            );
            renderer.renderToString(context, (err, ssrContent) => {
              if (err) {
                console.error('error when renderToString !!!' + err);
                cb(null, data);
              }
              data.html = ((origin, str, pos) => {
                  return [
                      origin.slice(0, pos),
                      str,
                      origin.slice(pos)
                  ].join('');
              })(data.html, ssrContent, data.html.lastIndexOf('</div>'))
              // Tell webpack to move on
              cb(null, data);
            })
          }
        );
      });
    }

  }
}

module.exports = InjectSSRPlugin;
