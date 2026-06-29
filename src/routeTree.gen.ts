/* eslint-disable */
// @ts-nocheck
import { Route as rootRouteImport } from './routes/__root'
import { Route as IndexImport } from './routes/index'
import { Route as ContatoImport } from './routes/contato'

const rootRoute = rootRouteImport

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const ContatoRoute = ContatoImport.update({
  path: '/contato',
  getParentRoute: () => rootRoute,
} as any)

export const routeTree = rootRoute._addFileChildren({
  '/': IndexRoute,
  '/contato': ContatoRoute,
})