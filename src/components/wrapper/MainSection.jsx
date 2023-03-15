import Button from './Button'
import ManImage  from '../../images/image-hero-desktop.png'
import ManImageMobile  from '../../images/image-hero-mobile.png'
import { ReactComponent as Databiz } from '../../images/client-databiz.svg'
import { ReactComponent as Audiophile } from '../../images/client-audiophile.svg'
import { ReactComponent as Maker } from '../../images/client-maker.svg'
import { ReactComponent as Meet } from '../../images/client-meet.svg'

function MainSection() {
  return (
    <section className="w-full flex-col xl:flex-row flex mt-6 h-screen justify-between">
      <div className="relative order-2 xl:order-1 text-center xl:text-left mt-12 xl:mt-60">

        <h1 className="text-3xl xl:text-8xl font-black xl:whitespace-pre-line mt-6">{`Make\n remote work`}</h1>

        <p className="text-medium-gray text-lg my-12 whitespace-pre-line">{`Get your team in sync, no matter your location.\n Streamline processes, create team rituals, and\n watch productivity soar.`}</p>

        <Button isFilled={true}> Learn More </Button>

        <div className="flex justify-around xl:absolute bottom-2 w-full mt-20">
          <Databiz />
          <Meet />
          <Maker />
          <Audiophile />
        </div>

      </div>

      <div className="hidden xl:flex w-2/4 mt-20 xl:order-2">
        <img src={ ManImage } alt="man" />
      </div>
      <div className="flex xl:hidden w-full mt-20 justify-center mb-8 order-1">
        <img src={ ManImageMobile } alt="man" />
      </div>
    </section>
  )
}

export default MainSection
