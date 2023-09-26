import React from 'react'

interface propsBoxSummon {
    icon : React.ReactNode,
    title: string,
    color?: string
}

export default function BoxSummon({icon,title,color}:propsBoxSummon) {
  return (
    <div className={`border p-4 rounded-md pt-0 mr-2 mb-2`} style={{
        borderColor : color || "#78ae65"    }}>
        <p className="text-[80px]">{icon}</p>
        <p>{title}</p>
    </div>
  )
}
