import { StorefrontModule } from '@vue-storefront/core/lib/modules';

const exampleModuleStore = {
    namespaced: true,
    state: {
      key: null
    }
}
  

export const ExampleModule: StorefrontModule = function ({app, store, router, moduleConfig, appConfig}) {
    console.log('Hello World and VSF!'); // Any punch line allowed!
    
    store.registerModule('example-module', exampleModuleStore);
}
