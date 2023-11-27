import React from "react";
import Link from "next/link";
import navStyles from "./Navbar.module.css";
function Navbar() {
return(
<div className={navStyles.nav}>
<ul>
<img className={navStyles.nav} src="favicon.ico" alt="" height={100} />
<Link href='/'><li className={navStyles.nav}>Forside</li></Link> 
<Link href='/luftfart'><li className={navStyles.nav}>Luftfart</li></Link>
<Link href='/jernbaner'><li className={navStyles.nav}>Jernbaner</li></Link>
<Link href='/busser'><li className={navStyles.nav}>Busser</li></Link>
<Link href='/rejsekort'><li className={navStyles.nav}>Rejsekort</li></Link>
<Link href='/data'><li className={navStyles.nav}>Om data</li></Link>
</ul>
</div>
)
}

export default Navbar