'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"icons/icon-512-maskable.png": "02b49b905c4536a2a0c1c9ffe0545c50",
"icons/README.txt": "d3df3991a31f034bfa98afdfa3c622e1",
"icons/Icon-192.png": "4a5ef81d547b4ea2ea072712ab43b4a4",
"icons/Icon-512.png": "dcec63038986d70e499e989318eaf9dc",
"icons/apple-touch-icon.png": "4802f340b6ed602e7e9a100b5ecbb788",
"icons/favicon.ico": "74b2b45cc4895df2e4ae2f5fc12b6882",
"icons/icon-192-maskable.png": "275a03d1fce09ae22bc5693578275d88",
"main.dart.js": "9bb7821968382cc01652256f1b4380f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter_bootstrap.js": "da1ea4ecbf38b3a776abc3114da9f1d5",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"version.json": "2716738b8f8a8feb9c45b200ef8117c3",
"manifest.json": "2bc08fdbab49861edc6d03b98d5a4874",
"assets/FontManifest.json": "e577bf44552ab9eeb68e0455adc9ecc6",
"assets/AssetManifest.json": "fb2e2bc742e45d447e7a389b806aa92e",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "9a7d5d3a566c4273f9cb0ba58c266e29",
"assets/NOTICES": "2d0d7c993d65da3319dfd0670266ca8e",
"assets/assets/grey_003m.png": "00466b22a6cefa252c1f4827123f54ab",
"assets/assets/grey_002m.png": "ff5336ce6ec6930cfeba42e0a24ec269",
"assets/assets/rev_icon.png": "fec84111057f5ee4848f4108cd5ffd77",
"assets/assets/grey_004m.png": "296c0271bf70477a55aca9310c7f04f9",
"assets/assets/grey_004.png": "546d9940f80f6e4187a7eef2d7caa7fa",
"assets/assets/grey_001m.png": "5110438dabecc75f076cb2e27853a38b",
"assets/assets/grey_007m.png": "b4a3bbb236aa0bac385635bc9f784eb8",
"assets/assets/report.png": "5f779256edb6c0e2212ad3dc0d688df3",
"assets/assets/Frame%252074.png": "97a84a69cd48cd77ad84d7f9a167ec60",
"assets/assets/person_off.png": "120f3a88bbce4cae80897be6b310c9bd",
"assets/assets/icon=like,status=off.png": "391c17e480d69f4b7669ec6cfcfbbc5c",
"assets/assets/mypage_icon.png": "325af4f41a0d9fd654e6943c867e9fed",
"assets/assets/grey_007.png": "ac2a0b8568564b4c78123e74390ec470",
"assets/assets/icon=comment.png": "0fcd131a4136aef0f65c07cb83a9d061",
"assets/assets/001m.png": "de06fa83b515be91e961c275007d01cf",
"assets/assets/icon=like,status=off%2520(1).png": "8ccc487fc67317812d6d8b734e6a33b6",
"assets/assets/grey_001.png": "8d1eb6a1bb94f88e722d4ac38adbf5c6",
"assets/assets/grey_005.png": "585e8e6dbe20260cd5ae91c90005b304",
"assets/assets/006.png": "3ba2c913d0a99c7e91974211e1d921a0",
"assets/assets/mypage_avatar.png": "9bcd59061d028c92bdf90120c29c6eb5",
"assets/assets/grey_006.png": "212285cadcd8c8e2bdaacf08ea04c4fc",
"assets/assets/010.webp": "f8051b0ebf91480219f9e3eb09ddfb46",
"assets/assets/product_image_rev.png": "b87be63f24b131422432a618c483539b",
"assets/assets/004m.png": "616a31763777976747893283d4be03ca",
"assets/assets/001.png": "69e66f2dfdd034695069d1aee4d271af",
"assets/assets/007.png": "07bba7c366132cd3834b483bf3310d64",
"assets/assets/grey_002.png": "2e64dbeb10eaf23edc201c8388b7b82d",
"assets/assets/008.png": "4540730e9ade9517512026229bb72d81",
"assets/assets/grey_006m.png": "ce80150d5fb88a27f552191b803a1b10",
"assets/assets/003.png": "7da4b41692539986cc98318ddb5503f1",
"assets/assets/003m.png": "6dbaf264f964bb879a339a251f45b676",
"assets/assets/icon=no_interest.png": "869c99006b9c31477fe995bd0b689b73",
"assets/assets/product_image_order.png": "e87046f646308cee68637f1cb39c34f3",
"assets/assets/002.png": "bfde38f62bef44afea4cf235cdcc1cd4",
"assets/assets/005m.png": "a28f6b8abed98548e2d796bf485c53e9",
"assets/assets/grey_005m.png": "6add9c22702f35c33b32cba0739a68b8",
"assets/assets/payple_test.html": "e0bb8ddf0c870bfd15a0d019196768c9",
"assets/assets/005.png": "01eec7163cd53be130be452253b971bc",
"assets/assets/007m.png": "40be857d4c4a4bec00c87c9cfb9602fb",
"assets/assets/009.png": "538f5c5be70e5ae6e787edfae8b8fd87",
"assets/assets/006m.png": "18ba71a4001d82bb211cf393ea5f65f1",
"assets/assets/Frame%25204.png": "847c68d8c59f05f51998850b8a3a20e9",
"assets/assets/010.png": "212650541ce7638e780efa026c2be754",
"assets/assets/004.png": "2b0685b8fcec0279cbf3d75b969cf496",
"assets/assets/image_icon.png": "321b4757ef5f4f795196b68a402aa821",
"assets/assets/002m.png": "be3dbec2c1476038ee0405ec97d57e8b",
"assets/assets/icon=link.png": "db68e81f6c306d95647ecefb311e8152",
"assets/assets/grey_003.png": "0652a3d368fd05b869984d6cb6ff2aa0",
"assets/AssetManifest.bin.json": "6a06c7f6ea8fbad4cb6ba874cd0eb931",
"assets/fonts/MaterialIcons-Regular.otf": "2a8d3aef4bd5df37d5fab06c59c101a0",
"assets/fonts/NotoSans-Regular.ttf": "f46b08cc90d994b34b647ae24c46d504",
"assets/fonts/ABeeZee-Regular.ttf": "cb714a0b844e87337aef21078fddcecc",
"index.html": "964b345a73d2b1909ac73aeb103d051c",
"/": "964b345a73d2b1909ac73aeb103d051c",
"flutter.js": "76f08d47ff9f5715220992f993002504"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
