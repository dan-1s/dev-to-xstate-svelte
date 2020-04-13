import {Machine, assign} from 'xstate';

export const FETCH = 'FETCH';
export const RETRY = 'RETRY';
export const RESOLVE = 'RESOLVE';
export const REJECT = 'REJECT';

const fetchMachine = Machine({
  id: 'fetch',
  initial: 'idle',
  context: {
    retries: 0
  },
  states: {
    idle: {
      on: {
        [FETCH]: 'loading'
      }
    },
    loading: {
      on: {
        [RESOLVE]: 'success',
        [REJECT]: 'failure'
      }
    },
    success: {
      type: 'final'
    },
    failure: {
      on: {
       [RETRY]: {
          target: 'loading',
          actions: assign({
            retries: (context, event) => context.retries + 1
          })
        }
      }
    }
  }
});

export default fetchMachine;