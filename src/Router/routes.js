import Home from '../pages/Home.vue';
import Category from "../pages/Category.vue";
import Recognize from '../pages/Recognize.vue';
import Cart from '../pages/Cart.vue';
import Personal from '../pages/Personal.vue';
export default [
  {
    path: "/home",
    component: Home
  },
  {
    path: "/category",
    component: Category
  },
  {
    path: "/recognize",
    component: Recognize
  },
  {
    path: "/cart",
    component: Cart
  },
  {
    path: "/personal",
    component: Personal
  },
  {
    path: "/",
    redirect: "/home"
  }
];