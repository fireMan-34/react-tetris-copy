import { List } from "immutable";

const blockShape = {
    I: [[1, 1, 1, 1]],
    L: [[0, 0, 1], [1, 1, 1]],
    J: [[1, 0, 0], [1, 1, 1,]],
    Z: [[1, 1, 0], [0, 1, 1]],
    S: [[0, 1, 1], [1, 1, 0]],
    O: [[1, 1], [1, 1]],
    T: [[0, 1, 0], [1, 1, 1]],
};
const origin = {
    I: [[-1, 1], [1, -1]],
    L: [[0, 0]],
    L: [[0, 0]],
    J: [[0, 0]],
    Z: [[0, 0]],
    S: [[0, 0]],
    O: [[0, 0]],
    T: [[0, 0], [1, 0], [-1, 0], [0, -1]],
};
const blockType = Object.keys(blockShape);
const blockTypeMap = {
    I: "I",
    L: "L",
    L: "L",
    J: "J",
    Z: "Z",
    S: "S",
    O: "O",
    T: "T",
};
const blanckLine = Array.from({ length: 10 }, 0);
const blankMatrix = (() => {
    return List(Array.from({ length: 20 }, i => List(blanckLine)));
})();

const MAX_POINT = 999999;

export {
    blockShape, origin, blockType, blockTypeMap,
    blanckLine, blankMatrix, MAX_POINT
};