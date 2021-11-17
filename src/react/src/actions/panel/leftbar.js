export function enableLeftBar() {
  return {
    type: 'LEFTBAR_ENABLE',
  }
}

export function disableLeftBar() {
  return {
    type: 'LEFTBAR_DISABLE',
  }
}

export function toggleLeftBar() {
  return {
    type: 'LEFTBAR_TOGGLE',
  }
}

export function openLeftBar() {
  return {
    type: 'LEFTBAR_OPEN',
  }
}

export function closeLeftBar() {
  return {
    type: 'LEFTBAR_CLOSE',
  }
}
