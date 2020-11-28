const memcachedP = require('./memcachedPromise');

// Anonymous function
(async () => {
    console.log("START")

    try {
        await memcachedP.set('foo', 'bar', 10)
        await memcachedP.set('obj', { f: 'g'}, 10)
    } catch (error) {
        console.error(error)
    }
    
    try {
        const foo = await memcachedP.get('foo');
        const obj = await memcachedP.get('obj');
        console.log(foo)
        console.log(obj)
    } catch (error) {
        console.error(error)
    }

    console.log("FIM")
    memcachedP.memcached.end();
})();
