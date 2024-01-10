import { Link,Outlet } from "react-router-dom";
export default function Root() {
    return (
      <>
        <div id="sidebar">
          <h1>Project đầu tiên </h1>
          <div>
            <form id="search-form" role="search">
              <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search"
                type="search"
                name="q"
              />
              <div
                id="search-spinner"
                aria-hidden
                hidden={true}
              />
              <div
                className="sr-only"
                aria-live="polite"
              ></div>
            </form>
            <form method="post">
              <Link to="addstudent">
               <button type="submit">New</button>
              </Link>
             
            </form>
          </div>
          <nav>
            <ul>
              <li>
                <Link to ="student">List student</Link>
              </li>
              <li>
                <Link to ="user">User</Link>
              </li>
              <li>
                <Link to="friend">Your Friend</Link>
              </li>
            </ul>
          </nav>
        </div>
        <div id="detail">
          <Outlet></Outlet>
        </div>
      </>
    );
  }