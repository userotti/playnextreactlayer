export function onResize(event) {
    return {
        type: 'ON_RESIZE_EVENT',
        payload: {
            width: event.target.innerWidth,
            height: event.target.innerHeight
        }
    }
}
