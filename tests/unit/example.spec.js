import { shallowMount } from '@vue/test-utils'
import Index from '@/components/Index.vue'

describe('Index.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Employees ID First Name Last Name Title Year Of Experience Telephone'
    const wrapper = shallowMount(Index, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
