import Vue from 'vue';
import Router from 'vue-router';
import main from '@/views/main';
import Word from '@/views/word';
import signature from '@/views/signature';
import resumeView from '@/views/resumeView';
import treeShow from '@/views/treeShow';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main
    },
    {
      path: '/word',
      name: 'Word',
      component: Word
    },
    {
      path: '/signature',
      name: 'signature',
      component: signature
    },
    {
      path: '/resumeView',
      name: 'resumeView',
      component: resumeView
    },
    {
      path: '/treeShow',
      name: 'treeShow',
      component: treeShow
    }
  ]
});
