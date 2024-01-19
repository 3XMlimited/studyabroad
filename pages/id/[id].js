import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
const page = () => {
  let pathname = usePathname();
  const [fb, setFb] = useState({});
  const fetchHeadline = async () => {
    try {
      const response = await fetch("/api/fb", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pathname?.split("/")[2]),
      });
      const data = await response.json();
      console.log(data);
      setFb(data.result);
    } catch (error) {
      setFb({});
    }
  };
  useEffect(() => {
    fetchHeadline();
  }, [pathname]);
  return (
    <div className="text-white">
      <div className="flex justify-center mt-32">
        <p className="text-[48px] leading-4 font-semibold"> {fb?.name}</p>
      </div>
    </div>
  );
};

export default page;
