/* eslint-disable no-undef */
workbox.core.setCacheNameDetails({ prefix: 'proyecto-iaw-vue' })

self.__precacheManifest = [].concat(self.__precacheManifest || [])
workbox.precaching.precacheAndRoute(self.__precacheManifest, {})

workbox.routing.registerRoute(
  new RegExp(/https:\/\/iaw-faustofe-servicio-web\.herokuapp\.com\//),
  new workbox.strategies.NetworkFirst()
)
