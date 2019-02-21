// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

/* eslint-disable no-new */
export default function () {
  return new Promise((resolve, reject) => {
    const app = new Vue({
      // el: '#app',
      router,
      template: '<App/>',
      components: { App },
    });

    // router.push('/hello');
    // // router.push('/about');
    // router.onReady(() => {
    //   const matchedComponents = router.getMatchedComponents();
    //   if (!matchedComponents.length) {
    //     reject({ code: 404 });
    //   }
    //   resolve(app);
    //   if (app === undefined) {
    //     reject({ code: 404 });
    //   }
    // });
    resolve(app);
    if (app === undefined) {
      reject({ code: 404 });
    }
  });
}
