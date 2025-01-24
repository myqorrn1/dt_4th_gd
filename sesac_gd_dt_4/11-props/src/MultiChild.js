// #2. 다중 자식 요소 전달
import './MultiChild.css'; // css 연결!!

const MultiChild = ({ children }) => {
    return <div className="multi">{children}</div>;
};
export default MultiChild;
