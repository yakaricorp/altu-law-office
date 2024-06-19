import Link from 'next/link'
import { v4 as createId } from 'uuid'

const footerSections = [
  {
    header: 'ALTU Hukuk',
    links: [
      {
        key: createId(),
        text: 'About',
        src: '/',
      },
      {
        key: createId(),
        text: 'Attorneys',
        src: '/',
      },
      {
        key: createId(),
        text: 'Contact',
        src: '/',
      },
    ],
  },
  {
    header: 'Info',
    links: [
      {
        key: createId(),
        text: 'Services',
        src: '/',
      },
      {
        key: createId(),
        text: 'FAQ',
        src: '/',
      },
    ],
  },
  {
    header: 'Privacy & Terms',
    links: [
      {
        key: createId(),
        text: 'Privacy Policy',
        src: '/privacy-policy',
      },
      {
        key: createId(),
        text: 'Cookie Policy',
        src: '/cookie-policy',
      },
      {
        key: createId(),
        text: 'Terms of use',
        src: '/terms-of-use',
      },
    ],
  },
]

export default function Footer() {
  return (
    <>
      <div className="px-12 py-12 bg-alternate flex flex-wrap gap-2">
        <div className="flex flex-1 flex-wrap gap-16 text-secondary">
          {
            footerSections.map(section => (
              <ul key={section.header}>
                <li><h4 className="font-bold text-lg mb-1">{ section.header }</h4></li>
                {
                  section.links.map(link => (
                    <li key={link.key} className="mb-1 hover:underline">
                      <Link href={link.src}>{ link.text }</Link>
                    </li>
                  ))
                }
              </ul>
            ))
          }
        </div>
        <ul className="max-w-[260px]">
          <li>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ut accusamus, voluptatibus inventore pariatur dolor perspiciatis amet deleniti tenetur ab maxime libero tempora consequatur ex!
            </p>
          </li>
        </ul>
      </div>
      <div className="p-2 text-center tracking-[0.3rem] text-sm text-secondary bg-primary">
        © {new Date().getFullYear()} ALTU HUKUK
      </div>
    </>
  )
}
