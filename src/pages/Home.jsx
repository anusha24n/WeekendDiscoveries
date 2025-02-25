import React from "react";
import Cards from "../components/Cards";
import "../styles/Home.css";

function Home({ onTripSelect }) {
  return (
    <div id="home">
      <div className="container">
        <header className="hero">
          <h1>Welcome to Weekend Discoveries</h1>
          <p>Your guide to quick and charming weekend getaways near Seattle.</p>
        </header>
        <div className="featured-trips">
          <h2>Featured Trips</h2>
          <Cards
            onTripSelect={onTripSelect}
            aria-label="Featured trips carousel"
          />
        </div>

        <div className="two-column-section">
          <div className="travel-blogs">
            <h2>Other Travel Blogs</h2>
            <div className="blog-cards">
              <div className="blog-card">
                <img
                  className="blog-img"
                  src="/assets/Hiking.jpg"
                  alt="A man standing on a hill with scenic views of lush green hills and a cloudy sky, representing hiking trails near Seattle"
                  aria-label="Image representing hiking trails near Seattle"
                />
                <h3>10 Best Hiking Trails Near Seattle</h3>
                <p>
                  Explore the lush trails perfect for a weekend escape, from
                  beginner-friendly walks to challenging climbs.
                </p>

                <a
                  href="https://www.alltrails.com/us/washington/seattle"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                  aria-label="Read more about 10 Best Hiking Trails Near Seattle"
                >
                  Read More
                </a>
              </div>

              <div className="blog-card">
                <img
                  className="blog-img"
                  src="/assets/FriendlyDestinations.jpg"
                  alt="Families walking on a green grass field near a lake under a clear blue sky, representing family-friendly destinations"
                  aria-label="Image representing family-friendly destinations near Seattle"
                />
                <h3>Things to Do in Seattle with Kids</h3>
                <p>
                  Discover destinations that are perfect for kids and adults,
                  featuring fun activities and amenities.
                </p>
                <a
                  href="https://www.tripadvisor.com/Attractions-g60878-Activities-zft11306-Seattle_Washington.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                  aria-label="Read more about Things to Do in Seattle with Kids"
                >
                  Read More
                </a>
              </div>

              <div className="blog-card">
                <img
                  className="blog-img"
                  src="/assets/Hidden.jpg"
                  alt="A serene field with lush green plants and a mountain range in the background, representing hidden scenic gems in Washington"
                  aria-label="Image representing hidden scenic gems in Washington"
                />
                <h3>Hidden Gems in Washington</h3>
                <p>
                  Uncover the less-traveled spots that offer breathtaking views
                  and tranquility away from the crowds.
                </p>
                <a
                  href="https://www.tripadvisor.com/Attractions-g28968-Activities-zft12156-Washington.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="external-link"
                  aria-label="Read more about Hidden Gems in Washington"
                >
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="seasonal-picks">
            <h2>Seasonal Picks</h2>
            <div className="seasonal-content">
              <div className="seasonal-card">
                <h3>Spring: Tulip Festival</h3>
                <p>
                  Witness the vibrant bloom of tulips in Skagit Valley and
                  participate in local events and markets.
                </p>
              </div>
              <div className="seasonal-card">
                <h3>Summer: Beach Escapes</h3>
                <p>
                  Discover Washington's scenic beaches and enjoy kayaking,
                  paddleboarding, or simply sunbathing.
                </p>
              </div>
              <div className="seasonal-card">
                <h3>Fall: Fall Foliage Drives</h3>
                <p>
                  Take a scenic drive to enjoy the changing colors of the
                  leaves, perfect for photographers and nature lovers.
                </p>
              </div>
              <div className="seasonal-card">
                <h3>Winter: Snow Adventures</h3>
                <p>
                  Head to Crystal Mountain or Mount Rainier for skiing,
                  snowboarding, and snowshoeing.
                </p>
              </div>
              <div className="Insight-card">
                <h3>Local Insights</h3>
                <p>
                  Maximize your travel experience with curated local insights
                  that transform your trip into an unforgettable adventure. Our
                  platform connects you with tips from seasoned travelers and
                  locals who have intimate knowledge of your destination.
                  Discover the best times to visit popular attractions to avoid
                  crowds, explore hidden treasures that only locals know about,
                  and uncover scenic routes that often go unnoticed on
                  traditional maps.
                </p>
                <p>
                  Get advice on where to dine, whether it’s a cozy café tucked
                  away in an alley, a family-run eatery serving authentic local
                  dishes, or a must-visit fine dining restaurant offering
                  spectacular views. Learn about unique activities like local
                  festivals, cultural performances, and community markets that
                  showcase the essence of the region. For nature enthusiasts, we
                  guide you to serene hiking trails, secluded beaches, and
                  picturesque picnic spots that are perfect for unwinding.
                </p>
                <p>
                  Our platform also provides tips on interacting with local
                  communities respectfully and understanding their traditions
                  and customs. From the friendliest neighborhoods for shopping
                  to secret photography spots that guarantee stunning pictures,
                  our insights ensure that you experience the destination like a
                  true local. Don’t just visit—immerse yourself in the culture,
                  flavors, and stories that make your trip truly special.
                </p>
                <p>
                  Whether you’re seeking tranquil retreats or thrilling
                  adventures, our insights help you plan experiences that suit
                  your preferences. Unearth stories behind historical landmarks,
                  discover cultural hotspots, and explore hidden alleys with
                  unexpected gems. From iconic destinations to lesser-known
                  locales, our platform ensures you won’t miss a thing.
                </p>
                <p>
                  From the friendliest neighborhoods for shopping to secret
                  photography spots that guarantee stunning pictures, our
                  insights ensure that you experience the destination like a
                  true local. Don’t just visit—immerse yourself in the culture,
                  flavors, and stories that make your trip truly special. Let us
                  guide you to experiences that turn fleeting moments into
                  lifelong memories.
                </p>
                <p>
                  Stay informed with real-time updates about your destination.
                  Whether it’s weather changes, event cancellations, or road
                  closures, you can adjust your plans on the go. With our tools,
                  managing your trip becomes easier and more reliable, giving
                  you peace of mind wherever you are.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="tips-highlights">
          <h2>Travel Tips and Highlights</h2>
          <ul aria-label="Travel tips and highlights">
            <li>
              Pack layers for unpredictable weather in the Pacific Northwest.
            </li>
            <li>Check ferry schedules in advance for island trips.</li>
            <li>Book accommodations early during peak travel seasons.</li>
            <li>Don’t forget to explore local cuisines and coffee shops!</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
