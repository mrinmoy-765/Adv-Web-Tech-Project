import Link from "next/link"

export default function Header1(){

return (
    <>
 


<div className="bg-neutral navbar text-neutral-content">
  <div className="navbar-start">
  
    <Link href="" className=" normal-case text-xl "></Link> 
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li> <Link href=""> <h1>HR-Tech Company || DeliveryMan Vues</h1> </Link></li>
      
      <li> <Link href="">  </Link></li>
    </ul>
  </div>
  <div className="navbar-end">
  <ul className="menu menu-horizontal px-1">
      <li> <Link className="" href="" > About Us </Link> </li>
      
      <li> <Link className="" href="" > Contact Us </Link></li>
    </ul>
 
  </div>
</div>


       </>
)

}