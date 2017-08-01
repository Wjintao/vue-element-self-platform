import Vue from 'vue'
import VueRouter from 'vue-router'
import wagesView from '@/page/wagesView/index.vue'
import wagesOld from '@/page/wagesView/wagesOld.vue'
import wagesNew from '@/page/wagesView/wagesNew.vue'
import annualLeaveView from '@/page/annualLeaveView/index.vue'
import socialSecurity from '@/page/socialSecurity/socialSecurity.vue'
import notFound from '@/page/404'

Vue.use(VueRouter)
export default [
  {
    path:"/404", component:notFound
  },
  {
    path: '/annualLeaveView',component:annualLeaveView,
    children:[
      { path: '', component: annualLeaveView  },
      { path: 'annualLeaveView', component: annualLeaveView  }
    ]
  },
  {
    path:'/wagesView',component:wagesView,
    children:[
      { path: '', component: wagesNew  },
      { path: 'wagesOld', component: wagesOld  },
      { path: 'wagesNew', component: wagesNew  }
    ]
  },
  {
    path:'/socialSecurity',component:socialSecurity,
    children:[
      { path: '', component: socialSecurity  },
      { path: 'socialSecurity', component: socialSecurity  }
    ]
  }
]
