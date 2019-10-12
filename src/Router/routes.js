//const Home = () => import("../pages/Home.vue");
import Home from "../pages/Home.vue";
//const Category = () => import("../pages/Category.vue");
import Category from "../pages/Category.vue";
import Recognize from '../pages/Recognize.vue';
import Cart from '../pages/Cart.vue';
import Personal from '../pages/Personal.vue';
const Search=()=>import('../pages/search/search.vue')
import PhoneLogin from '../components/PhoneLogin.vue';
import EmailLogin from '../components/EmailLogin';
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
    children: [
      {
        path: "/personal/phonelogin",
        component: PhoneLogin
      },
      {
        path: "emaillogin",
        component: EmailLogin
      }
    ]
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