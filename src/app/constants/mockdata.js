const registeredUsers = [
    {
        id: 1,
        userName: 'amir',
        password: 'test',
        statusId: 1
    },
    {
        id: 2,
        userName: 'ilan',
        password: 'test',
        statusId: 2
    },
    {
        id: 3,
        userName: 'dave',
        password: 'test',
        statusId: 3
    },
    {
        id: 4,
        userName: 'john',
        password: 'test',
        statusId: 3
    },
    {
        id: 5,
        userName: 'moshe',
        password: 'test',
        statusId: 2
    }
]

const currentStatus = [
    {
        id: 1,
        value: 'Working'
    },
    {
        id: 2,
        value: 'Vacation'
    },
    {
        id: 3,
        value: 'Away'
    }
]

const noSelectedOption = {
    id: -1
}

export {
    registeredUsers,
    currentStatus,
    noSelectedOption
}