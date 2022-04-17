export const ColoredMessage = (props) => {
  // propsを分割代入
  const { color, children } = props;

  const contentStyle = {
    // 省略可能
    color,
    fontSize: "20px"
    // color: color,
    // children: children
  };
  // propsが不要
  return <p style={contentStyle}>{children}</p>;
};
