import { shallowMount } from '@vue/test-utils';
import UserForm from '@/components/UserForm.vue';

describe('UserForm', () => {
  it('is a valid component ', () => {
    const wrapper = shallowMount(UserForm);
    expect(wrapper.exists()).toBe(true);
  });

  it("should has h1 equals to 'UserForm'", () => {
    const wrapper = shallowMount(UserForm);
    expect(wrapper.find('h1').text()).toMatch('User Form');
  });

  describe('When email have format invalid', () => {
    const wrapper = shallowMount(UserForm, {
      computed: { isEmailFilled: () => true },
    });
    it('should have Email format invalid message', () => {
        expect(wrapper.find('.user_h1_email').attributes('style')).not.toBe('display: none;');
    });
  });

  describe('When email format is valid', () => {
    const wrapper = shallowMount(UserForm, {
      computed: { isEmailFilled: () => false },
    });
    it('should does have Email format invalid message', () => {
      expect(wrapper.find('.user_h1_email').attributes('style')).toBe('display: none;');
    });
  });

  describe('When email its not the same used in login', () => {
    const wrapper = shallowMount(UserForm, {
      computed: { isEmailEquals: () => true },
    });
    it('should have message email its not the same', () => {
      expect(wrapper.find('.user_h1_email_2').attributes('style')).not.toBe('display: none;');
    });
  });

  describe('When email its completed valid', () => {
    const wrapper = shallowMount(UserForm, {
      computed: { isEmailEquals: () => false },
    });
    it('should does have message email its not the same', () => {
      expect(wrapper.find('.user_h1_email_2').attributes('style')).toBe('display: none;');
    });
  });

  describe('When age its not between 18 and 99', () => {
    const wrapper = shallowMount(UserForm, {
      computed: { isAgeOk: () => true },
    });
    it('should have message the age its wrong', () => {
      expect(wrapper.find('.user_h1_idade').attributes('style')).not.toBe('display: none;');
    });
  });

  describe('When age its not a number', () => {
    const wrapper = shallowMount(UserForm, {
      computed: { isAgeOk: () => true },
    });
    it('should have message the age its wrong', () => {
      expect(wrapper.find('.user_h1_idade').attributes('style')).not.toBe('display: none;');
    });
  });

  describe('When SO its not choosen', () => {
    const wrapper = shallowMount(UserForm, {
      computed: { isSoChosen: () => true },
    });
    it('should have message SO not choosen', () => {
      expect(wrapper.find('.user_h1_so').attributes('style')).not.toBe('display: none;');
    });
  });

  describe('When the 2 fields is valid', () => {
    const wrapper = shallowMount(UserForm, {
      computed: { isFilled: () => true },
    });
    it('should have message parabéns', () => {
      expect(wrapper.find('.user_h1_filled').attributes('style')).not.toBe('display: none;');
    });
  });

});