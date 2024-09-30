"use client";

import { useEffect } from "react";

const RotationList = () => {
  useEffect(() => {
    const get = async () => {
      const response = await fetch(
        "http://localhost:3000/api/champions.route.ts"
      );
      console.log(response);
      return response;
    };
    get();
  }, []);
  // const [rotation, setRotation] = useState<number[]>([]);
  // useEffect(() => {
  //   const getId = async () => {
  //     const rotationIds = await getRotation();
  //     console.log(rotationIds);
  //     // setRotation(rotationIds);
  //   };
  //   getId();
  // }, []);
  return <div>RotationList</div>;
};

export default RotationList;
