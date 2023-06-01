import React from "react";
import "./TodoLoading.css";

function TodoLoading() {
  return (
    <>
      <div className="charging">
        <div className="circle">
          <div></div>
        </div>
        <p>Cargando...</p>
      </div>
    </>
  );
}

export { TodoLoading };
