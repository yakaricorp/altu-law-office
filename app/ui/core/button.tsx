'use client'

export default function Button() {
  return (
    <div className="rounded-full uppercase text-sm bg-primary text-white px-5 py-3 inline tracking-widest cursor-pointer hover:bg-black hover:text-white whitespace-nowrap"
    style={{ transition: 'background-color .1s linear' }}>
      Hello World
    </div>
  )
}