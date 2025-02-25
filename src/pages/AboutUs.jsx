import "../styles/AboutUs.css";

function AboutUs() {
  return (
    <main className="aboutus" aria-label="About Us page">
      <h1>About Us</h1>
      <div className="container">
        <div className="text-page">
          <h2>Discover Weekend Adventures</h2>
          <p>
            At Weekend Discoveries, we believe that memorable travel experiences
            don’t have to require long vacations or exhausting itineraries. Our
            platform is designed to inspire quick, charming weekend getaways
            near Seattle and beyond. Whether you’re craving a serene escape into
            nature, a family-friendly adventure, or a cultural exploration,
            we’ve got you covered.
          </p>
          <h2>What We Offer</h2>
          <p>
            We provide a curated selection of the best travel destinations
            within a few hours’ drive or ferry ride from Seattle. From
            picturesque national parks and bustling small towns to hidden gems
            and seasonal events, our app helps you find the perfect trip for
            every mood. With detailed trip information like must-visit spots,
            cozy stays, local dining recommendations, and fun activities,
            planning your next getaway is a breeze.
          </p>
          <h2>A Seamless Planning Experience</h2>
          <p>
            Gone are the days of juggling multiple tabs to plan a short trip.
            With Weekend Discoveries, you can browse tailored recommendations,
            filter trips by travel time, and dive into comprehensive trip
            details—all in one place. Our user-friendly interface ensures that
            you never need to rely on your browser’s back button, keeping your
            focus on discovering new adventures.
          </p>
          <h2>Our Mission</h2>
          <p>
            Our mission is simple: to help you rediscover the joy of exploring
            your local surroundings. We aim to make travel planning effortless,
            so you can spend less time worrying about logistics and more time
            making memories. Every destination on our platform is handpicked
            with love to ensure it offers something unique and unforgettable.
          </p>
          <h2>Start Your Journey</h2>
          <p>
            Whether you’re a nature enthusiast, a foodie, or someone seeking
            tranquility away from the city, Weekend Discoveries is here to guide
            your next adventure. Explore our featured trips, dive into our
            detailed blogs, and let us inspire your weekends like never before.
          </p>

          <div
            className="aboutus_panel"
            aria-label="Reasons to choose Weekend Discoveries"
          >
            <h2>Why Choose Weekend Discoveries?</h2>
            <div
              className="aboutus_item"
              aria-label="Curated Destinations details"
            >
              <h3>Curated Destinations</h3>
              <p>
                From the iconic Snoqualmie Falls to hidden spots in the San Juan
                Islands, we highlight destinations that cater to every
                traveler’s interest.
              </p>
            </div>
            <div
              className="aboutus_item"
              aria-label="Comprehensive Guides details"
            >
              <h3>Comprehensive Guides</h3>
              <p>
                Get insider tips on local stays, restaurants, restrooms, hidden
                trails, gas stations, and more.
              </p>
            </div>
            <div
              className="aboutus_item"
              aria-label="Tailored for Seattle Locals details"
            >
              <h3>Tailored for Seattle Locals</h3>
              <p>
                We understand the Pacific Northwest and the diverse experiences
                it offers, helping you find trips close to home.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
