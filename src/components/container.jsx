import React, { Suspense } from "react";
import { useLocation } from "react-router-dom";

import { motion } from "framer-motion";
import { pageTransition } from "../utils/animation";

const Container = ({ children }) => {
  const pageId = useLocation(null)
  return (
    <Suspense
      fallback={
        <div
          style={{
            position: "absolute",
            height: "100%",
            width: "100%",
            backgroundColor: "rgba(33, 33, 33, 0.6)",
            display: "grid",
            placeContent: "center",
            fontSize: "3rem",
            color: "#efefef",
          }}
        >
          Loading...
        </div>
      }
    >
      <motion.div
        key={pageId}
        id="page-container"
        variants={pageTransition}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        {children}
      </motion.div>
    </Suspense>
  );
};

export default Container;
