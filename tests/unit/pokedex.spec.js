import { mount, createLocalVue } from '@vue/test-utils'
import VueRouter from 'vue-router'
import mockRouter from './mockRouter'
import flushPromises from 'flush-promises'
import { toHaveRouteName } from 'vue-test-utils-helpers'
import Main from '@/components/Main.vue'

it('should navigate to Pokedex on successful click', async () => {
  const localVue = createLocalVue()
  
  localVue.use(VueRouter)
  const router = mockRouter.mock()
  
  const wrapper = mount(Login, {
    localVue,
    router
  })
  
  wrapper.find('button').trigger('click')
  await flushPromises()
  
  expect(wrapper).toHaveRouteName('Pokedex')
  //based on a unit testing tutorial for routing that has a log in component
  //but since my testing settings are not working, I am not sure if some of the lines 
  //should be included
})