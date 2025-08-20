let map = new WeakMap()
let runtime = cr_getC2Runtime()
map.set(cr.behaviors.Platform.prototype.acts.SetMaxSpeed, function (action) {
  let old = action.func
  action.func = function (...args) {
    args[0] = 2000;
    old.apply(this, args)
  }
})
for(const action of Object.values(runtime.actsBySid)) {
    if (map.has(action.func)) map.get(action.func)(action)
}
