'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "c2ed5e75f1bbb436b9a0b9271044f79c",
".git/config": "26cc6f995fe099fa32fdd7c6a170f5d1",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "d1f759439a6a1e9eef0e42f0541bb14c",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a7d05de126bf745043b188bdc9a53170",
".git/logs/refs/heads/master": "a7d05de126bf745043b188bdc9a53170",
".git/logs/refs/remotes/origin/master": "d68614cc0043bea91c48fdaffe4847d9",
".git/objects/03/67fe463e7de519655e260c7333c883fac0661b": "74884e2279115311a8a9e6e8af5278c5",
".git/objects/03/b77bff53264038d7fbd033867028678d807a2a": "d20499471b690c047438f44f99e0dc1c",
".git/objects/06/3887cf9ea415a688dde89b58ceb618f86bb939": "a8261fc195ceec3b897d19d093a52a8c",
".git/objects/06/c4baee4aba1cee14f916d4915e99d2339e8a79": "2221142d97677a5f4e31f9ec4cecd186",
".git/objects/07/74c17c0fa7a7e87e24a6935830998d92b52c75": "cd62ee54b7ceea7b2a7804e69b1d9134",
".git/objects/0c/3a1b3b6184889875d408580b43a05914b7c66e": "c6e5f06ad866f9381d0f5fab8fc745d7",
".git/objects/10/ad0d2f572e6f0fe7f6bdb0c575dbe84f3e607a": "4b0c71288721bea8a43bb4b77793948d",
".git/objects/13/af345705f3a42d58973d780ed31862143c7cf5": "2747181ede84b437ef77811dd4b86cc9",
".git/objects/16/5ce0ddf03a820a38f48cba9aa0c9df9b6e6b79": "71df17c95c3124eada62b59e7dabda78",
".git/objects/17/61f89b598c16136b1eb3fd28f9bde86753197a": "646a26cbe95c851792948fbfe97e564f",
".git/objects/1b/613e229c17a252e316515a281ee76e386bd2db": "92f897fbcd3db06938988c8b216a0b34",
".git/objects/1b/e75e28bfc4ce98f21c202efb15011f930c477d": "dbb666a877f40a3a0cc0dc02681a0f28",
".git/objects/1c/8047a6e932affa24713e42566664d9eb2360bd": "e4526230f157924350243e5434440288",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/22/981b55917430beb9e5720c62b54cc7f7e03aad": "ce2ead1cef527a66acf83a889dc68694",
".git/objects/22/e94207d114ae2a4a7ec70518a8a28723d4bf26": "59dc43ba65708705475c7ca2b8690941",
".git/objects/23/28288130aee8a5d4b65b81b04799a8d17e37bf": "fa5cd8071682758271c996708b54c6d2",
".git/objects/23/4b3ac2f4d280bd09705299bd148c13df458510": "741a639ec23c7dfe76a2366ec4f08565",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/objects/2b/b1e618b94f9fbe15c67212b8cc45a5150a0af8": "736f322c0a62f90caa06c5d1da51e813",
".git/objects/2c/8b39d3282671b9c2f429d09bdf8187b71d8294": "a51eb98e539c099d1dea910010070471",
".git/objects/2f/d59cc708423ddfe3081b543685449ee3fdbf03": "96544c4cd2d10143a91d484467ca3719",
".git/objects/32/6662b9fc05513502655547c39af92b29fb2ae0": "5ffa3a9b2c7e17970fe916fbbe3cd003",
".git/objects/33/01e7559761f09bcedac5d18b3ee50ccd398f4b": "d6f906a030df7c77bee4ce141b3ea83c",
".git/objects/38/281bd14b29655f446943cc7cab0e6af2157a88": "043b14d745ddc1f1f119ea7f730ba868",
".git/objects/3a/f668666c96e2483cfa7a13789ff6623131595a": "07e840c8f36399b33c3bcdef539aa5c8",
".git/objects/3f/5753111eef19c3dff15a29dde53410bda49646": "7ef788b2ddc985ecf8762f2ca5b322e8",
".git/objects/3f/bae720e58a0dd21281e44f033acf4b1c121417": "9d694a6b9ef6006f19ed742b489d56a3",
".git/objects/45/8363ede63fc0ef0f62ce18d5404e2c097a50cf": "fa73dd89cc23c61ac61f285a0f969881",
".git/objects/46/00ed09019ffa03c6f052ec16a38e792a561443": "033889595518d83bdd4d8240b5376aca",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4a/39079e580dc9be820cba2fae41238c49eaa798": "ada1a19fea32fbb6719120809b9eae60",
".git/objects/4a/3923668e99b1d964e7498502397054983852d4": "b6648393e847b8ee98a27f70aa377747",
".git/objects/4a/d8bafbe40348a1f1c3c22ea1686465a5bb64c9": "7cf9e52db8ca9e39ccd3b9e9da1c2a52",
".git/objects/4b/9f1e9598133b8d8eb01831e6547b22e5166de1": "b211cbff7e9a64fff9c7bd985462f38a",
".git/objects/4d/3569187172b2fec798cea346b2e5723f328ebe": "359094ee867d34e6e643d5a25aad19d7",
".git/objects/4d/6e3dd98d741ff68a32f3bd9eff9a0b09981f0a": "920111dfd17a654dcc0642a70b91c25b",
".git/objects/4e/4cfb6e57faf3f29bbb07bfc00cc4e862df9206": "755f0affcd2bea04b5199583bff94f3c",
".git/objects/51/b97f37c7e15bfb6c013fccdf03cdf010dea85e": "9dc88fc864b18c61f5642a68a7387d6f",
".git/objects/56/bb55a1e3558517af932c3b24ebbbf330946e0c": "c33fdf9cfdf41120a4cf3ffaccf85558",
".git/objects/58/0caca2bc85508f7d76c607c6a6d27ef3f681fa": "b8822e2a38a033a883f569d54af2ca6a",
".git/objects/5a/7b05e1be311772247124911182fda78fde2cec": "d38bfbb93663df272dc4920186bd1040",
".git/objects/69/cf2f0858289c05c845c829e6b1394eb2a13ab6": "68fc6d122bb2bb25d2c2cac3df2a3116",
".git/objects/6f/9cad4c116bc8d72e2497226abb5c05ee64982c": "0d104480d68c1652a53721377a02a882",
".git/objects/70/9cdb2e7f423c114fe57c540fa7d45b66fd9a05": "c96a7a0e62a3967f47f775bda5969ecd",
".git/objects/71/7117947090611c3967f8681ab1ac0f79bca7fc": "ad4e74c0da46020e04043b5cf7f91098",
".git/objects/71/7809363ed19bdd7e1d78f6e421e40a96bc29e3": "9414a3044cb191cc3f57340f57c3dc93",
".git/objects/72/2a5c708bb7a95c77b5b1a53f3f57decab11769": "b662802afe9da48784acc2a72a577e3c",
".git/objects/72/63496b90b2d1c3826f7852373b9d529f81af5c": "9937be90ca729e0b72d62f066b05c01d",
".git/objects/75/383f801a8f6a478e0aec58d62a8d7303cd73c7": "6689b7f894d5d58a5b879bcb9e4f4388",
".git/objects/75/85ce245a4e063093d2bb4720f5b2ec89e6d324": "901d95a8b024e2c746c2ca6f19066ecf",
".git/objects/7a/60674e9f829c3e9d8f92252392a5486337f6d6": "f34c53ef179e2f56071da0e69d9e0a0f",
".git/objects/7b/00d0e3e8acf5ebf22bd2368d5ea3bd8c06510a": "f812f030b0a7a5e0e30adb2ab1dac17e",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/80/81e08e766cdec0cc0a38ac2b05679f376f47a1": "83c97e287637da7e1828820fdb675b9a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/b8091d6b5fe70f4b058b52fa3ad44d9ebcb9e6": "3e99be9c793ed9c581c483703fbcbee4",
".git/objects/87/4fc3e3b6752979cdd8950be0d0096fb0c2374f": "b5cb0c4f77e8bf696688cf100a806f1d",
".git/objects/87/7dcddecdbd8d5d4ecf1d7c05dbcbd07487729e": "028c7e7b82e8fb4bd2e50c81715de314",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/130a8f675054bbed67fa38b04436e555dfe1b8": "8fc22abede7e816bb2c0a80aafcdaaf0",
".git/objects/92/8802dfa0df2dbf30c26fbee0ecc9317d1b971e": "521112f0a527f61a5bb76c91fd0a084e",
".git/objects/94/bfb1463ad8331bfd687bc751b8920b133da744": "fd2d8c0d844b234856b36b93f652048f",
".git/objects/9a/207aa3c14fb9151516057978d8aa2908073db9": "5037f8bdb02dbf396b61f3779e044da0",
".git/objects/9d/c3ebff311e12adbdeed9366b799482aacbd792": "7272688f9d482df9f73494bfa5ed36d5",
".git/objects/9e/0627a3d1d701b3464da3722aff5b87504631eb": "46d22b0fe978d995235e2eebeeb4f518",
".git/objects/a0/ad27941b9f5fd09c93f5d264af77faa828abf2": "4e6bfa314268d6868d971f714754f4f3",
".git/objects/a3/a309f0c530c2364297143221b1e6178487e945": "0a3e9e7c39f7ba3f3527662c99e7a647",
".git/objects/aa/ce97d39d4bca3a822c098b148ae82dd06b6eba": "e706128ed18e6f090a9da11e0179fc26",
".git/objects/af/742adee0a85dd21ea96cbd84182e30e085d6cf": "aa25b932ec40efacb1efe27e7cf25d82",
".git/objects/b5/0254288cc6319d153c4af1d64870d95ee2436f": "468a6506934a07c970a4739eae75eedd",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/40d25b453ab5b9717068d86400432fe41fd412": "30b0c30f27bd3919d6c76257589eb43b",
".git/objects/b8/ee7b0b7045c96c9648cae67936a94990a6630a": "35a83f4364962a5c6b09db4477c11600",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/9dc13da1432e90b42ed78420a60db41f4c2036": "b64089fdc67fc598a7043e03a00f6a65",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bc/0835ed6df3019f0f411083657125b39649bf4e": "c1a0b6bdd880cf9b58fad733658f6823",
".git/objects/c4/2382ff822d691794947dff0939f3bc9de047ba": "28a552c70e3abbb7585c957070902440",
".git/objects/c5/f4bc2a4da91586f3005813077f0d0aa9040f82": "3191028b787554cee4652f5050144bff",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/ce/973b4c2081c90481847198c7bb286246fd1bca": "6e87a287d0a20267a0cd9bc75d15f4e8",
".git/objects/ce/f2a6769cf781a8207d08fc14a3f65b92638847": "2f8f71cd4b501dd2806b04daf1fa8327",
".git/objects/cf/202595f2c5550f4c8eff32db599d1076c5899b": "f67576394c9d81829c5da35f4ceebffc",
".git/objects/cf/8cb2096d3b542945a320a49695ffdfcb092ab2": "cd55361199591b7b57fab1de3253cfc1",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/eabdb6c7ca3aad00d2f42b755f35b4ea694344": "1de13a6c839bd8c982588a5dc8ce2515",
".git/objects/d6/2223049be28b3331432bf77a871596250dc8e6": "70d8995f0649c97531d425e1db633d4f",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/41edef57bddc6cc4f4cdb836297404cea16be1": "0ef0352701edf90275bbc44b6397399c",
".git/objects/d8/60fc213dbd8c436b88ef6491160960feceab81": "840a6e0a490344f868f35165dd037673",
".git/objects/db/d492be4ef357f5adf36dbf21aaec803db807e1": "ecb3c8a0fa2d40ff63e87c8d6e5c88f1",
".git/objects/de/1a6f5d4e070067a93295eb53946a0dffe29259": "b477a92c3b6fa6ad6eb2eea9e8ffce0b",
".git/objects/e8/2c5850db3a3482d0c954a4dc122c02de555ce7": "d357cd906b3805bf81477f5527cca086",
".git/objects/ea/877d51ab8cf000bb4a3b7cbb950337c3660890": "21e7c1d92d13d7fa1a5b3d61311e5036",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/c19449ff1e1e86a889eb2444fafeab1e439a89": "00b1750b603a5890f48f82030e4c1975",
".git/objects/ee/b4f1ecb5e08b4f5eec75e422ca7a046166b0c7": "b727889a8002da0d881b469d85c2a45e",
".git/objects/f1/2604835dfba5a421d4eee1aa9f25acd52894f2": "4922844e1e2625102841ab0aea05c255",
".git/objects/f1/b1774fc3035add75654bdf6925ec9431344e6d": "c8f6dd966ea89e71730ccc0a9aa1a608",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/4c14cc47d347779c6bdac186d485319683d093": "60ec09bb80a9d8ef64ae02e7c0e5f5fb",
".git/objects/f4/e9668ba66bd598039e52c6fd46f02ddb9f8fb2": "4e6627ac3458177ce1876aa997541093",
".git/objects/f8/032fe9cd8250463b30b3b13f9ca5a1ae6f07b3": "2851642ad3dcb9583a7b9c3f051ad22d",
".git/objects/f8/0d9701f16ab72fdcf1e3395d6f3d22e39cfb08": "5c1738679e50ed45d88be36273471a24",
".git/refs/heads/master": "46a4a53228e7590d1b739d8384950abd",
".git/refs/remotes/origin/master": "46a4a53228e7590d1b739d8384950abd",
"assets/AssetManifest.bin": "c7e88d763f98ff6aeea98caab4a6addf",
"assets/AssetManifest.bin.json": "6fe9fa84f80730070cb8266ca5112a34",
"assets/AssetManifest.json": "67962df9fccea1ea80a2a5486ac00791",
"assets/assets/lotties/swipeup.json": "803e7c3518e4d96a9a0415a6296e81a9",
"assets/assets/video/1.mp4": "306f4d8f352d6e7c46e47f4680e8f84d",
"assets/assets/video/2.mp4": "bf4ed88ceb61e24b5bfc3e7a4a96d6b7",
"assets/assets/video/3.mp4": "33273af548f2e3f2d3b3bf6492ec9ce7",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/NOTICES": "ece24d7bb5c489235a107537ac80d490",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cfe570bda8406d7a6bb7f05d3ba9714c",
"/": "cfe570bda8406d7a6bb7f05d3ba9714c",
"main.dart.js": "ce4f9d022cebce65e32bbe1b5e9ae573",
"manifest.json": "18a87f9c01b27508b6e550a2974f6148",
"version.json": "6ca7bcbbc09db5e041c3b34ac1322c58"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
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
