import Banner from "../components/Banner";
import FollowUs from "../components/FollowUs";
import PopularProducts from "../components/PopularProducts";
import Review from "../components/Review";

const Home = () => {
    return (
        <div>
            <header className="mb-20">
            <Banner></Banner>
            <Review></Review>
            </header>

            <section className="space-y-12">
            <PopularProducts></PopularProducts>
            <FollowUs></FollowUs>
            </section>
        </div>
    );
};

export default Home;