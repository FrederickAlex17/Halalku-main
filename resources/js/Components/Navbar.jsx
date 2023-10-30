import { Link } from "@inertiajs/react"

import g from "/resources/images/HALALKU(V2).png"

const Navbar = ({ user }) => {

  return (
    <div className="navbar">

      <div className="flex-1 py-4"  >
        <a href="/" className="btn btn-ghost normal-case] text-xl text-black" >
          <img src={g} />
        </a>
      </div>
      <div className="flex">
        <input type="text" className="input input-bordered" style={{ marginLeft: '10px' }} placeholder="Search" />
      </div>
      <div className="flex">
        <a className="btn btn-ghost normal-case text-xl text-black" href={route("list.wisata")}>Shopping Cart</a>
      </div>
      <div className="flex">
        <a className="btn btn-ghost normal-case text-xl text-black" href={route("formreko.wisata")}>Notification</a>
      </div>
      <div className="flex-none">


        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img src="https://img1.pngdownload.id/20180714/ggq/kisspng-user-profile-computer-icons-login-clip-art-profile-picture-icon-5b49de2f1ef441.4301202215315676631268.jpg" />
            </div>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
            {!user ?
              <>
                <li><Link href={route("login")} as="button">Login</Link></li>
                <li><Link href={route("register")} as="button">Register</Link></li>
              </>
              :
              <>
                <li>
                  <Link href={route("admin")} className="justify-between">
                    Dashboard Admin
                  </Link>
                </li>
                <li><Link href={route("profile.edit")} as="button" >Profile</Link></li>
                <li><Link href={route("logout")} as="button" method="POST">Logout</Link></li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar