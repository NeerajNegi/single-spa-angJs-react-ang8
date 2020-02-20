import 'zone.js'
import singleSpaAngular from 'single-spa-angular'
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import MainModule from './main.module.ts';
import { Router } from '@angular/router'

const domElementGetter = () => {
  let el = document.getElementById('angular8')
  if (!el) {
    el = document.createElement('div')
    el.id = 'angular8'
    document.body.appendChild(el)
  }

  return el
}

const ngLifecycles = singleSpaAngular({
  domElementGetter,
  MainModule,
  angularPlatform: platformBrowserDynamic(),
  template: `<Angular8 />`,
  Router,
})

export const bootstrap = props => ngLifecycles.bootstrap(props)

export const mount = props => ngLifecycles.mount(props)

export const unmount = props => ngLifecycles.unmount(props)
