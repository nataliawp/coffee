import { useTranslation } from "react-i18next"
import Layout from "../../layout/Layout"
import Hero from "../../components/homeCom/Hero"

const Home = () => {
    const {t} = useTranslation()
    return(
        <Layout className=" min-h-dvh md:pt-0  pt-18">
            <Hero />
        </Layout>
    )


}

export default Home