const Home = () => import("../pages/Home.vue");
const Category = () => import("../pages/Category.vue");
import Recognize from '../pages/Recognize.vue';
import Cart from '../pages/Cart.vue';
import Personal from '../pages/Personal.vue';
const Search=()=>import('../pages/search/search.vue')
export default [
  {
    path: "/home",
    component: Home,
    meta: {
      isShow: true
    }
  },
  {
    path: "/category",
    component: Category,
    meta: {
      isShow: true
    }
  },
  {
    path: "/recognize",
    component: Recognize,
    meta: {
      isShow: true
    }
  },
  {
    path: "/cart",
    component: Cart,
    meta: {
      isShow: true
    }
  },
  {
    path: "/personal",
    component: Personal,
    meta: {
      isShow: true
    }
  },
  {
    path: "/search",
    component: Search
  },
  {
    path: "/",
    redirect: "/home"
  }
];