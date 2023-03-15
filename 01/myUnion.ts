var score: number | string = 33

score = 44
score = '55'

type UserA = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

var uros: UserA | Admin = {
    name: "uros",
    id: 333
}

uros = {username: 'ui', id: 334}

function getDbId(id: number | string) {
    console.log(`DB id is: ${id}`);
}

getDbId(3)
getDbId("3")

const data: number[] = [1, 2, 3]
const data2: string[] = ["1", "2", "3"]
const data3: (string | number)[] = [1, 2, "3", "4"]

let seatAllotment: "aisle" | 'middle' | "window"

seatAllotment = "aisle"