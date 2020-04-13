import { interpret } from 'xstate';
import { readable } from 'svelte/store'

export default function(machine) {
  const service = interpret(machine).start();
  const stop = () => service.stop();

  const readableStore = readable({}, set => {
    service.onTransition(set);
    return stop;
  });

  return [readableStore, service.send, service]
}
