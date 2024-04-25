import { atom, selector, useRecoilValue } from 'recoil'

export {atom} from 'recoil'

const networkAtom = atom({
    key: "networkAtom",
    default: 104
})

const jobsAtom = atom({
    key: "jobsAtom",
    default: 0
})

const notificationAtom = atom({
    key: "notificationAtom",
    default: 12
})

const messagingAtom = atom({
    key: "messagingAtom",
    default: 0
})

const totalNotificationCount = selector({
    key: "totalNotificationCount",
    get: ({get}) => {
        const networkAtomCount = get(networkAtom)
        const jobsAtomCount = get(jobsAtom)
        const notificationAtomCount = get(notificationAtom)
        const messagingAtomCount = get(messagingAtom)

        return networkAtomCount + jobsAtomCount + notificationAtomCount + messagingAtomCount;
    }
    
})

export {networkAtom, jobsAtom, notificationAtom, messagingAtom, totalNotificationCount}