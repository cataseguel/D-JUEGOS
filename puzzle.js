const levels = [
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,2,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,2,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
        [0,0,1,1,1,0,0,1,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,2,0,1,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,1,1,1,1,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,0,0,0,1,1,1,0,0,0],
        [0,0,0,1,0,1,0,0,0,1,0,1,0,0,0],
        [0,0,0,1,0,1,0,0,0,1,0,1,0,0,0],
        [0,0,0,1,0,1,1,2,1,1,0,1,0,0,0],
        [0,0,0,1,0,0,0,0,0,0,0,1,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,2,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,0,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,1,0,1,1,1,0,0],
        [0,0,0,0,0,0,0,0,1,0,0,0,1,1,0],
        [0,0,0,0,0,0,0,0,1,1,1,0,0,1,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,0,1,1,1,1,0,0,0,0],
        [0,0,0,1,0,1,1,1,0,0,1,0,0,0,0],
        [0,0,1,1,0,0,0,0,0,0,1,0,0,0,0],
        [0,0,1,0,0,0,1,2,1,0,1,0,0,0,0],
        [0,0,1,0,1,1,1,0,1,0,1,0,0,0,0],
        [0,0,1,1,1,0,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,1,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,1,0,2,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,0,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,1,0,1,1,1,1,0,0,0,0],
        [0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,2,0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,1,0,0,0,0,0,0,0],
        [0,0,1,1,0,0,1,1,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],
        [0,0,1,0,0,1,1,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,1,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,1,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,1,1,1,1,0,0],
        [0,0,0,0,0,1,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,0,1,1,1,1,1,0,1,1,0,0],
        [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0],
        [0,0,0,0,1,1,1,2,1,1,0,1,1,0,0],
        [0,0,0,0,1,0,0,0,0,0,0,0,1,0,0],
        [0,0,0,0,1,0,1,1,1,1,0,1,1,0,0],
        [0,0,0,0,1,0,1,0,0,1,1,1,0,0,0],
        [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,1,1,1,0,0,0,0,1,1,1,1,0,0],
        [0,0,1,0,1,1,0,0,0,1,0,0,1,0,0],
        [0,0,1,1,0,1,1,1,1,1,0,1,1,0,0],
        [0,0,0,1,1,0,0,2,0,0,1,1,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,1,1,0,0,0,0,1,0,0,0,0],
        [0,0,0,1,1,0,1,1,1,0,1,1,1,0,0],
        [0,0,1,1,0,1,1,0,1,1,0,0,1,0,0],
        [0,0,1,0,1,1,0,0,0,1,1,1,1,0,0],
        [0,0,1,1,1,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,1,1,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
        [0,0,0,1,0,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,1,1,1,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,2,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,0,0,0,0,0,0,0,0],
        [0,1,1,1,0,0,1,1,1,1,1,1,0,0,0],
        [0,1,0,0,0,0,0,0,0,0,0,1,0,0,0],
        [0,1,0,0,0,1,1,1,1,0,0,1,0,0,0],
        [0,1,1,1,0,1,0,0,1,0,1,1,0,0,0],
        [0,0,0,1,0,1,0,2,1,0,1,0,0,0,0],
        [0,0,0,1,0,1,0,1,0,0,1,0,0,0,0],
        [0,0,0,1,0,1,0,1,1,1,1,0,0,0,0],
        [0,1,1,1,0,1,0,0,0,0,0,0,0,0,0],
        [0,1,0,0,0,1,1,1,0,0,0,0,0,0,0],
        [0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],
        [0,1,1,1,1,1,0,1,0,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,0,1,0,0,0,0,0,0,0,0],
        [0,0,0,1,0,1,1,0,0,0,0,0,0,0,0],
        [0,0,1,1,0,1,0,1,1,1,0,0,0,0,0],
        [0,0,1,0,0,1,1,1,0,1,0,0,0,0,0],
        [0,0,1,1,1,0,0,0,1,1,0,0,0,0,0],
        [0,0,0,0,1,0,0,2,1,0,0,0,0,0,0],
        [0,0,0,1,1,0,0,1,0,0,0,0,0,0,0],
        [0,0,1,1,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,1,0,1,1,1,0,0,1,0,0,0,0,0],
        [0,0,1,1,1,0,1,0,1,1,0,0,0,0,0],
        [0,0,0,0,0,1,1,0,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,0,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],
        [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0],
        [0,0,0,0,0,0,0,2,1,1,0,1,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,0,1,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,1,1,0,0,0],
        [0,0,0,0,0,1,1,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
        [0,0,0,1,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,1,1,1,0,0,0,1,0,0,0,0,0],
        [0,0,0,0,0,1,0,1,1,1,0,0,0,0,0],
        [1,1,1,1,0,1,0,2,0,0,0,0,0,0,0],
        [1,0,0,1,1,1,0,1,1,1,0,0,0,0,0],
        [1,1,0,0,0,0,0,0,0,1,1,0,0,0,0],
        [0,1,1,1,0,0,0,0,0,0,1,0,0,0,0],
        [0,0,0,1,0,1,1,1,0,1,1,0,0,0,0],
        [0,0,0,1,1,1,0,1,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,1,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,0,1,1],
        [0,0,0,0,0,0,0,0,0,0,1,0,0,0,1],
        [0,0,0,0,1,1,1,0,0,0,1,1,0,1,1],
        [0,0,0,0,1,0,1,1,0,0,0,1,0,1,0],
        [0,0,0,0,1,0,0,2,1,0,1,1,0,1,0],
        [0,0,0,1,1,0,0,0,1,0,1,0,0,1,0],
        [0,0,1,1,0,0,0,0,1,1,1,0,1,1,0],
        [0,0,1,0,0,0,0,0,0,0,0,0,1,0,0],
        [0,0,1,1,0,0,0,1,1,1,0,0,1,1,0],
        [0,0,0,1,1,0,1,1,0,1,1,0,0,1,0],
        [0,0,0,0,1,1,1,0,0,0,1,0,1,1,0],
        [0,0,0,0,0,0,0,0,0,0,1,1,1,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,1,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,1,0,0,0,0,0],
        [0,0,0,0,0,0,0,2,0,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,1,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,0,0,1,0,0,0,0],
        [0,0,0,0,0,1,0,0,1,1,1,0,0,0,0],
        [0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,1,1,1,1,1,1,0,0,0],
        [0,0,0,0,1,0,0,0,0,0,0,1,0,0,0],
        [0,0,1,1,1,0,0,1,1,1,1,1,0,0,0],
        [0,0,1,0,0,0,0,2,0,0,0,0,0,0,0],
        [0,0,1,1,0,1,1,1,0,1,1,1,0,0,0],
        [0,0,0,1,0,1,0,0,0,1,0,1,0,0,0],
        [0,0,1,1,0,1,1,1,1,1,0,1,0,0,0],
        [0,0,1,0,0,0,0,0,0,0,0,1,0,0,0],
        [0,0,1,1,0,1,1,1,0,0,1,1,0,0,0],
        [0,0,0,1,1,1,0,1,1,1,1,0,0,0,0],
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    ],
    [
        [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,1,1,0,0,0,0,0,0,0,0],
        [0,0,0,0,1,0,1,1,0,0,0,1,1,1,0],
        [0,0,0,1,1,0,0,1,1,0,1,1,0,1,0],
        [0,0,1,1,0,0,0,0,1,0,1,0,1,1,0],
        [0,0,1,0,0,1,1,1,1,0,1,0,1,0,0],
        [0,0,1,1,0,1,0,0,0,0,1,0,1,1,1],
        [0,0,0,1,0,1,1,2,0,1,1,0,0,0,1],
        [0,0,1,1,0,0,0,1,1,1,0,0,0,1,1],
        [0,1,1,0,0,0,0,0,0,0,0,0,1,1,0],
        [0,1,0,1,1,1,0,0,1,1,1,0,1,0,0],
        [0,1,1,1,0,1,0,1,1,0,1,0,1,1,0],
        [0,0,0,0,1,1,0,1,0,0,1,1,0,1,1],
        [0,0,0,0,1,0,1,1,0,0,0,1,0,0,1],
        [0,0,0,0,1,1,1,0,0,0,0,1,1,1,1]
    ],
    [
        [1,1,1,0,1,1,1,0,0,0,1,1,1,1,1],
        [1,0,1,1,1,0,1,0,0,1,1,0,0,0,1],
        [1,0,0,0,0,1,1,0,1,1,0,1,1,1,1],
        [1,1,0,0,1,1,0,1,1,0,1,1,0,0,0],
        [0,1,1,0,1,0,0,1,0,0,1,0,0,0,0],
        [0,0,1,0,1,1,0,1,1,0,1,1,0,0,0],
        [0,0,1,0,0,1,0,0,1,0,0,1,1,0,0],
        [1,1,1,0,0,1,1,2,1,0,0,0,1,0,0],
        [1,0,0,0,0,0,0,0,0,0,0,1,1,0,0],
        [1,1,0,0,1,1,1,0,0,1,1,1,0,0,0],
        [0,1,0,1,1,0,1,0,0,1,0,0,1,1,1],
        [1,1,0,1,0,1,1,0,0,1,1,1,1,0,1],
        [1,0,0,1,0,1,0,0,0,0,0,0,0,1,1],
        [1,1,1,1,0,1,1,0,1,1,1,0,1,1,0],
        [0,0,0,0,0,0,1,1,1,0,1,1,1,0,0]
    ]
];
// Se cargan todos los niveles desde el archivo levels
var level = 1;
var currLevel = levels[level]
var startingPoint = [0,0]

// Area donde ocurre el movimiento del personaje
const gameCanvas = document.getElementById("game");
const gameContext = gameCanvas.getContext("2d");

// Area donde se dinuja el camino a recrear
const levelCanvas = document.getElementById("level");
const levelContext = levelCanvas.getContext("2d");

// El tamano de las celdas del juego
const gridSize = 15;
const cellSize = gameCanvas.width / gridSize;

// El jugador empieza desde el centro del mapa
let x = Math.floor(gridSize / 2);
let y = Math.floor(gridSize / 2);

// El rastro celeste que deja el jugador
const path = [{ x, y }];

// Cantidad de pasos dados por el jugador
let steps = 0;

// El nivel 15 tiene controles aleatorios
let randomControlMap = null;

// Muestra el nivel actual en la vista superior
//document.getElementById("info").textContent = `Nivel ${level} - ${getControlType(level)}`;
document.getElementById("info").textContent = `Nivel ${level}`;
draw();

document.addEventListener("keydown", (e) => {
  const move = getMovement(e.key, level);
  if (move) {
    x = Math.max(0, Math.min(gridSize - 1, x + move.dx));
    y = Math.max(0, Math.min(gridSize - 1, y + move.dy));
    path.push({ x, y });
    steps++;
    draw();
  }

  // Avanza al siguiente nivel con Enter
  if (e.key === "Enter") {
    if (level < levels.length) {
     // if (checkPath(path, currLevel, startingPoint) == true) {
        if (true){
        level++;
        steps = 0;
        currLevel = levels[level]

        x = y = Math.floor(gridSize / 2);
        path.length = 0;
        path.push({ x, y });

        // Resetear controles aleatorios al entrar al nivel 15
        if (level === 15) {
          randomControlMap = null;
        }

        document.getElementById("info").textContent = `Nivel ${level}`;
        draw();
      } 
      else if (!checkPath(path, currLevel, startingPoint)) {
        alert("¡Camino incorrecto, empieza de nuevo!");
        x = y = Math.floor(gridSize / 2);
        path.length = 0;
        path.push({ x, y });
        draw();
      }
    }
    else {
      alert("¡Has completado todos los niveles!");
    }
  }
});

function getMovement(key, lvl) {
  const normal = {
    ArrowUp: { dx: 0, dy: -1 },
    ArrowDown: { dx: 0, dy: 1 },
    ArrowLeft: { dx: -1, dy: 0 },
    ArrowRight: { dx: 1, dy: 0 },
  };

  switch (true) {
    case lvl <= 7:
      return normal[key];
    case lvl <= 10:
      return invertDirection(normal[key]);
    case lvl <= 13:
      return rotateDirection(normal[key], "clockwise");
    case lvl <= 16:
      return rotateDirection(normal[key], "counter");
    case lvl < 20:
      if (!randomControlMap) {
        randomControlMap = {};
        const directions = Object.values(normal);
        const keys = Object.keys(normal);
        // Mezcla aleatoria
        const shuffled = directions.sort(() => 0.5 - Math.random());
        keys.forEach((key, i) => {
          randomControlMap[key] = shuffled[i];
        });
      }
      return randomControlMap[key];
    case lvl == 20:
      if (steps < 22) {
        return normal[key];
      }
      if (steps < 44) {
        return rotateDirection(normal[key], "counter");
      }
      if (steps < 66) {
        return invertDirection(normal[key]);
      }
      if (steps < 88) {
        return rotateDirection(normal[key], "clockwise");
      }
      else {
        if (!randomControlMap) {
          randomControlMap = {};
          const directions = Object.values(normal);
          const keys = Object.keys(normal);
          // Mezcla aleatoria
          const shuffled = directions.sort(() => 0.5 - Math.random());
          keys.forEach((key, i) => {
            randomControlMap[key] = shuffled[i];
          });
        }
        return randomControlMap[key];
      }
  }
}

function invertDirection(move) {
  if (!move) return null;
  return { dx: -move.dx, dy: -move.dy };
}

function rotateDirection(move, direction) {
  if (!move) return null;
  if (direction === "clockwise") return { dx: -move.dy, dy: move.dx };
  if (direction === "counter") return { dx: move.dy, dy: -move.dx };
  return move;
}

function randomDirection() {
  const options = [
    { dx: 0, dy: -1 },
    { dx: 0, dy: 1 },
    { dx: -1, dy: 0 },
    { dx: 1, dy: 0 },
  ];
  return options[Math.floor(Math.random() * options.length)];
}

function getControlType(lvl) {
  if (lvl <= 7) return "Controles normales";
  if (lvl <= 10) return "Controles invertidos";
  if (lvl <= 13) return "Controles rotados en sentido horario";
  if (lvl <= 16) return "Controles rotados en sentido antihorario";
  if (lvl < 20) return "Controles aleatorios";
  if (lvl === 20) {
    if (steps < 22) {
      return "Controles normales";
    }
    if (steps < 44) {
      return "Controles rotados en sentido antihorario";
    }
    if (steps < 66) {
      return "Controles invertidos";
    }
    if (steps < 88) {
      return "Controles rotados en sentido horario";
    }
    else {
      return "Controles aleatorios";
    }
  } 
  return "Fin del juego";
}

function checkPath(path, currLevel, startingPoint) {
  let pathMatrix = levels[0];
  let offX = startingPoint[0] - path[0].x;
  let offY = startingPoint[1] - path[0].y;

    // Limpia la pantalla a mano porque no funciona bien
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      pathMatrix[x][y] = 0;
    }
  }

  path.forEach(pos => {
    let newX = pos.x + offX;
    let newY = pos.y + offY;
    if (newX < gridSize && newY < gridSize && 
        newX >= 0 && newY >= 0 ) {
      pathMatrix[newY][newX] = 1;
    }
    else {
      return false;
    }
  });

  // Sobreescribe la posicion inicial con un dos
  let newX = path[0].x + offX;
  let newY = path[0].y + offY;

  if (newX < gridSize && newY < gridSize && 
        newX >= 0 && newY >= 0 ) {
    pathMatrix[newY][newX] = 2;
  }

  if (JSON.stringify(currLevel) == JSON.stringify(pathMatrix)) {
    console.log("Los caminos son iguales");
    return true;
  }
  
  else if (JSON.stringify(currLevel) != JSON.stringify(pathMatrix)) {
    console.log("Los caminos son distintos");
    console.log("Camino a seguir: " + JSON.stringify(currLevel));
    console.log("Camino seguido: " + JSON.stringify(pathMatrix));
    console.log("Offset en X: " + JSON.stringify(offX));
    console.log("Offset en Y: " + JSON.stringify(offY));
    return false;
  }
}

