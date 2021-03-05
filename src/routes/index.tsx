import React from "react";
import { SubA, SubB, SubC } from "../components";
// import SubA from "../components/subcomponents/SubA";
// import SubB from "../components/subcomponents/SubB";
// import SubC from "../components/subcomponents/SubC";
const components = [SubA, SubB, SubC]; // 정적 시간에 평가되므로 undefined를 hold
console.log(components);
function SubComponents() {
  return (
    <div>
      서브컴포넌트들 렌더링
      {components.map((x) => React.createElement(x))}
    </div>
  );
}

export default SubComponents;
