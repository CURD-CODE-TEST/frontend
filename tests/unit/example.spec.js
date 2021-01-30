import { shallowMount } from '@vue/test-utils'
import Index from '@/components/Index.vue'

describe('Index.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'Index is working'
    const wrapper = shallowMount(Index, {
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
