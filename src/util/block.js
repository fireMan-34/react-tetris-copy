import { List } from "immutable";
import { blockShape, origin, blockTypeMap } from "./const ";
class Block {
    constructor({ rotateIndex, timeStamp, shape, xy, type }) {
        this.type = type;
        this.rotateIndex = rotateIndex || 0;
        this.timeStamp = timeStamp || Date.now();
        this.shape = shape || List(blockShape[type]).map(type => List(type));
        if (!xy) {
            switch (type) {
                case blockTypeMap.I:
                    this.xy = List([0, 3]);
                    break;
                case blockTypeMap.L:
                    this.xy = List([-1, 4]);
                    break;
                case blockTypeMap.J:
                    this.xy = List([-1, 4]);
                    break;
                case blockTypeMap.Z:
                    this.xy = List([-1, 4]);
                    break;
                case blockTypeMap.S:
                    this.xy = List([-1, 4]);
                    break;
                case blockTypeMap.O:
                    this.xy = List([-1, 4]);
                    break;
                case blockTypeMap.T:
                    this.xy = List([-1, 4]);
                    break;
                default:
                    break;
            }
        }
        else {
            this.xy = xy;
        }
    }
    rotate() {
        const shape = this.shape;
        let result = shape.reduce((result, m) => {
            m.forEach((n, i) => {
                const index = m.size - i - 1;
                if (result.get(index) === undefined) {
                    result = result.set(index, List([]));
                }
                const tempI = result.get(index).push(n);
                result = result.set(index, tempI);
            });
            return result;
        }, List([]));
        const nextXy = [
            this.xy.get(0) + origin[this.type][this.rotateIndex][0],
            this.xy.get(1) + origin[this.type][this.rotateIndex][1],
        ];
        const nextRotateIndex = this.rotateIndex + 1 >= origin[this.type].length ? 0 : this.rotateIndex + 1;
        return {
            shape: result,
            type: this.type,
            xy: nextXy,
            rotateIndex: nextRotateIndex,
            timeStamp: this.timeStamp,
        };
    }
    fall(n = 1) {
        return {
            shape: this.shape,
            type: this.type,
            xy: [this.xy.get(0) + this.xy.get[1]],
            rotateIndex: this.rotateIndex,
            timeStamp: this.timeStamp,
        };
    }
    right() {
        return {
            shape: this.shape,
            type: this.type,
            xy: [this.xy.get(0), this.xy.get(1) + 1],
            rotaeIndex: this.rotateIndex,
            timeStamp: this.timeStamp,
        };
    }
    left() {
        return {
            shape: this.shape,
            type: this.type,
            xy: [this.xy.get(0), this.xy.get(1) + 1],
            rotaeIndex: this.rotateIndex,
            timeStamp: this.timeStamp,
        };
    }
}

export default Block;