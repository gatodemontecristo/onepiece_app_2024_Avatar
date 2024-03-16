import { AppRouter } from './router/AppRouter'
import $ from 'jquery'

export const Onepiece = () => {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.navbar__container').addClass('nav-sticky');
    } else {
        $('.navbar__container').removeClass('nav-sticky');
    }
});
  return (
    <AppRouter></AppRouter>
  )
}
