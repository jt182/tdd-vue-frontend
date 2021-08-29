import { shallowMount } from '@vue/test-utils';
import Header from '@/components/Header.vue';

describe('Tests for header Component', () => {

    it('test title', () => {
        const wrapper = shallowMount(Header, {
            props: {
                title: 'Anything'
            }
        });

        expect(wrapper.text()).toContain('Anything');
    })
})
