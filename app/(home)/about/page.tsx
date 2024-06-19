import Section from "app/ui/components/section"
import OurTeamOverview from "app/ui/components/homepage/our-team-overview"
import withTranslations from "app/ui/components/hoc/withTranslations/server"
import type { Translations } from "app/ui/components/hoc/withTranslations/types"

const attorneys = [
  {
    imageUri: '/attorney-2.JPG',
    fullname: 'Av. Mehmet Aldemir',
    jobTitle: 'Founder',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, expedita. Explicabo omnis odio illum molestias dolor magni tempora eius iste maiores commodi nesciunt, facilis sunt consectetur nam autem, quasi quo.',
  },
  {
    imageUri: '/attorney-1.jpeg',
    fullname: 'Av. Asil Tuna',
    jobTitle: 'Founder',
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum, expedita. Explicabo omnis odio illum molestias dolor magni tempora eius iste maiores commodi nesciunt, facilis sunt consectetur nam autem, quasi quo.',
  }
]

type Props = {} & Translations
function AboutPage({ t }: Props) {

  if (!t) {
    throw new Error('Component needs to be wrapped with HOC withTranslations')
  }

  return (
    <>
      <Section header={t('about-us')} subHeader={t('why-choose-us')} className="py-6">
        <div>Altu hukuk gecmis, vizyon, misyon, ovguler vs</div>
      </Section>
      <Section header={t('meet-our-team.header')} subHeader={t('meet-our-team.subheader')} className="bg-gray">
        <OurTeamOverview hideHeader attorneys={ attorneys }></OurTeamOverview>
      </Section>
    </>
  )
}

export default withTranslations(AboutPage)
