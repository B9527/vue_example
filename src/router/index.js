import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import HelloWorld from '@/views/pages/page1'
import Page2 from '@/views/pages/page2'
import Page3 from '@/views/pages/page3'
import Page4 from '@/views/pages/page4'
import Page5 from '@/views/pages/page5'
import Page6 from '@/views/pages/page6'
import Page7 from '@/views/pages/page7'
import Form from '@/views/pages/form'
import Page8 from '@/views/pages/page8'
import Page9 from '@/views/pages/page9'
import httpPage from '@/views/pages/http'
import Chart from '@/views/pages/chart'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/page2',
      name:'Page2',
      component:Page2
    },
    {
      path: '/page3',
      name: 'Page3',
      component: Page3
    },
    {
      path: "/page4",
      name: "Page4",
      component: Page4
    },
    {
      path: '/page5',
      name: 'Page5',
      component: Page5
    },
    {
      path: '/page6',
      name: 'Page6',
      component: Page6
    },
    {
      path: '/page7',
      name: 'Page7',
      component: Page7
    },
    {
      path:"/form",
      name:"form",
      component: Form
    },
    {
      path: '/page8',
      name: 'page8',
      component: Page8
    },
    {
      path: '/page9',
      name: 'page9',
      component: Page9
    },
    {
      path: '/http',
      name: 'http',
      component: httpPage
    },
    {
      path:'/chart',
      name:'chart',
      component:Chart
    }
  ]
})
