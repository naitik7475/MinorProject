import { DarkThemeToggle, Navbar } from 'flowbite-react';

function MyNavbar() {
  return (
    <Navbar fluid={true} className="px-4 py-2">
      <div className="container mx-auto">
        <div className="flex w-full items-center justify-between">
          <div className="flex flex-col items-start">
            <span className="whitespace-nowrap text-xl font-semibold dark:text-white">
              DIGISCHOLAR
            </span>
            <span className="text-xs uppercase tracking-wider text-gray-500 dark:text-gray-300">
              Prime Minister's Special Scholarship Portal
            </span>
          </div>
          <div className="flex items-center gap-2 md:order-2">
            <Navbar.Collapse>
              <Navbar.Link href="#">
                About
              </Navbar.Link>
              <Navbar.Link href="#">Check Status</Navbar.Link>
              <Navbar.Link href="#">How to Apply</Navbar.Link>
              <Navbar.Link href="#">FAQs</Navbar.Link>
              <Navbar.Link href="#">Contact Us</Navbar.Link>
              <Navbar.Link href="#">
                <span className="rounded-lg bg-blue-600 px-5 py-2.5 text-white">
                  Login
                </span>
              </Navbar.Link>
            </Navbar.Collapse>
            <DarkThemeToggle />
          </div>
        </div>
      </div>
    </Navbar>
  );
}

export default MyNavbar;