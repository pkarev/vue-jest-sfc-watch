import {mount} from "@vue/test-utils";
import Component from "@/components/HelloWorld.vue";

const msg = `123456789`;
const reverseMsg = `987654321`;

describe('Hello -> World', () => {
    const create = (propsData) => (mount(Component, {
        propsData: {
            msg,
            ...propsData
        }
    }));

    it('render message', () => {
        const wrapper = create();
        expect(wrapper.text()).toMatch(msg);
    });

    it('render reverse message', () => {
        const wrapper = create();
        expect(wrapper.text()).toMatch(reverseMsg);
    });
});