function draw() {
  gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
  
  // Limpia la pantalla a mano porque no funciona bien
  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      levelContext.clearRect(x * cellSize, y * cellSize, cellSize, cellSize);
    }
  }
  
  // Dibujar grid del area jugable
  gameContext.strokeStyle = "#ccc";
  for (let i = 0; i <= gridSize; i++) {
    gameContext.beginPath();
    gameContext.moveTo(i * cellSize, 0);
    gameContext.lineTo(i * cellSize, gameCanvas.height);
    gameContext.stroke();

    gameContext.beginPath();
    gameContext.moveTo(0, i * cellSize);
    gameContext.lineTo(gameCanvas.width, i * cellSize);
    gameContext.stroke();
  }
  
  // Dibujar grid del area del nivel
  levelContext.strokeStyle = "#ccc";
  for (let i = 0; i <= gridSize; i++) {
    levelContext.beginPath();
    levelContext.moveTo(i * cellSize, 0);
    levelContext.lineTo(i * cellSize, levelCanvas.height);
    levelContext.stroke();

    levelContext.beginPath();
    levelContext.moveTo(0, i * cellSize);
    levelContext.lineTo(levelCanvas.width, i * cellSize);
    levelContext.stroke();
  }

  // Dibujar trayectoria
  const move = getControlType(level);
  gameContext.fillStyle = "#3498db";

  if (move === "Controles normales") {
    gameContext.fillStyle = "#F8C662";
  }
  if (move === "Controles invertidos") {
    gameContext.fillStyle = " #25344F";
  }
  if (move === "Controles rotados en sentido horario") {
    gameContext.fillStyle = " #BF3556";
  }
  if (move === "Controles rotados en sentido antihorario") {
    gameContext.fillStyle = "#D44220";
  }
  if (move === "Controles aleatorios") {
    gameContext.fillStyle = " #4F583B";
  }

  path.forEach(pos => {
    gameContext.fillRect(pos.x * cellSize, pos.y * cellSize, cellSize, cellSize);
  });

  for (let y = 0; y < gridSize; y++) {
    for (let x = 0; x < gridSize; x++) {
      if (currLevel[y][x] === 1) {
        levelContext.fillStyle = "#CCCCCC";
        levelContext.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
      }
      if (currLevel[y][x] === 2) {
        levelContext.fillStyle = "#e74c3c";
        levelContext.fillRect(x * cellSize, y * cellSize, cellSize, cellSize);
        startingPoint = [x,y]
      }
    }
  }
  // Punto inicial
  gameContext.fillStyle = "#e74c3c";
  gameContext.fillRect(Math.floor(gridSize / 2) * cellSize, Math.floor(gridSize / 2) * cellSize, cellSize, cellSize);
}

document.getElementById("reset").addEventListener("click", () => {
  x = y = Math.floor(gridSize / 2);
  path.length = 0;
  path.push({ x, y });
  steps = 0;
  draw();
});
