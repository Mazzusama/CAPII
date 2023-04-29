import { createRouter, createWebHistory } from "vue-router";
import Splash from "../views/splash.vue"
import Home from '../views/homeview.vue'
import Login from '../views/loginView.vue'
import Records from '../views/RecordsView.vue'
import store from '../../store/'
import Labors from '../views/laborsForm.vue'
import ageGroups from '../views/ageGroup.vue'
import Disease from '../views/DiseasesForm.vue'
import editLabor from '../components/editLabor.vue'
import editDisease from '../components/editDisease.vue'
import EditRecords from '../components/editRecord.vue'
import Sms from '../views/sms.vue'
import ViewDiseases from '../components/viewDiseases.vue'
import ViewLabors from '../components/viewLabors.vue'
import ViewProfile from '../views/profileView.vue'
import axios from "axios";

const routes = [
    {path: '/', name: 'splashScreen', component: Splash},
    {path: '/login', name:'loginScreen', component: Login},
    {path: '/home', name: 'Home', component: Home, beforeEnter: authMiddleware},
    {path: '/records', name: 'records', component: Records, beforeEnter: authMiddleware},
    {path: '/labors', name: 'labors', component: Labors, beforeEnter: authMiddleware},
    {path: '/editLabor/:id', name:'editLabor', component: editLabor, beforeEnter: authMiddleware},
    {path: '/editDisease/:id', name: 'editDisease', component: editDisease, beforeEnter: authMiddleware},
    {path: '/disease', name: 'disease', component: Disease, beforeEnter: authMiddleware},
    {path: '/viewDisease/:id', name: 'ViewDisease', component: ViewDiseases, beforeEnter: authMiddleware},
    {path: '/viewLabors/:id', name: 'ViewLabors', component: ViewLabors, beforeEnter: authMiddleware},
    {path: '/agegroups', name: 'AgeGroup', component: ageGroups, beforeEnter: authMiddleware},
    {path: '/editRecords/:id', name: 'EditRecords', component: EditRecords, beforeEnter: authMiddleware},
    {path: '/viewProfile/:id', name: 'ViewProfile', component: ViewProfile, beforeEnter: authMiddleware},
    {path: '/sms', name: 'Sms', component: Sms, beforeEnter: authMiddleware}
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