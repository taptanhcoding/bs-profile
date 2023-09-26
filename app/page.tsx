import Image from 'next/image'
import { menu } from './components/data/sidebar'

export default function Home() {
  return (
    <div className='h-screen overflow-y-scroll' id="contain">
     {menu.map((item) => <div id={item.id} key={item.id} className="">
      {item.content}
     </div>)} 
    </div>
  )
}
