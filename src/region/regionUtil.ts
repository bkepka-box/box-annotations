import { Rect } from '../@types';

// eslint-disable-next-line import/prefer-default-export
export function scaleShape(shape: Rect, scale = 1, invert = false): Rect {
    const { height, width, x, y, ...rest } = shape;
    const ratio = invert ? 1 / scale : scale;

    return {
        ...rest,
        height: height * ratio,
        width: width * ratio,
        x: x * ratio,
        y: y * ratio,
    };
}
