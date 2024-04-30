import { shallowMount } from "@vue/test-utils";
import { describe, expect, it } from "vitest";
import PizzaCard from "@/components/PizzaCard.vue";

describe('PizzaCard', () => {
  it('should render the pizza details', () => {
    const pizza = {
      id: "1",
      title: 'Test Pizza',
      description: 'Test Pizza Description',
      image: 'test-pizza.jpg',
      price: "10",
      quantity: 10,
    };

    const wrapper = shallowMount(PizzaCard, {
      props: {
        pizza,
      },
    });

    expect(wrapper.find('.pizza--details-wrapper')).toBeTruthy();

    expect(
      wrapper.find('.pizza--inventory-stock').text()
    ).toBe(`Stock: ${pizza.quantity}`);

    expect(wrapper.find('.pizza--inventory-price').text()).toBe(`$ ${pizza.price}`);

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render the pizza image and alt text', () => {
    const pizza = {
      id: "1",
      title: 'Test Pizza',
      description: 'Test Pizza Description',
      image: 'test-pizza.jpg',
      price: "10",
      quantity: 10,
    };

    const wrapper = shallowMount(PizzaCard, {
      props: {
        pizza,
      },
    });

    const img = wrapper.find('img');

    expect(img.attributes().alt).toEqual(pizza.title);
    expect(img.attributes().src).toEqual(pizza.image);
  });

  it('should emit add-to-cart event when add to cart button is clicked', () => {
    const pizza = {
      id: "1",
      title: 'Test Pizza',
      description: 'Test Pizza Description',
      image: 'test-pizza.jpg',
      price: "10",
      quantity: 10,
    };

    const wrapper = shallowMount(PizzaCard, {
      props: {
        pizza,
      },
    });

    const button = wrapper.find('button');
    button.trigger('click');

    expect(wrapper.emitted()['add-to-cart']).toBeTruthy();
    expect(wrapper.emitted()['add-to-cart'][0]).toEqual([
      { id: pizza.id, quantity: 1 }
    ]);
  })
});
