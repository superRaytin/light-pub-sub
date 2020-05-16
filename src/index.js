// 极简实现发布/订阅模式
const broadcaster = {}
broadcaster.subscribers = []
broadcaster.subscribersOnce = []

// 订阅
broadcaster.on = (channel, fn) => {
  if (!channel || !fn) return
  if (!broadcaster.subscribers[channel]) {
    broadcaster.subscribers[channel] = []
  }
  broadcaster.subscribers[channel].push(fn)
}

// 订阅一次
broadcaster.once = (channel, fn) => {
  if (!channel || !fn) return
  if (!broadcaster.subscribersOnce[channel]) {
    broadcaster.subscribersOnce[channel] = []
  }
  broadcaster.subscribersOnce[channel].push(fn)
}

// 发布
broadcaster.emit = (channel, data) => {
  const fns = broadcaster.subscribers[channel]
  const fnsOnce = broadcaster.subscribersOnce[channel]

  if (!channel) return

  if (fns && fns.length) {
    for (let i = 0; i < fns.length; i++) {
      fns[i]({ data })
    }
  }

  if (fnsOnce && fnsOnce.length) {
    for (let i = 0; i < fnsOnce.length; i++) {
      fnsOnce[i]({ data })
      fnsOnce[i] = undefined
    }
  }
}

// 取消单个订阅
broadcaster.off = (channel, fn) => {
  const fns = broadcaster.subscribers[channel]
  const fnsOnce = broadcaster.subscribersOnce[channel]

  if (!channel || !fn) return

  if (fns && fns.length) {
    for (let i = 0; i < fns.length; i++) {
      if (fn === fns[i]) {
        fns.splice(i, 1)
      }
    }
  }

  if (fnsOnce && fnsOnce.length) {
    for (let i = 0; i < fnsOnce.length; i++) {
      if (fn === fnsOnce[i]) {
        fnsOnce.splice(i, 1)
      }
    }
  }
}

// 取消所有订阅
broadcaster.offAll = (channel) => {
  if (!channel || broadcaster.subscribers[channel]) {
    broadcaster.subscribers[channel] = []
  }
}

export default broadcaster
