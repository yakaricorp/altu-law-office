export default function Footer() {
  const footerSections = [
    {
      header: 'ALTU Hukuk',
      links: [
        {
          text: 'About',
          src: '/',
        },
        {
          text: 'Attorneys',
          src: '/',
        },
        {
          text: 'Contact',
          src: '/',
        },
      ],
    },
    {
      header: 'Info',
      links: [
        {
          text: 'Services',
          src: '/',
        },
        {
          text: 'FAQ',
          src: '/',
        },
      ],
    },
  ]

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
                    <li
                      key={link.text}
                      className="mb-1 hover:underline"
                    >
                      <a href="">{ link.text }</a>
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
        © 2024 ALTU HUKUK
      </div>
    </>
  )
}
