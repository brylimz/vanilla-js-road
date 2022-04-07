// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6VNVm":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4e5dac8afe405db7";
module.bundle.HMR_BUNDLE_ID = "4af5312e19694a54";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F1() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                } // Render the fancy html overlay
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
            document.body.appendChild(overlay);
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>\n          ").concat(stack, "\n        </pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>' + hint + '</div>';
            }).join(''), "\n        </div>\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') {
        reloadCSS();
        return;
    }
    var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
    if (deps) {
        var fn = new Function('require', 'module', 'exports', asset.output);
        modules[asset.id] = [
            fn,
            deps
        ];
    } else if (bundle.parent) hmrApply(bundle.parent, asset);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    return getParents(module.bundle.root, id).some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}]},["6VNVm"], null, "parcelRequire3a11")
'use strict';
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP
// Data
const account1 = {
    owner: 'Jonas Schmedtmann',
    movements: [
        200,
        450,
        -400,
        3000,
        -650,
        -130,
        70,
        1300
    ],
    interestRate: 1.2,
    pin: 1111
};
const account2 = {
    owner: 'Jessica Davis',
    movements: [
        5000,
        3400,
        -150,
        -790,
        -3210,
        -1000,
        8500,
        -30
    ],
    interestRate: 1.5,
    pin: 2222
};
const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [
        200,
        -200,
        340,
        -300,
        -20,
        50,
        400,
        -460
    ],
    interestRate: 0.7,
    pin: 3333
};
const account4 = {
    owner: 'Sarah Smith',
    movements: [
        430,
        1000,
        700,
        50,
        90
    ],
    interestRate: 1,
    pin: 4444
};
const accounts = [
    account1,
    account2,
    account3,
    account4
];
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');
const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');
const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const displayMovements = function(movements, sort = false) {
    containerMovements.innerHTML = '';
    // .textContent = 0
    const movs = sort ? movements.slice().sort((a, b)=>b - a
    ) : movements;
    movs.forEach(function(mov, i) {
        const type = mov > 0 ? 'deposit' : 'withdrawal';
        const html = ` \n<div class="movements__row">\n  <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>\n  <div class="movements__value">${mov}€</div>\n</div>\n`;
        containerMovements.insertAdjacentHTML('afterbegin', html);
    });
};
displayMovements(account1.movements);
// Display Balance
const calcDisplayBalance = function(acc) {
    acc.balance = acc.movements.reduce((acc1, mov)=>acc1 + mov
    , 0);
    labelBalance.textContent = `${acc.balance}€`;
};
// Display Sums
const calcDisplaySummary = function(acc) {
    const incomes = acc.movements.filter((mov)=>mov > 0
    ).reduce((acc1, mov)=>acc1 + mov
    , 0);
    labelSumIn.textContent = `${incomes}€`;
    const outcomes = acc.movements.filter((mov)=>mov < 0
    ).reduce((acc1, mov)=>acc1 + mov
    , 0);
    labelSumOut.textContent = `${Math.abs(outcomes)}€`;
    const interest = acc.movements.filter((mov)=>mov > 0
    ).map((deposit)=>deposit * acc.interestRate / 100
    ).filter((int, i, arr)=>{
        // console.log(arr);
        return int >= i;
    }).reduce((acc1, int)=>acc1 + int
    , 0);
    labelSumInterest.textContent = `${interest}€`;
};
// const update UI
const updateUI = function(acc) {
    displayMovements(acc.movements);
    calcDisplayBalance(acc);
    calcDisplaySummary(acc);
};
// create user
const user = 'Steven Thomas Williams'; // stw
const createUsernames = function(accs) {
    accs.forEach(function(acc) {
        acc.username = acc.owner.toLowerCase().split(' ').map((name)=>name[0]
        ).join('');
    });
};
createUsernames(accounts);
// event handler
let currentAccount;
btnLogin.addEventListener('click', function(e) {
    // preven form from submitting
    e.preventDefault();
    accounts.find;
    currentAccount = accounts.find((acc)=>acc.username === inputLoginUsername.value
    );
    console.log(currentAccount);
    if (currentAccount?.pin === Number(inputLoginPin.value)) {
        containerApp.style.opacity = 100;
        labelWelcome.textContent = `Welcome ${currentAccount.owner}`;
        labelDate.textContent = new Date().toLocaleDateString();
        labelBalance.textContent = `${currentAccount.movements.reduce((acc, mov)=>acc + mov
        , 0)}€`;
        displayMovements(currentAccount.movements);
        calcDisplayBalance(currentAccount);
        calcDisplaySummary(currentAccount);
        //clear form
        inputLoginPin.blur();
        inputLoginUsername.value = '';
        inputLoginPin.value = '';
    } else alert('Wrong pin');
});
btnTransfer.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputTransferAmount.value);
    const receiverAcc = accounts.find((acc)=>acc.username === inputTransferTo.value
    );
    inputTransferAmount.value = inputTransferTo.value = '';
    if (amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc?.username !== currentAccount.username) {
        // doing the transfer
        currentAccount.movements.push(-amount);
        receiverAcc.movements.push(amount);
        // update UI 
        updateUI(currentAccount);
    }
});
btnLoan.addEventListener('click', function(e) {
    e.preventDefault();
    const amount = Number(inputLoanAmount.value);
    if (amount > 0 && currentAccount.movements.some((mov)=>mov >= amount * 0.1
    )) {
        currentAccount.movements.push(amount);
        updateUI(currentAccount);
    } else alert('You can not loan more than 10% of your balance');
});
btnClose.addEventListener('click', function(e) {
    e.preventDefault();
    if (currentAccount.username === inputCloseUsername.value && currentAccount.pin === Number(inputClosePin.value)) {
        const index = accounts.findIndex((acc)=>acc.username === currentAccount.username
        );
        // remove from array
        accounts.splice(index, 1);
        console.log(index);
        labelWelcome.textContent = 'Goodbye';
        containerApp.style.opacity = 0;
    } else alert('Wrong pin');
});
let sorted = false;
btnSort.addEventListener('click', function(e) {
    e.preventDefault();
    displayMovements(currentAccount.movements, !sorted);
    sorted = !sorted;
});
/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
const dogs = [
    {
        weight: 22,
        curFood: 250,
        owners: [
            'Alice',
            'Bob'
        ]
    },
    {
        weight: 8,
        curFood: 200,
        owners: [
            'Matilda'
        ]
    },
    {
        weight: 13,
        curFood: 275,
        owners: [
            'Sarah',
            'John'
        ]
    },
    {
        weight: 32,
        curFood: 340,
        owners: [
            'Michael'
        ]
    }, 
];
// 1.
dogs.forEach((dog)=>dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)
);
console.log(dogs);
// 2.
const dogSarah = dogs.find((dog)=>dog.owners.includes('Sarah')
);
console.log(dogSarah);
console.log(`Sarah's dog is eating ${dogSarah.curFood > dogSarah.recFood ? 'too much' : 'not enough'}`);
// 3. new array eat too much
const eatTooMuch = dogs.filter((dog)=>dog.curFood > dog.recFood
).flatMap((dog)=>dog.owners
);
console.log(eatTooMuch);
const eatTooLittle = dogs.filter((dog)=>dog.curFood < dog.recFood
).flatMap((dog)=>dog.owners
);
console.log(eatTooLittle);
// 4. new array names of the dogs that eat too much and too little
console.log(`Dogs that eat too much: ${eatTooMuch.join(', ')}`);
console.log(`Dogs that eat too little: ${eatTooLittle.join(', ')}`);
// 5. log to the console whether the is any dog exactly the amount of food that is recommended (just true or false)
const isExactly = dogs.some((dog)=>dog.curFood === dog.recFood
);
console.log(isExactly);
// 6. log to console whether the is any dog eating an okay amount of food (try to reuse the condition from 5) 
const checkEatingOkay = dogs.some((dog)=>dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(checkEatingOkay);
// 7. create an array containing the dogs that are eating an okay amount of food
const eatingOkay = dogs.filter((dog)=>dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1
);
console.log(eatingOkay);
// create a shallow copyof the dogs array and sort it by recommended food portion is an ascending order
const sortedDogs = dogs.slice().sort((a, b)=>a.recFood - b.recFood
);
console.log(sortedDogs);
// create dictonary named Deden and add the following properties: coding, main game
const Deden = {
    coding: 'C#',
    mainGame: 'GTA V'
};
// loop 3 times and every 1 time loop add a property to Deden with a random value
for(let i = 0; i < 3; i++){
    const randomProperty = Object.keys(Deden)[Math.floor(Math.random() * Object.keys(Deden).length)];
    Deden[randomProperty] = Math.random();
}
console.log(Deden); /*
// 1
const bankDepositSum = accounts.flatMap(acc => acc.movements).filter(mov => mov > 0).reduce((sum, cur) => sum + cur, 0);
console.log(bankDepositSum);

// 2.
const numDeposits1000 = accounts.flatMap(acc => acc.movements).reduce((count, cur) => (cur >= 1000 ? ++count : count) , 0)

console.log(accounts.flatMap(acc => acc.movements).filter(mov => mov >= 1000)
);
console.log(numDeposits1000);


let a = 10;
console.log(++a);
console.log(a++);

// 3
const {deposit, withdrawals} = accounts
.flatMap(acc => acc.movements)
.reduce(
  (sums, cur) => {
sums[cur > 0 ? 'deposit' : 'withdrawals'] += cur;

    // cur > 0 ? (sums.deposit += cur) : (sums.
//   withdrawals += cur); 
return sums;
}, 
{deposit: 0, withdrawals:0}
);  

console.log(deposit, withdrawals);

// 4
// this is a nice title -> This Is A Nice Title

const convertToTitleCase = function(str) {
const exceptions = ['a', 'an','the','but','or','on','in','with']
const words = str.split(' ');
const titleCased = words.map(word => { 
  if(exceptions.includes(word)){
    return word.toLowerCase();
  } else {
    return word[0].toUpperCase() + word.slice(1).toLowerCase();
  }
});
return titleCased.join(' ');
}
console.log(convertToTitleCase('this is a nice title'));




const arr = ([1,2,3,4,5,6,7]);
console.log(new Array(1,2,3,4,5,6,7));

const x = new Array(7)
console.log(x);
// console.log(x.map(() => 5))
x.fill(1,3,5)
console.log(x);

arr.fill(23,2,6)
console.log(arr);

// Array.from 

const y = Array.from({length: 7}, () => 1)
console.log(y);

const z = Array.from({length : 7}, (_, i) => i + 1)

console.log(z)

labelBalance.addEventListener('click', function(){
  const movementsUI = Array.from(document.querySelectorAll('.movements__value')
  
)
const abc  = movementsUI.map(mov => Number(mov.textContent.replace('€', '')));
console.log(abc);

}); 



// Strings
const owners = ['jonas','zach ', 'adam', 'martha']
console.log(owners.sort())
console.log(owners);


// Numbers
console.log(movements);
console.log(movements.sort());

//  return < 0, A, B (keep order)
// return > 0, B, A ( switch order)

// ascending order
movements.sort((a, b)=> {
  if(a > b)
    return 1;
    if(b >a)
      return -1;
    }
)
console.log(movements);

// descending order
movements.sort((a, b)=> {
  if(a > b)
    return -1;
    if(b >a)
      return 1;
    }
)
    console.log(movements);

    // ascending 
    movements.sort((a, b)=> a - b);
   // descending
    movements.sort((a, b)=> b - a);

    console.log(movements);


const movements = [200, 450, -400, 3000, -650, -130, 70, 1300]

const arr = [[1,2,3], [4,5,6], [7,8]]
console.log(arr.flat());

const arrDepp = [[1,2], 3, [4,5], 7, [8,9]]
console.log(arrDepp.flat(2));

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);

// const allMovements = accountMovements.flat();
// console.log(allMovements);

// const overallBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overallBalance);

const overallBalance = accounts.flatMap(acc => acc.movements).reduce((acc, mov) => acc + mov, 0);
console.log(overallBalance);



console.log(movements)
// Equality
console.log(movements.includes(-130));


// SOME : CONDITION
console.log(movements.some(mov => mov === -130));
const anyDeposites = movements.some(mov => mov > 0)
console.log(anyDeposites);

// Every : CONDITION
console.log(movements.every(mov => mov > 0));
console.log(account4.movements.every(mov => mov > 0));

// Seperate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit))
console.log(movements.every(deposit))
console.log(movements.filter(deposit))





const firstWithdrawal = movements.find(mov => mov < 0)
console.log(movements)
console.log(firstWithdrawal)
console.log(accounts)

const account = accounts.find(acc => acc.owner === 'Steven Thomas Williams')
console.log(account)


// const account6 = accounts.find(function(acc){
//   return acc.owner === 'Steven Thomas Williams';
// })
// console.log(account6)



// PIPELINE

const totalDepositsUSD = movements.filter(mov => mov > 0).map(mov => mov * 1.1).reduce((acc, mov )=>acc + mov, 0)
console.log(totalDepositsUSD)



const calcAverageHumanAge = ages => ages
.map(age =>(age <= 2 ? 2 * age : 16 + age * 4))
.filter(age => age >= 18)
.reduce((acc, age, i ,arr ) => acc + age / arr.length, 0)
const avg1 = calcAverageHumanAge([5,2,4,1,15,8,3])

console.log(avg1)


const calcAverageHumanAge = function(ages) {
  const humanAges = ages.map(age => age <=2 ? 2 * age : 16 + age * 4);
const adults = humanAges.filter(age => age >= 18);
  console.log(humanAges)
  console.log(adults)
const average = adults.reduce((acc, age, i, arr) => acc + age, 0) / adults.length;
console.log(average)
}
calcAverageHumanAge([5,2,4,1,15,8,3]);

console.log(movements)
// acumulator -> snowball
const balance = movements.reduce(function(acc, cur, i, arr){
console.log(`Iteraation ${i}: ${acc}`);
return acc + cur 


}, 0)



const balance2 = movements.reduce((acc, cur, i , arr) => acc + cur, 0)

console.log(balance2)


// maximum value
console.log(Math.max(...movements))
const max = movements.reduce((acc, mov) => {
if (acc > mov)
return acc;
else 
return mov;
}, movements[0])

console.log(max
  
)






const deposits = movements.filter(function(mov) {
return mov > 0
})

console.log(deposits);

const withdrawals = movements.filter(mov=> mov < 0) 
console.log(withdrawals)






const user = 'Steven Thomas Williams'; // stw

const createUsernames = function(accs){

accs.forEach(function(acc){
  acc.username = acc.owner.toLowerCase().split(' ').map(name=> name[0]).join('');

}
)


}


createUsernames(accounts);
console.log(accounts)





const eurToUsd = 1.1;
const movementsUSD = movements.map(mov => mov * eurToUsd); 
console.log(movementsUSD);

const movmeentsUSDfor = []
for(const mov of movements){
  movmeentsUSDfor.push(mov * eurToUsd)
}
console.log(movmeentsUSDfor)


const movementsDescriptions = movements.map((movement, i , arr) => {

return `Movement ${i+1}: you ${movement > 0? 'deposit': 'withdrew '} ${Math.abs(movement)}`

  // if(movement > 0) {
  //   return `movement ${i + 1} : you deposited ${movement}`
  // } else{
  //   return `movement ${i + 1} : You withdrew ${Math.abs(movement)}`;
  // }
}

)

console.log(movementsDescriptions);



const checkdogs = function(dogsJulia, dogsKate){
const dogsJuliaCorrected = dogsJulia.slice();
dogsJuliaCorrected.splice(0, 1)
dogsJuliaCorrected.splice(-2)

const dogs = dogsJuliaCorrected.concat(dogsKate)
console.log(dogs)

dogs.forEach(function(dog, i){
if(dog>=3) {
  console.log(`dog number ${i+1} | is an adult, and is ${dog} years old`);
} else {
  console.log(`dog number ${i+1} is still a puppy`);
}
})
}

checkdogs([3,5,2,12,7], [4,1,15,8,3])






currencies.forEach(function(value, key, map){
console.log(`${key}: ${value}`);

})

// set 
const curreniesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR'])
console.log(curreniesUnique)
curreniesUnique.forEach(function(value,_,map) {
  console.log(`${value}, ${value}`);
})

//  for(const movement of movements) {
for(const [i, movement] of movements.entries()){
if(movement > 0) {
    console.log(`movement ${i + 1} : you deposited ${movement}`)
  } else{
    console.log(`movement ${i + 1} : you deposited ${Math.abs(movement)}`);
  }
}
console.log(`for each`);

movements.forEach(function(movement, i, arr){
 
  if(movement > 0) {
    console.log(`movement ${i + 1} : you deposited ${movement}`)
  } else{
    console.log(`movement ${i + 1} : you deposited ${Math.abs(movement)}`);
  }
})



/////////////////////////////////////////////////


// SLICE
let arr= ['a','b','c','d','e']
console.log(arr.slice(2,4))
console.log(arr.slice(-2));
console.log(arr.slice(1, -2))
console.log(arr.slice())
console.log([...arr])

// SPLICE
// console.log(arr.splice(2));
arr.splice(-1)
arr.splice(1, 2)

console.log(arr);

// REVERSE

arr= ['a','b','c','d','e']
const arr2 = ['j','i','h','g','f']
console.log(arr2.reverse());


// CONCAT
const letters = arr.concat(arr2)
console.log(letters);

// JOIN

console.log(letters.join(''));

*/ 

//# sourceMappingURL=index.19694a54.js.map
