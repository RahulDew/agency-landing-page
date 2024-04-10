import React from "react";

interface ChildProps {
  children: React.ReactNode;
}

const AnimatedBtn: React.FC<ChildProps> = ({ children }) => {
  return (
    <button className="relative inline-flex h-10 overflow-hidden rounded-full p-[1px] px-[1.8px] focus:outline-none focus:ring-offset-2 focus:ring-offset-slate-50">
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFA800_0%,#FFFFFF_50%,#FFA800_100%)]"></span>
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-bgSecondary px-4 py-1 text-sm font-medium text-primary backdrop-blur-3xl">
        {children}
      </span>
    </button>
  );
};

export default AnimatedBtn;
