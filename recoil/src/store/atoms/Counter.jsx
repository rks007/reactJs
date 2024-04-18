import {atom, selector} from 'recoil'

const counterState = atom({
    key: "counterState",
    default: 0
})

const counterSelector = selector({
    key: "counterSelector",
    get: ({get}) => {
        const count = get(counterState);

        if(count % 2 ==0) {
            return true;
        }
        return false;
    }
})

export {counterState, counterSelector}