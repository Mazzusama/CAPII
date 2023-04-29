import { createRouter, createWebHistory } from "vue-router";
import Splash from "../views/splash.vue"
import Home from '../views/homeview.vue'
import Login from '../views/loginView.vue'
import Setup from '../views/SetupView.vue'
import Records from '../views/RecordsView.vue'
import store from '../../store/'
import Labors from '../views/laborsForm.vue'
import ageGroups from '../views/ageGroup.vue'
import Disease from '../views/DiseasesForm.vue'
import editLabor from '../components/editLabor.vue'
import editDisease from '../components/editDisease.vue'
import EditRecords from '../components/editRecord.vue'
import axios from "axios";

const routes = [
    {path: '/', name: 'splashScreen', component: Splash},
    {path: '/login', name:'loginScreen', component: Login},
    {path: '/home', name: 'Home', component: Home, beforeEnter: authMiddleware},
    {path: '/setup', name: 'setup', component: Setup, beforeEnter: authMiddleware},
    {path: '/records', name: 'records', component: Records, beforeEnter: authMiddleware},
    {path: '/labors', name: 'labors', component: Labors, beforeEnter: authMiddleware},
    {path: '/editLabor/:id', name:'editLabor', component: editLabor, beforeEnter: authMiddleware},
    {path: '/editDisease/:id', name: 'editDisease', component: editDisease, beforeEnter: authMiddleware},
    {path: '/disease', name: 'disease', component: Disease, beforeEnter: authMiddleware},
    {path: '/agegroups', name: 'AgeGroup', component: ageGroups, beforeEnter: authMiddleware},
    {path: '/editRecords/:id', name: 'EditRecords', component: EditRecords, beforeEnter: authMiddleware}
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

function authMiddleware(to, from, next) {
  const token = localStorage.getItem('access_token');
  
  if (!token) {
    return next('/login');
  } else {
    axios.get('https://ejohncarlsrizz.pythonanywhere.com/labor/', {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
      .then(response => {
        store.commit('user/setUser', response.data);
        next();
      })
      .catch(error => {
        console.log(error);
        next('/login');
      });
  }
}

export default router;