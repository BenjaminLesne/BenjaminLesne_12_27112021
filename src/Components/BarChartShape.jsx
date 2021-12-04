/**
 * return a custom bar shape path see
 * {@Link https://recharts.org/en-US/examples/CustomShapeBarChart}
 *
 * @module BarChartShape
 */

const BarChartShape = ({ fill, x, y, width, height }) => {
  const path = `m ${x} ${y + height} h ${width} v -${height} c -3 -9 ${
    (-15 / 17) * width
  } ${(-8 / 17) * width} ${(-17 / 17) * width} 0`;

  return <path d={path} stroke="none" fill={fill} />;
};

export default BarChartShape;
