'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "dfd77f022395632d2e8543136f55d68b",
"index.html": "2c8186ca643035a7a874b13f9460020d",
"/": "2c8186ca643035a7a874b13f9460020d",
"main.dart.js": "99a5e1085e5b3040d8b9e03cec2ffb81",
"flutter.js": "0816e65a103ba8ba51b174eeeeb2cb67",
"favicon.png": "924e889d55bb4aa69f2ff8bb84912cb5",
"icons/Icon-192.png": "9c30d82bbe149360588fe1399326fcc3",
"icons/Icon-maskable-192.png": "9c30d82bbe149360588fe1399326fcc3",
"icons/Icon-maskable-512.png": "bc03e1955788325a22c83c6f348a4b5a",
"icons/Icon-512.png": "bc03e1955788325a22c83c6f348a4b5a",
"manifest.json": "165e5b25b205715db2c4954e620ffab8",
".git/config": "74bf7037db8ceeffa2786c86384725df",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/92/245e176536e7067405cabde51c94f753b6f118": "b947379a8d5433fa786619e7c3bebf43",
".git/objects/0c/6c2400485f0dae41226078928d01a262b2ee06": "17e662d02c435e47dda845a300db0151",
".git/objects/94/cd657f485112302a057cf757efbe8c9c939976": "04690dad4efe04aa938e293a8c5f2d61",
".git/objects/02/f34ea212cfd7834d8b6fcd10c4249e21d47250": "b569853f05d3d1214276e49a8956dcc7",
".git/objects/02/0f5e56a927a04113ecb38d06238b0c2998ee52": "b74ec5f14b7d6eaa207cddb2b632edf0",
".git/objects/a3/e13ec441f61bd398f0c3d7806d744649409510": "ce23b07e871e75b7abdfe58aa31250c6",
".git/objects/ad/9204683db84bba6c1f0f06a3483e5d92c1ee2b": "4cdbf1e0dd3fd4b5ff1623ccaf5fcec1",
".git/objects/be/45c0c7984b14a1dba87cb8c6570098a8bebe41": "11119bdb59a5cc74273b20f28422aab5",
".git/objects/d1/e09496d394715cbf5b2687fb35892a6482ae04": "6807e2566684bde43aafb8ad50e927e4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e4/08f06e2aab3a5b335ffc14401b2c806c6662a6": "fc7ca1b6086064f036ddf4e2abb10f39",
".git/objects/c8/e4486b54ea1df2fe00423ffb96d424d16c360c": "045dff1744327f5ca78b6b45a1ba638f",
".git/objects/c1/2a02ea90348c81796792c36688f4e1aad5bd33": "73b8d33b680c5e4ad0cc9586aa55a0ff",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/4e/d6ef53eb02c53e1d2529330de8d14e300d2829": "a75599932683745b7b2366833a5df248",
".git/objects/11/9c7fa091abb19f1eddfacf5fd8bd5f666fe5dd": "a4a2167d43489eaed64a1ee7eec10795",
".git/objects/73/72b58401236a72ff1edd2f141d231ff4290810": "42c548acd7850fa34e12164cd878f3af",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/6b/3002ade3f4375e54f95272c109523c86712cd2": "1cd2ffe2b1d6d174cd3bb7e193c26024",
".git/objects/54/e2014e4647f73c2b6aa1ae936fc90d62731721": "c11f18677612a9d72ddac96114e8f27e",
".git/objects/98/bee24f1b45f525d936bebb8dd1e0dccfd93781": "8ec9d1715dcf5fe0074289ec5e449156",
".git/objects/30/134cbc18a882715c7fd88eecccaaeecf9cf0e3": "2c28c301627d262f22b0db95bf01e682",
".git/objects/01/ad5e51f05d8d21b87b1ce1785c178b506040d4": "7f991fc1fd73dc99e2b339659439a26e",
".git/objects/06/8ad589c313d7f583d0a4715a925945f2039d91": "aaa2778a963b25062e90c51fee5c172e",
".git/objects/90/82e360c1115d35078d86a1ccf5eb02b5864f81": "2fe65e6266fa4fddab3b0bc50e5033d5",
".git/objects/d4/0d13b8c811d444e0cf4382ab3f681280e4e74e": "9c3539434d23e55b2cc2b3859b7abfb3",
".git/objects/d4/350cc222b014c5f1e650ea65963da0f38c5035": "107485469fbc0668c3ad19b9537f60a9",
".git/objects/ba/4ab8acd119add8dfbc4e3cce3b501d5de7be26": "1cd46aa8131cea117af7a4c432012b6f",
".git/objects/ba/6d23563f2ca6fc9b2f6d54dd2b833d14302553": "ad4fd09089fbb7ce2c645f83304292a1",
".git/objects/ba/98b05235051c41e87320975f23fd5240cb2256": "245a78e8793e069e59627d4f9d129ed5",
".git/objects/a7/b673dad8a27b2897dab7d50026f779f1fbbbcb": "341bf3f668110763a34e5920134749c1",
".git/objects/a9/f3664ea136bfefd7ab6e8416864d10a97d7c6f": "cfeda8988a7349d5ae8d4c266373db5f",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/5dd968798aab49fc6d62f0b681ffda3bd654db": "71caab40a839881fb8172ea306490481",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ea/244d76c6e25abb23fa73780a4a2bb2e1406798": "b1907d6db4c8c457915ef15b6499affe",
".git/objects/cd/89afdc2365db285c53fd423e68427b9ad5b97d": "987f41a180c65b36a3175645311295dc",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/ff/4e4625b38ac083870a4b6a78f6a9f0e5651dc0": "abe9157fd83b4ce19eddbd171959440c",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/e7/118d060f09b8228ab2e21bd6ddaa730ebb463b": "cc8d6eece9d3abfa81f982f97996a107",
".git/objects/cb/dc29fda88f1f54127eaa70934c564802b8f005": "a4e6e140ea74f4513dfba72be3bf7533",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/2d/b1429f2658c1e3db7a60a0268fe0d304bd647f": "dd4848ffcd028007a7dfba3ce0736e87",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/8d/e4fef6932f994b240850199075bdf04eaf2290": "85f4e195587110f535f30e75ff7074bf",
".git/objects/15/c8c9ead1aeaa5121faeb0a2986157b8b9e37f4": "5a6130db21b4aa8c9080dd68473aa52c",
".git/objects/76/16c71c05cf132b151421cda92756460b084029": "663808ad03fbab15ee55a232ad9a7cfe",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/76/3452a4431f39e35ed4a56fccd77b56bb69c468": "78847dd4ccd8a910fe010fc43b4249d9",
".git/objects/49/64fed1f065750d56ca01d902e11b1f67a4fe47": "4569f5e6adc81d133e478f77ae27f111",
".git/objects/14/25af586ec79289a36be95e9fc225dcdf442cc6": "07718c445dbbde0f64d92fce3d529cd9",
".git/objects/22/b112134460839b2d367981b5d46d1fce5f2604": "437b247c76129769ed895bf8a5b9e373",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c0ea8dd90a0a9684d3f0cc8d830feaae",
".git/logs/refs/heads/master": "c0ea8dd90a0a9684d3f0cc8d830feaae",
".git/logs/refs/remotes/origin/master": "e6dc706dba4ecc3f6bb94d97be9cf0fa",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "1ff9227fd4a2308f27e8f6c7b5e68845",
".git/refs/remotes/origin/master": "1ff9227fd4a2308f27e8f6c7b5e68845",
".git/index": "e4b43bef3fa55caed06fd23f2d1dd84c",
".git/COMMIT_EDITMSG": "a8297d555dd34879e8e48e1cf12acefa",
"assets/AssetManifest.json": "8824a48d91a33285f88c263283d44a45",
"assets/NOTICES": "ee85f080a50552172aed7b6ca29bc411",
"assets/FontManifest.json": "5f2cff58227d349b2c19f2d08d402742",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/icofont_flutter/lib/fonts/icofont.ttf": "22304f677719908079b166a1280db76e",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/peakpx_lamp.jpg": "3fa97e1400777f4d2bd68f436a9b55b2",
"assets/assets/images/intro/desktop_intro_image.jpg": "2cb956f797676d9b3869e35da0c65e08",
"assets/assets/images/intro/tablet_intro_image.jpg": "05108af755dda8123b099c590b796b75",
"assets/assets/images/intro/mobile_intro_image.jpg": "fc0bf5021fd7da0f60b7994c71d6e6a3",
"assets/assets/images/logo/powered-by-unsplash.png": "f4fb5e40d10cd523c676642449d35182",
"assets/assets/images/logo/app_logo.png": "dfaa63ee7613d7db2dc05d502da152b8",
"assets/assets/images/placeholder/image_coming_soon.png": "47264557c9fdc713d7e0877a6a7392b3",
"assets/assets/images/placeholder/camera.png": "6efd962497b2011604cbab688aae197f",
"assets/assets/fonts/Quicksand/Quicksand-VariableFont_wght.ttf": "51b6fe996746b9607630d2cd0f81b913",
"assets/assets/fonts/Comfortaa/Comfortaa-VariableFont_wght.ttf": "2f9d637c5c78f33e7b195032d4aba9ec",
"favicon_old.png": "5dcef449791fa27946b3d35ad8803796",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
