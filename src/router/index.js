import { createRouter, createWebHistory } from 'vue-router'
import Splash from '../views/splash.vue'
import Home from '../views/homeview.vue'
import Login from '../views/loginView.vue'
import Records from '../views/RecordsView.vue'
import store from '../../store/'
import Labors from '../views/LaborsForm.vue'
import ageGroups from '../views/ageGroup.vue'
import Disease from '../views/DiseasesForm.vue'
import editLabor from '../components/editLabor.vue'
import editDisease from '../components/editDisease.vue'
import EditRecords from '../components/editRecord.vue'
import Sms from '../views/sms.vue'
import ViewDiseases from '../components/viewDiseases.vue'
import ViewLabors from '../components/viewLabors.vue'
import ViewProfile from '../views/profileView.vue'
//################# SMS IMPORTS #########################
import laborSMS from '../components/sms/labor.vue'
import diseaseSMS from '../components/sms/disease.vue'
import purokSMS from '../components/sms/purok.vue'
import personSMS from '../components/sms/person.vue'
import smsHistory from '../components/sms/history.vue'
//################# /SMS IMPORTS ########################
import axios from 'axios'

const routes = [
    { path: '/', name: 'splashScreen', component: Splash },
    { path: '/login', name: 'loginScreen', component: Login },
    {
        path: '/home',
        name: 'Home',
        component: Home,
        beforeEnter: authMiddleware,
    },
    {
        path: '/records',
        name: 'records',
        component: Records,
        beforeEnter: authMiddleware,
    },
    {
        path: '/labors',
        name: 'labors',
        component: Labors,
        beforeEnter: authMiddleware,
    },
    {
        path: '/editLabor/:id',
        name: 'editLabor',
        component: editLabor,
        beforeEnter: authMiddleware,
    },
    {
        path: '/editDisease/:id',
        name: 'editDisease',
        component: editDisease,
        beforeEnter: authMiddleware,
    },
    {
        path: '/disease',
        name: 'disease',
        component: Disease,
        beforeEnter: authMiddleware,
    },
    {
        path: '/viewDisease/:id',
        name: 'ViewDisease',
        component: ViewDiseases,
        beforeEnter: authMiddleware,
    },
    {
        path: '/viewLabors/:id',
        name: 'ViewLabors',
        component: ViewLabors,
        beforeEnter: authMiddleware,
    },
    {
        path: '/agegroups',
        name: 'AgeGroup',
        component: ageGroups,
        beforeEnter: authMiddleware,
    },
    {
        path: '/editRecords/:id',
        name: 'EditRecords',
        component: EditRecords,
        beforeEnter: authMiddleware,
    },
    {
        path: '/viewProfile/:id',
        name: 'ViewProfile',
        component: ViewProfile,
        beforeEnter: authMiddleware,
    },
    { path: '/sms', name: 'Sms', component: Sms, beforeEnter: authMiddleware },
    //################# SMS IMPORTS #########################
    {
        path: '/sendPurok',
        name: 'purokSMS',
        component: purokSMS,
        beforeEnter: authMiddleware,
    },
    {
        path: '/sendLabor',
        name: 'laborSMS',
        component: laborSMS,
        beforeEnter: authMiddleware,
    },
    {
        path: '/sendDisease',
        name: 'diseaseSMS',
        component: diseaseSMS,
        beforeEnter: authMiddleware,
    },
    {
        path: '/sendUser',
        name: 'personSMS',
        component: personSMS,
        beforeEnter: authMiddleware,
    },
    {
        path: '/smsHistory',
        name: 'historySMS',
        component: smsHistory,
        beforeEnter: authMiddleware,
    },
    //################# /SMS IMPORTS ########################
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

function authMiddleware(to, from, next) {
    const token = localStorage.getItem('access_token')

    if (!token) {
        return next('/login')
    } else {
        axios
            .get(`https://ejohncarlsrizz.pythonanywhere.com/auth/login/`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
            .then((response) => {
                store.commit('user/setUser', response.data.data)
                next()
            })
            .catch((error) => {
                console.log(error)
                next('/login')
            })
    }
}

export default router
