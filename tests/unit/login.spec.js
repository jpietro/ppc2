import { shallowMount } from '@vue/test-utils';
import Login from '@/components/Login.vue';

describe('Login', () => {
  it('is a valid component ', () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.exists()).toBe(true);
  });

  it("should has h1 equals to 'Login'", () => {
    const wrapper = shallowMount(Login);
    expect(wrapper.find('h1').text()).toMatch('Login');
  });

  describe('When password does has 6 caracters', () => {
    const wrapper = shallowMount(Login, {
      computed: { isPasswordFilled: () => true },
    });
    it('should have Password message', () => {
        expect(wrapper.find('.login_h1_password').attributes('style')).not.toBe('display: none;');
    });
  });

  describe('When password has 6 caracters or more', () => {
    const wrapper = shallowMount(Login, {
      computed: { isPasswordFilled: () => false },
    });
    it('should have Password message', () => {
      expect(wrapper.find('.login_h1_password').attributes('style')).toBe('display: none;');
    });
  });

  describe('When email is invalid', () => {
    const wrapper = shallowMount(Login, {
      computed: { isEmailFilled: () => true },
    });
    it('should have Email message', () => {
        expect(wrapper.find('.login_h1_email').attributes('style')).not.toBe('display: none;');
    });
  });

  describe('When email is valid', () => {
    const wrapper = shallowMount(Login, {
      computed: { isEmailFilled: () => false },
    });
    it('should does have Email message', () => {
      expect(wrapper.find('.login_h1_email').attributes('style')).toBe('display: none;');
    });
  });

  describe('isLoginCompleted', () => {
    describe('When has email and password', () => {
      describe('And email and password are valids', () => {
        it('should be true', () => {
          const wrapper = shallowMount(Login, {
            data: () => ({ email: 'email_1@gmail.com', password: 'password1' }),
          });
          expect(wrapper.vm.isLoginCompleted).toBe(true);
        });
      });
    });
});

describe('isLoginHasAccess', () => {
    describe('When has email and password', () => {
      describe('And email and password has access', () => {
        it('should be true', () => {
          const wrapper = shallowMount(Login);
          expect(wrapper.vm.hasAccess('email_1@gmail.com','password1')).toBe(true);
        });
      });
      describe('And email and password does has access', () => {
        it('should be true', () => {
          const wrapper = shallowMount(Login);
          expect(wrapper.vm.hasAccess('email_101@gmail.com','password101')).toBe(false);
        });
      });
    });
});

 
});