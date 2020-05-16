# light-pub-sub
Light pub/sub library for Javascript

# Quick Start

```js
const broadcaster = require('light-pub-sub')

// subscribe
broadcaster.on('abc', ({ data }) => {
  console.log(data) // 123
})

// publish
broadcaster.emit('abc', 123)
```

# Usage

### broadcaster.on(channel, fn)

### broadcaster.once(channel, fn)

### broadcaster.emit(channel, data)

### broadcaster.off(channel, fn)

### broadcaster.offAll(channel)
