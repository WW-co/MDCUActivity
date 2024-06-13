import Link from 'next/link';

function Header() {
  return (
    <header className="bg-purple-800 text-white flex shadow-xl h-16 items-center px-8 gap-8 mb-8">
      <h1 className="font-bold text-3xl">MDCU ACTIVITY</h1>
      <ul className="flex gap-8 text-md text-white">
        <li>
          <Link
            href="/"
            className="underline underline-offset-4 hover:no-underline"
          >
            แดชบอร์ด
          </Link>
        </li>
        <li>
          <Link
            href="/createact"
            className="underline underline-offset-4 hover:no-underline"
          >
            สร้างกิจกรรม
          </Link>
        </li>
        <li>
          <Link
            href="/myact"
            className="underline underline-offset-4 hover:no-underline"
          >
            กิจกรรมของฉัน
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;