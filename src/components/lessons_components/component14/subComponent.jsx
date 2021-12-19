import React, { useState } from "react";

export function SubComponent({label, setter, value}) {

  return (
    <div>
      <label htmlFor="name">{label}</label>
      <input name="name" value={value} onChange={(v) => setter(v.target.value)}/>
    </div>
  )
}