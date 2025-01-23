import { DarkThemeToggle, Navbar, Button } from "flowbite-react";

function MyNavbar() {
  return (
    <Navbar fluid>
      <Navbar.Brand href="https://flowbite-react.com">
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white ">
          DIGISCHOLAR
        </span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button className="mr-2">Login</Button>
        <DarkThemeToggle />
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link href="#">About</Navbar.Link>
        <Navbar.Link href="#">Check Status</Navbar.Link>
        <Navbar.Link href="#">How to apply</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default MyNavbar;
