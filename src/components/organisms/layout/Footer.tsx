import Link from 'next/link'
import ScrollToTop from "@/components/atoms/ScrollToTop"
import { memo } from 'react'

function Footer() {
  return (
    <footer className="mt-4 bg-slate-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">About Us</h3>
            <p className="text-sm">We are a company dedicated to providing excellent services.</p>
          </div>
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-lg font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/">Services</Link></li>
              <li><Link href="/">Contact</Link></li>
            </ul>
          </div>
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
            <p className="text-sm">Chatou, france</p>
            <p className="text-sm">Email: mail@mail.com</p>
            <p className="text-sm">Phone: (123) 456-7890</p>
          </div>
        </div>
        <div className="mt-6 text-center text-sm">
          <p>© 2024 Mohamed Habib ALOUI</p>
        </div>
      </div>
      <ScrollToTop />
    </footer>
  )
}
export default memo(Footer)
