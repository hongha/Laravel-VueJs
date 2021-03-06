
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));

// Vue.component('my-component', require('./components/MyComponent.vue'));

// Vue.component('conditional-rendering-component', require('./components/ConditionalRendering.vue'));

// Vue.component('list-rendering-component', require('./components/ListRendering.vue'));

// Vue.component('user-dashboard', require('./components/UserDashboard.vue'));

// Vue.component('life-cycle', require('./components/LifeCycle.vue'));

// Vue.component('binding-html', require('./components/BindingHTML.vue'));

// Vue.component('form-binding', require('./components/FormBinding.vue'));

// Vue.component('event-handling', require('./components/EventHandling.vue'));

// Vue.config.keyCodes.sayHello = 13

Vue.component('parent', require('./components/Parent.vue'));

Vue.component('api-calling', require('./components/ApiCalling.vue'));

Vue.component('training', require('./components/Training.vue'));

Vue.component('home', require('./components/Home.vue'));

Vue.component('computed-property', require('./components/ComputedProperty.vue'));

Vue.component('calculator', require('./components/Calculator.vue'));

Vue.component('pagination', require('laravel-vue-pagination'));

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

const app = new Vue({
    el: '#app'
});
